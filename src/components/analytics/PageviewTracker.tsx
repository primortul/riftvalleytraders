"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * First-party pageview beacon for Next.js App Router sites.
 *
 * This file is the canonical snippet and is copied verbatim into each tracked
 * repo — all per-site configuration arrives as props, so fanning out to another
 * site is a copy plus one `<PageviewTracker site=... hostnames={...} />` call, with
 * no edit inside this file.
 *
 * Why a component and not a plain `<script>`: App Router client-side navigation
 * never triggers a fresh page load, so a script that fires once on load records
 * only the landing page. `usePathname()` gives us the one reliable signal for
 * "the route changed".
 *
 * Deliberately keyed on the pathname only, not the query string. The collector
 * strips the query out of `path` anyway (it fragments the top-pages list and is
 * where a stray token would leak), so a query-only change is not a new pageview.
 * This also keeps `useSearchParams()` out of the tree, which would otherwise opt
 * every page that renders this component out of static rendering.
 *
 * Sends nothing that identifies a person: no cookie, no localStorage, no client
 * id. The visitor hash is derived server-side from IP + user agent + a
 * daily-rotating salt, which is why there is no consent banner to show.
 */

const DEFAULT_COLLECTOR_URL =
  "https://amoscustomhomes.netlify.app/api/analytics/collect";

export interface PageviewTrackerProps {
  /** Site slug. Must match a row in `analytics_sites` or the event is dropped. */
  site: string;
  /**
   * Exact hostnames that may report. Includes the `*.netlify.app` production
   * address for sites still pre-cutover on their custom domain — a single
   * canonical-domain check would record zero rows for those.
   */
  hostnames: string[];
  /** Override for local collector testing. */
  collectorUrl?: string;
  /**
   * Escape hatch for verifying the pipeline from a deploy preview, where the
   * hostname check correctly refuses to report. Off unless explicitly passed.
   */
  force?: boolean;
}

/** Honour both the old DNT header and the newer Global Privacy Control. */
function privacySignalSet(): boolean {
  const nav = navigator as Navigator & {
    msDoNotTrack?: string;
    globalPrivacyControl?: boolean;
  };
  const win = window as Window & { doNotTrack?: string };
  return (
    nav.doNotTrack === "1" ||
    nav.msDoNotTrack === "1" ||
    win.doNotTrack === "1" ||
    nav.globalPrivacyControl === true
  );
}

/**
 * `deploy-preview-42--site.netlify.app` and `branch--site.netlify.app` are
 * ephemeral; the production URL is the bare `site.netlify.app` with no `--`.
 */
function isEphemeralNetlifyHost(hostname: string): boolean {
  return hostname.endsWith(".netlify.app") && hostname.includes("--");
}

function isLocalHost(hostname: string): boolean {
  return (
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname === "::1" ||
    hostname === "[::1]" ||
    hostname.endsWith(".local") ||
    hostname.endsWith(".localhost")
  );
}

function shouldTrack(hostnames: string[], force: boolean): boolean {
  if (force) return true;
  const host = location.hostname.toLowerCase().replace(/\.$/, "");
  if (isLocalHost(host) || isEphemeralNetlifyHost(host)) return false;
  return hostnames.map((h) => h.toLowerCase()).includes(host);
}

/**
 * Exported both ways on purpose: the repos this file is copied into disagree on
 * whether components are default or named exports, and keeping both means the
 * file stays byte-identical everywhere instead of forking per repo.
 */
export function PageviewTracker({
  site,
  hostnames,
  collectorUrl = DEFAULT_COLLECTOR_URL,
  force = false,
}: PageviewTrackerProps) {
  const pathname = usePathname();
  // React runs effects twice in development Strict Mode, and a remount would
  // otherwise re-send the same route. One beacon per route, per mount.
  const lastSent = useRef<string | null>(null);
  // Joined so a fresh array literal from the caller does not re-run the effect.
  const hostKey = hostnames.join(",");

  useEffect(() => {
    if (!pathname || lastSent.current === pathname) return;
    if (privacySignalSet() || !shouldTrack(hostKey.split(","), force)) return;
    lastSent.current = pathname;

    const params = new URLSearchParams(location.search);
    const payload = JSON.stringify({
      site,
      path: pathname,
      referrer: document.referrer || null,
      utm_source: params.get("utm_source"),
      utm_medium: params.get("utm_medium"),
      utm_campaign: params.get("utm_campaign"),
    });

    // text/plain keeps this a CORS "simple request", so the cross-origin beacon
    // costs one round trip instead of a preflight plus a POST. The collector
    // parses the body as JSON regardless of the declared type.
    const contentType = "text/plain;charset=UTF-8";

    try {
      if (typeof navigator.sendBeacon === "function") {
        const queued = navigator.sendBeacon(
          collectorUrl,
          new Blob([payload], { type: contentType }),
        );
        if (queued) return;
      }
      // keepalive lets the request outlive the page during a navigation away.
      void fetch(collectorUrl, {
        method: "POST",
        headers: { "Content-Type": contentType },
        body: payload,
        keepalive: true,
        credentials: "omit",
        mode: "cors",
      }).catch(() => {
        // Analytics must never surface as an error on the page.
      });
    } catch {
      // Same.
    }
  }, [pathname, site, hostKey, collectorUrl, force]);

  return null;
}

export default PageviewTracker;
