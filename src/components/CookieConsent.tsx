"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Script from "next/script";

const CONSENT_KEY = "cookie-consent";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

type Consent = "granted" | "denied" | null;

function getStoredConsent(): Consent {
  if (typeof window === "undefined") return null;
  const v = localStorage.getItem(CONSENT_KEY);
  if (v === "granted" || v === "denied") return v;
  return null;
}

export function CookieConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (stored) {
      setConsent(stored);
    } else {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "granted");
    setConsent("granted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, "denied");
    setConsent("denied");
    setVisible(false);
  };

  return (
    <>
      {consent === "granted" && GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
          </Script>
        </>
      )}

      {visible && (
        <div className="fixed inset-x-0 bottom-0 z-[60] p-4">
          <div className="mx-auto flex max-w-4xl flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-xl sm:flex-row sm:items-center sm:gap-6">
            <p className="flex-1 text-sm text-gray-600 leading-relaxed">
              Tento web používá cookies pro měření návštěvnosti (Google Analytics).
              Žádné osobní údaje nesdílíme s třetími stranami.{" "}
              <Link
                href="/ochrana-osobnich-udaju"
                className="font-medium text-primary underline underline-offset-2 hover:text-primary-dark"
              >
                Více informací
              </Link>
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                onClick={decline}
                className="rounded-xl border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
              >
                Odmítnout
              </button>
              <button
                onClick={accept}
                className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-dark"
              >
                Přijmout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
