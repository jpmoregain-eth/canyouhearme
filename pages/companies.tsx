import React, { useState } from 'react';
import Head from 'next/head';
import { companyProfiles } from '../data/companies';
import { companyTranslations } from '../data/i18n-companies';
import { useI18n, languages } from '../data/i18n';

export default function Companies() {
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { lang, setLang, tx } = useI18n();

  const getCompanyData = (company: typeof companyProfiles[0]) => {
    const trans = companyTranslations[lang]?.[company.id];
    if (!trans) return company;
    return {
      ...company,
      tagline: trans.tagline,
      description: trans.description,
      strengths: trans.strengths,
      weaknesses: trans.weaknesses,
    };
  };

  const displayCompanies = companyProfiles.map(getCompanyData);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Head>
        <title>{tx.companyProfiles} — {tx.siteTitle}</title>
        <meta name="description" content="Video conferencing company profiles, strengths, and areas to improve." />
      </Head>

      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center overflow-hidden">
              <img src="/logo.png" alt="CanYouHearMe" className="w-8 h-8 object-contain" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">{tx.siteTitle}</h1>
              <p className="text-xs text-slate-500">{tx.siteSubtitle}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1 px-2 py-1.5 rounded-lg hover:bg-slate-800 text-sm"
              >
                <span>{languages.find(l => l.code === lang)?.flag}</span>
                <svg className="w-3 h-3 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {langMenuOpen && (
                <div className="absolute right-0 top-full mt-1 bg-slate-800 border border-slate-700 rounded-xl overflow-hidden shadow-xl min-w-[140px] z-50">
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
            <a
              href="/"
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-sm font-medium transition-colors"
            >
              {tx.back}
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-white mb-2">{tx.companyProfiles}</h2>
          <p className="text-slate-400">{tx.companyProfilesDesc}</p>
        </div>

        <div className="space-y-6">
          {displayCompanies.map(company => (
            <div key={company.id} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
              {/* Header */}
              <div className="p-5 border-b border-slate-800">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">{company.name}</h3>
                    <p className="text-sm text-emerald-400 italic">{company.tagline}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    company.marketPosition === 'Leader' ? 'bg-emerald-500/20 text-emerald-400' :
                    company.marketPosition === 'Challenger' ? 'bg-blue-500/20 text-blue-400' :
                    company.marketPosition === 'Niche' ? 'bg-amber-500/20 text-amber-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    {company.marketPosition}
                  </span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">{company.description}</p>
                <div className="flex flex-wrap gap-3 mt-3 text-xs text-slate-500">
                  {company.founded && <span>{tx.founded}: {company.founded}</span>}
                  {company.headquarters && <span>{tx.headquarters}: {company.headquarters}</span>}
                  <a href={company.website} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">
                    {company.website.replace('https://', '')} →
                  </a>
                </div>
              </div>

              {/* Products */}
              <div className="p-5 border-b border-slate-800">
                <h4 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-3">{tx.productLineup}</h4>
                <div className="flex flex-wrap gap-2">
                  {company.products.map(p => (
                    <span key={p} className="px-3 py-1.5 bg-slate-800 text-slate-300 rounded-lg text-sm">{p}</span>
                  ))}
                </div>
              </div>

              {/* Strengths & Weaknesses */}
              <div className="grid md:grid-cols-2">
                <div className="p-5 border-b md:border-b-0 md:border-r border-slate-800">
                  <h4 className="text-sm font-medium text-emerald-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {tx.sellingPoints}
                  </h4>
                  <ul className="space-y-2">
                    {company.strengths.map((s, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-5">
                  <h4 className="text-sm font-medium text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    {tx.areasToImprove}
                  </h4>
                  <ul className="space-y-2">
                    {company.weaknesses.map((w, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t border-slate-800 mt-12 py-6 text-center space-y-2">
        <p className="text-sm text-slate-500">
          {tx.disclaimer}
        </p>
        <p className="text-sm text-slate-600">
          {tx.footerCompany} <a href="/privacy" className="text-slate-500 hover:text-emerald-400 transition-colors">{tx.privacyPolicy}</a>
        </p>
      </footer>
    </div>
  );
}
