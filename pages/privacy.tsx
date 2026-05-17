import React, { useState } from 'react';
import Head from 'next/head';
import { useI18n, languages } from '../data/i18n';

export default function PrivacyPolicy() {
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { lang, setLang, tx } = useI18n();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Head>
        <title>Privacy Policy — CanYouHearMe</title>
        <meta name="description" content="Privacy policy for CanYouHearMe VC Product Comparison." />
      </Head>

      <header className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">CanYouHearMe</h1>
              <p className="text-xs text-slate-500">{tx.siteSubtitle}</p>
            </div>
          </a>

          <div className="flex items-center gap-2">
            <a href="/" className="px-3 py-2 text-slate-400 hover:text-white text-sm transition-colors rounded-lg hover:bg-slate-800">{tx.navProducts}</a>
            <div className="relative ml-2">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg hover:bg-slate-800 text-sm"
              >
                <span>{languages.find(l => l.code === lang)?.flag}</span>
                <svg className="w-3 h-3 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {langMenuOpen && (
                <div className="absolute right-0 top-full mt-1 bg-slate-800 border border-slate-700 rounded-xl overflow-hidden shadow-xl min-w-[160px] z-50">
                  {languages.map(l => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setLangMenuOpen(false); }}
                      className={`w-full text-left px-3 py-2 text-sm flex items-center gap-2 transition-colors ${
                        lang === l.code ? 'bg-emerald-500/20 text-emerald-400' : 'text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      <span>{l.flag}</span>
                      <span>{l.nativeLabel}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-white mb-6">Privacy Policy</h1>
        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p>
            <strong className="text-white">Last updated:</strong> May 17, 2026
          </p>
          <p>
            CanYouHearMe respects your privacy. This Privacy Policy explains what information we collect and how we use it.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">1. Information We Do Not Collect</h2>
          <p>
            CanYouHearMe is a static informational website. We do not:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Require user registration or login</li>
            <li>Collect personal information such as names, email addresses, or phone numbers</li>
            <li>Store any user-submitted data on our servers</li>
            <li>Upload or process files</li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-8">2. Local Storage</h2>
          <p>
            We use your browser's localStorage to remember your language preference (e.g., English, Bahasa Melayu, Vietnamese). This data stays on your device and is never transmitted to our servers.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">3. Analytics</h2>
          <p>
            We do not use Google Analytics, Facebook Pixel, or any third-party tracking scripts. We do not track your browsing behavior.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">4. External Links</h2>
          <p>
            Product links on this site direct you to manufacturer websites (e.g., neat.no, logitech.com, cisco.com). These third-party sites have their own privacy policies which we encourage you to review.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">5. Contact</h2>
          <p>
            For privacy-related questions, contact us through the information provided on this site.
          </p>
        </div>
      </main>

      <footer className="border-t border-slate-800 mt-12 py-6 text-center">
        <p className="text-sm text-slate-600">
          {tx.footer}
        </p>
      </footer>
    </div>
  );
}
