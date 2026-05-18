import React, { useState } from 'react';
import Head from 'next/head';
import vcNews from '../data/vc-news.json';
import { useI18n, languages } from '../data/i18n';

export default function NewsPage() {
  const { lang, setLang, tx } = useI18n();
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Head>
        <title>Video Conferencing News — CanYouHearMe</title>
        <meta name="description" content="Latest video conferencing and collaboration news headlines from around the world" />
      </Head>

      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center overflow-hidden">
              <img src="/logo.png" alt="CanYouHearMe" className="w-7 h-7 object-contain" />
            </div>
            <div>
              <h1 className="text-base font-bold text-white leading-tight">{tx.siteTitle}</h1>
              <p className="text-[10px] text-slate-500 leading-tight">{tx.siteSubtitle}</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-1 items-center">
            <a href="/" className="px-3 py-2 text-slate-400 hover:text-white text-sm transition-colors rounded-lg hover:bg-slate-800">{tx.navProducts}</a>
            <a href="/company-compare" className="px-3 py-2 text-slate-400 hover:text-white text-sm transition-colors rounded-lg hover:bg-slate-800">{tx.navCompareCo}</a>
            <a href="/companies" className="px-3 py-2 text-slate-400 hover:text-white text-sm transition-colors rounded-lg hover:bg-slate-800">{tx.navCompanies}</a>
            <span className="px-3 py-2 text-white bg-slate-800 rounded-lg text-sm font-medium">{tx.navNews}</span>

            {/* Language Toggle */}
            <div className="relative ml-2">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg hover:bg-slate-800 text-sm"
              >
                <span>{languages.find(l => l.code === lang)?.flag}</span>
                <span className="text-slate-400">{languages.find(l => l.code === lang)?.nativeLabel}</span>
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
          </nav>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="p-2 text-slate-400 hover:text-white"
            >
              <span className="text-lg">{languages.find(l => l.code === lang)?.flag}</span>
            </button>
            {langMenuOpen && (
              <div className="absolute right-12 top-full mt-1 bg-slate-800 border border-slate-700 rounded-xl shadow-xl z-50 min-w-[140px]">
                {languages.map(l => (
                  <button
                    key={l.code}
                    onClick={() => { setLang(l.code); setLangMenuOpen(false); }}
                    className={`w-full text-left px-3 py-2 text-sm flex items-center gap-2 ${
                      lang === l.code ? 'text-emerald-400' : 'text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    <span>{l.flag}</span>
                    <span>{l.nativeLabel}</span>
                  </button>
                ))}
              </div>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-800 px-4 py-2 space-y-1 bg-slate-950">
            <a href="/" className="block px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg text-sm">{tx.navProducts}</a>
            <a href="/company-compare" className="block px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg text-sm">{tx.navCompareCo}</a>
            <a href="/companies" className="block px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg text-sm">{tx.navCompanies}</a>
            <span className="block px-3 py-2 text-white bg-slate-800 rounded-lg text-sm font-medium">{tx.navNews}</span>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white">Video Conferencing News</h1>
              <p className="text-sm text-slate-500">Latest headlines from the UC & collaboration world</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {vcNews.map((article, idx) => (
            <a
              key={idx}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-500 mt-0.5">
                  {idx + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-medium text-slate-200 group-hover:text-white transition-colors leading-snug mb-2">
                    {article.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 rounded font-medium">
                      {article.source}
                    </span>
                    <span className="text-slate-600">·</span>
                    <span className="text-slate-500">
                      {new Date(article.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    {article.keywords_matched && (
                      <>
                        <span className="text-slate-600">·</span>
                        <span className="text-slate-500">{article.keywords_matched}</span>
                      </>
                    )}
                  </div>
                  {article.summary && (
                    <p className="text-sm text-slate-500 mt-2 line-clamp-2">
                      {article.summary}
                    </p>
                  )}
                </div>
                <svg className="w-4 h-4 text-slate-600 group-hover:text-slate-400 flex-shrink-0 mt-1 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        <p className="text-xs text-slate-600 mt-6 text-center">
          Headlines sourced from global tech feeds · Click any headline to read the full article in a new tab
        </p>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 mt-12 py-6 text-center">
        <p className="text-sm text-slate-600">
          CanYouHearMe · <a href="/privacy" className="text-slate-500 hover:text-emerald-400 transition-colors">{tx.privacyPolicy}</a>
        </p>
      </footer>
    </div>
  );
}
