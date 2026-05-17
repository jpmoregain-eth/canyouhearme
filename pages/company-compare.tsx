import React, { useState } from 'react';
import Head from 'next/head';
import { companyProfiles } from '../data/companies';
import { CompanyProfile } from '../data/companies';

export default function CompanyCompare() {
  const [selected, setSelected] = useState<string[]>([]);
  const [mode, setMode] = useState<'select' | 'compare'>('select');

  const toggle = (id: string) => {
    setSelected(prev => {
      if (prev.includes(id)) return prev.filter(x => x !== id);
      if (prev.length >= 3) return prev;
      return [...prev, id];
    });
  };

  const compared = selected.map(id => companyProfiles.find(c => c.id === id)).filter(Boolean) as CompanyProfile[];

  const rows = [
    { label: 'Market Position', key: 'marketPosition' },
    { label: 'Founded', key: 'founded' },
    { label: 'Headquarters', key: 'headquarters' },
    { label: 'Tagline', key: 'tagline' },
    { label: 'Product Count', key: 'products', format: (v: string[]) => String(v.length) },
    { label: 'Product Lineup', key: 'products', format: (v: string[]) => v.join(', ') },
    { label: 'Strengths', key: 'strengths', format: (v: string[]) => v.slice(0, 2).join('; ') + (v.length > 2 ? '...' : '') },
    { label: 'Weaknesses', key: 'weaknesses', format: (v: string[]) => v.slice(0, 2).join('; ') + (v.length > 2 ? '...' : '') },
  ];

  const renderCell = (c: CompanyProfile, key: string, format?: (v: any) => string) => {
    const val = (c as any)[key];
    if (!val) return <span className="text-slate-700">—</span>;
    const formatted = format ? format(val) : String(val);
    return <span className="text-slate-300">{formatted}</span>;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Head>
        <title>Company Comparison — CanYouHearMe</title>
      </Head>

      <header className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">CanYouHearMe</h1>
              <p className="text-xs text-slate-500">Company Comparison</p>
            </div>
          </div>
          <a href="/" className="text-sm text-slate-400 hover:text-white">← Back</a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {mode === 'select' ? (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-white">Compare Companies</h2>
              <p className="text-slate-400">Select up to 3 companies to compare side-by-side</p>
              <div className="text-sm text-slate-500">{selected.length}/3 selected</div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {companyProfiles.map(c => (
                <button
                  key={c.id}
                  onClick={() => toggle(c.id)}
                  className={`p-5 rounded-xl border text-left transition-all ${
                    selected.includes(c.id)
                      ? 'bg-emerald-500/10 border-emerald-500/50'
                      : 'bg-slate-900 border-slate-800 hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-lg font-bold text-white">{c.name}</div>
                      <div className="text-xs text-slate-500 mt-1">{c.tagline}</div>
                    </div>
                    <div className={`w-6 h-6 rounded border flex items-center justify-center text-xs ${
                      selected.includes(c.id)
                        ? 'bg-emerald-500 border-emerald-500 text-white'
                        : 'border-slate-600 text-slate-600'
                    }`}>
                      {selected.includes(c.id) ? '✓' : '+'}
                    </div>
                  </div>
                  <div className="text-xs text-slate-500 mt-3">{c.products.length} products</div>
                </button>
              ))}
            </div>

            <div className="flex justify-center gap-3">
              <button
                onClick={() => setSelected([])}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-sm"
              >
                Clear
              </button>
              <button
                onClick={() => { if (selected.length >= 2) setMode('compare'); }}
                disabled={selected.length < 2}
                className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 disabled:text-slate-600 text-white rounded-lg text-sm font-medium"
              >
                Compare ({selected.length})
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Side-by-Side Comparison</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => setMode('select')}
                  className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-sm"
                >
                  Reselect
                </button>
                <button
                  onClick={() => { setMode('select'); setSelected([]); }}
                  className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-sm"
                >
                  Close
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-slate-800 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-slate-900 border-b border-slate-800">
                    <th className="text-left p-4 text-slate-500 font-medium sticky left-0 bg-slate-900 min-w-[160px]">Attribute</th>
                    {compared.map(c => (
                      <th key={c.id} className="text-left p-4 min-w-[220px]">
                        <div className="text-lg font-bold text-white">{c.name}</div>
                        <div className="text-xs text-slate-500">{c.marketPosition}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map(row => (
                    <tr key={row.label} className="border-b border-slate-800/50">
                      <td className="p-4 text-slate-500 font-medium sticky left-0 bg-slate-950">{row.label}</td>
                      {compared.map(c => (
                        <td key={c.id} className="p-4">{renderCell(c, row.key, (row as any).format)}</td>
                      ))}
                    </tr>
                  ))}
                  {/* Full strengths */}
                  <tr className="border-b border-slate-800/50">
                    <td className="p-4 text-emerald-400 font-medium sticky left-0 bg-slate-950">✓ All Strengths</td>
                    {compared.map(c => (
                      <td key={c.id} className="p-4">
                        <ul className="space-y-1">
                          {c.strengths.map((s, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                              <span className="w-1 h-1 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                              {s}
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                  {/* Full weaknesses */}
                  <tr>
                    <td className="p-4 text-amber-400 font-medium sticky left-0 bg-slate-950">⚠ All Weaknesses</td>
                    {compared.map(c => (
                      <td key={c.id} className="p-4">
                        <ul className="space-y-1">
                          {c.weaknesses.map((w, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                              <span className="w-1 h-1 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                              {w}
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
