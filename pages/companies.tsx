import React from 'react';
import Head from 'next/head';
import { companyProfiles } from '../data/companies';

export default function Companies() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Head>
        <title>Company Profiles — CanYouHearMe</title>
        <meta name="description" content="Video conferencing company profiles, strengths, and areas to improve." />
      </Head>

      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">CanYouHearMe</h1>
              <p className="text-xs text-slate-500">VC Product Comparison</p>
            </div>
          </div>
          <a
            href="/"
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-sm font-medium transition-colors"
          >
            ← Back to Products
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-white mb-2">Company Profiles</h2>
          <p className="text-slate-400">Who makes what — and what they're good (and not so good) at</p>
        </div>

        <div className="space-y-6">
          {companyProfiles.map(company => (
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
                  {company.founded && <span>Founded: {company.founded}</span>}
                  {company.headquarters && <span>HQ: {company.headquarters}</span>}
                  <a href={company.website} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">
                    {company.website.replace('https://', '')} →
                  </a>
                </div>
              </div>

              {/* Products */}
              <div className="p-5 border-b border-slate-800">
                <h4 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-3">Product Lineup</h4>
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
                    Selling Points
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
                    Areas to Improve
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

      <footer className="border-t border-slate-800 mt-12 py-6 text-center">
        <p className="text-sm text-slate-600">
          CanYouHearMe — VC Product Comparison. No affiliation with any manufacturer.
        </p>
      </footer>
    </div>
  );
}
