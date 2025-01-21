"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Cal?: {
      (
        method: string,
        namespace: string,
        options?: Record<string, unknown>
      ): void;
      ns?: Record<string, CalNamespace>;
      q?: unknown[];
      loaded?: boolean;
    };
  }
}

interface CalNamespace {
  (action: string, ...args: unknown[]): void;
  q: unknown[];
}

export default function MeetingSchedule() {
  useEffect(() => {
    (function (C: Window, A: string, L: string) {
      const p = function (a: CalNamespace | Window["Cal"], ar: unknown[]) {
        if (!a || !("q" in a)) return;
        a.q!.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        function (...args: unknown[]) {
          const cal = C.Cal!;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = [];
            const script = d.createElement("script");
            script.src = A;
            d.head.appendChild(script);
            cal.loaded = true;
          }
          const ar = args;
          if (ar[0] === L) {
            const api = function (...args: unknown[]) {
              p(api as CalNamespace, args);
            };
            const namespace = ar[1];
            (api as CalNamespace).q = [] as unknown[];
            if (typeof namespace === "string") {
              cal.ns![namespace] = cal.ns![namespace] || api;
              p(cal.ns![namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else {
              p(cal, ar);
            }
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    // Initialize Cal Embed
    if (window.Cal) {
      window.Cal("init", "30min-call", { origin: "https://cal.com" });

      window.Cal.ns?.["30min-call"]?.("inline", {
        elementOrSelector: "#my-cal-inline",
        config: { layout: "month_view" },
        calLink: "editnow/30min-call",
      });
    }
  }, []);

  return (
    <section className="section_wrapper">
      <div
        id="my-cal-inline"
        style={{
          width: "100%",
          height: "100%",
          overflow: "scroll",
        }}
      ></div>
    </section>
  );
}
