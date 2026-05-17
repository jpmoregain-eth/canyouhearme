import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import { products, companies, platforms } from '../data/products';
import { Product } from '../data/types';
import { useI18n, languages } from '../data/i18n';

type ViewMode = 'bars' | 'displays' | 'companions' | 'management' | 'all';
type CompareMode = 'none' | 'selecting' | 'comparing';

export default function Home() {
  const [viewMode, setViewMode] = useState<ViewMode>('all');
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [compareMode, setCompareMode] = useState<CompareMode>('none');
  const [compareSelection, setCompareSelection] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>('name');

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const { lang, setLang, tx } = useI18n();

  const filtered = useMemo(() => {
    let list = products;
    if (viewMode !== 'all') {
      if (viewMode === 'bars') list = list.filter(p => p.category === 'bar');
      else if (viewMode === 'displays') list = list.filter(p => p.category === 'display');
      else if (viewMode === 'companions') list = list.filter(p => p.category === 'companion');
      else if (viewMode === 'management') list = list.filter(p => p.category === 'management');
    }
    if (selectedCompanies.length > 0) {
      list = list.filter(p => selectedCompanies.includes(p.company));
    }
    if (selectedPlatforms.length > 0) {
      list = list.filter(p => selectedPlatforms.some(pl => p.platformSupport?.includes(pl)));
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.company.toLowerCase().includes(q) ||
        p.subCategory?.toLowerCase().includes(q)
      );
    }
    // Sort: Neat first, then alphabetically by company
    list = [...list].sort((a, b) => {
      if (a.company === 'Neat' && b.company !== 'Neat') return -1;
      if (b.company === 'Neat' && a.company !== 'Neat') return 1;
      return a.company.localeCompare(b.company) || a.name.localeCompare(b.name);
    });
    return list;
  }, [viewMode, selectedCompanies, selectedPlatforms, searchQuery]);

  const toggleCompany = (c: string) => {
    setSelectedCompanies(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]);
  };
  const togglePlatform = (p: string) => {
    setSelectedPlatforms(prev => prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p]);
  };

  const toggleCompare = (id: string) => {
    setCompareSelection(prev => {
      if (prev.includes(id)) return prev.filter(x => x !== id);
      if (prev.length >= 4) return prev;
      return [...prev, id];
    });
  };

  const comparedProducts = compareSelection.map(id => products.find(p => p.id === id)).filter(Boolean) as Product[];

  const specs = [
    { key: 'cameraResolution', label: tx.camera },
    { key: 'fieldOfView', label: tx.fov },
    { key: 'opticalZoom', label: 'Zoom' },
    { key: 'micCount', label: tx.mics, format: (v: any) => v ? `${v} array` : undefined },
    { key: 'micPickupRange', label: tx.coverage },
    { key: 'speakerOutput', label: 'Speakers' },
    { key: 'maxResolution', label: 'Video Res' },
    { key: 'displaySize', label: tx.display },
    { key: 'displayResolution', label: 'Display Res' },
    { key: 'touchScreen', label: 'Touch', format: (v: any) => v ? 'Yes' : undefined },
    { key: 'dimensions', label: 'Dimensions' },
    { key: 'weight', label: 'Weight' },
    { key: 'platformSupport', label: tx.platforms, format: (v: any) => v?.join(', ') },
    { key: 'aiFeatures', label: tx.aiFeatures, format: (v: any) => v?.slice(0, 3).join(', ') + (v?.length > 3 ? '...' : '') },
  ];

  const renderSpec = (p: Product, key: string, format?: (v: any) => string | undefined) => {
    const val = (p as any)[key];
    if (val === undefined || val === null || val === false || (Array.isArray(val) && val.length === 0)) return <span className="text-slate-700">—</span>;
    const formatted = format ? format(val) : String(val);
    if (!formatted) return <span className="text-slate-700">—</span>;
    return <span className="text-slate-300">{formatted}</span>;
  };

  const ProductCard = ({ p }: { p: Product }) => (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-slate-600 transition-colors">
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">{p.company}</div>
          <h3 className="text-lg font-bold text-white">{p.name}</h3>
          <div className="text-xs text-emerald-400 mt-1">{p.subCategory}</div>
        </div>
        {compareMode === 'selecting' && (
          <button
            onClick={() => toggleCompare(p.id)}
            className={`w-6 h-6 rounded border flex items-center justify-center text-xs transition-colors ${
              compareSelection.includes(p.id)
                ? 'bg-emerald-500 border-emerald-500 text-white'
                : 'border-slate-600 text-slate-600 hover:border-slate-400'
            }`}
          >
            {compareSelection.includes(p.id) ? '✓' : '+'}
          </button>
        )}
      </div>

      <div className="space-y-1.5 text-sm">
        {p.cameraResolution && (
          <div className="flex justify-between"><span className="text-slate-500">Camera</span><span className="text-slate-300">{p.cameraResolution}</span></div>
        )}
        {p.fieldOfView && (
          <div className="flex justify-between"><span className="text-slate-500">FOV</span><span className="text-slate-300">{p.fieldOfView}</span></div>
        )}
        {p.micCount && (
          <div className="flex justify-between"><span className="text-slate-500">Mics</span><span className="text-slate-300">{p.micCount} array</span></div>
        )}
        {p.micPickupRange && (
          <div className="flex justify-between"><span className="text-slate-500">Pickup</span><span className="text-slate-300">{p.micPickupRange}</span></div>
        )}
        {p.displaySize && (
          <div className="flex justify-between"><span className="text-slate-500">Display</span><span className="text-slate-300">{p.displaySize} {p.touchScreen ? '(Touch)' : ''}</span></div>
        )}
        <div className="flex flex-wrap gap-1 mt-2">
          {p.platformSupport?.slice(0, 3).map(pl => (
            <span key={pl} className="px-2 py-0.5 bg-slate-800 text-slate-400 rounded text-xs">{pl}</span>
          ))}
        </div>
      </div>

      <a href={p.productUrl} target="_blank" rel="noopener noreferrer"
        className="mt-3 block text-center py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-sm transition-colors"
      >
        View Product Page →
      </a>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Head>
        <title>CanYouHearMe — VC Product Comparison</title>
        <meta name="description" content="Compare video conferencing bars and all-in-one displays side by side." />
      </Head>

      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center">
              <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h1 className="text-base font-bold text-white leading-tight">{tx.siteTitle}</h1>
              <p className="text-[10px] text-slate-500 leading-tight">{tx.siteSubtitle}</p>
            </div>
          </div>

          {/* Desktop Nav + Language */}
          <nav className="hidden md:flex gap-1 items-center">
            <a href="/company-compare" className="px-3 py-2 text-slate-400 hover:text-white text-sm transition-colors rounded-lg hover:bg-slate-800">{tx.navCompareCo}</a>
            <a href="/companies" className="px-3 py-2 text-slate-400 hover:text-white text-sm transition-colors rounded-lg hover:bg-slate-800">{tx.navCompanies}</a>
            {compareMode === 'none' ? (
              <button onClick={() => { setCompareMode('selecting'); setCompareSelection([]); }}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-sm font-medium transition-colors">{tx.compareProducts}</button>
            ) : compareMode === 'selecting' ? (
              <div className="flex gap-2">
                <span className="text-sm text-slate-400 self-center">{compareSelection.length}/4</span>
                <button onClick={() => { setCompareMode('none'); setCompareSelection([]); }}
                  className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-sm">{tx.cancel}</button>
                <button onClick={() => { if (compareSelection.length >= 2) setCompareMode('comparing'); }}
                  disabled={compareSelection.length < 2}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 disabled:text-slate-600 text-white rounded-lg text-sm font-medium">{tx.compareProducts} ({compareSelection.length})</button>
              </div>
            ) : (
              <div className="flex gap-2">
                <button onClick={() => setCompareMode('selecting')}
                  className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-sm">{tx.reselect}</button>
                <button onClick={() => { setCompareMode('none'); setCompareSelection([]); }}
                  className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-sm">{tx.close}</button>
              </div>
            )}

            {/* Language Toggle Desktop */}
            <div className="relative ml-2">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg hover:bg-slate-800 text-sm"
              >
                <span>{languages.find(l => l.code === lang)?.flag}</span>
                <span className="text-slate-400">{languages.find(l => l.code === lang)?.nativeLabel}</span>
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
          </nav>

          {/* Mobile: Hamburger + Lang */}
          <div className="flex items-center gap-1 md:hidden">
            {/* Mobile Lang Toggle */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-slate-800 text-lg"
              >
                {languages.find(l => l.code === lang)?.flag}
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

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-slate-800"
            >
              <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-slate-900 px-4 py-3 space-y-1">
            <a href="/company-compare" className="block px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg text-sm">{tx.navCompareCo}</a>
            <a href="/companies" className="block px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg text-sm">{tx.navCompanies}</a>
            <a href="/" className="block px-3 py-2 text-white bg-slate-800 rounded-lg text-sm">{tx.navProducts}</a>
            <div className="pt-2 border-t border-slate-800">
              {compareMode === 'none' ? (
                <button onClick={() => { setCompareMode('selecting'); setCompareSelection([]); setMobileMenuOpen(false); }}
                  className="w-full px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium">{tx.compareProducts}</button>
              ) : (
                <button onClick={() => { setCompareMode('none'); setCompareSelection([]); setMobileMenuOpen(false); }}
                  className="w-full px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-sm">{tx.cancel} {tx.compareProducts}</button>
              )}
            </div>
          </div>
        )}
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Filters */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 mb-6 space-y-4">
          {/* Search + View Mode */}
          <div className="flex flex-wrap gap-3 items-center">
            <input
              type="text"
              placeholder={tx.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 min-w-[200px] bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-slate-500"
            />
            <div className="flex bg-slate-800 rounded-lg p-1 overflow-x-auto">
              {(['all', 'bars', 'displays', 'companions', 'management'] as ViewMode[]).map(mode => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={`px-3 md:px-4 py-1.5 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                    viewMode === mode
                      ? 'bg-emerald-600 text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {mode === 'all' ? tx.allProducts : mode === 'bars' ? tx.bars : mode === 'companions' ? tx.companions : mode === 'management' ? tx.management : tx.displays}
                </button>
              ))}
            </div>
          </div>

          {/* Company Filter */}
          <div>
            <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">{tx.filterCompanies}</div>
            <div className="flex flex-wrap gap-2">
              {companies.map(c => (
                <button
                  key={c}
                  onClick={() => toggleCompany(c)}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-colors whitespace-nowrap ${
                    selectedCompanies.includes(c)
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      : 'bg-slate-800 text-slate-400 border border-slate-700 hover:border-slate-500'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Platform Filter */}
          <div>
            <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">{tx.filterPlatforms}</div>
            <div className="flex flex-wrap gap-2">
              {platforms.map(p => (
                <button
                  key={p}
                  onClick={() => togglePlatform(p)}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-colors whitespace-nowrap ${
                    selectedPlatforms.includes(p)
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      : 'bg-slate-800 text-slate-400 border border-slate-700 hover:border-slate-500'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        {compareMode === 'comparing' && comparedProducts.length >= 2 && (
          <div className="mb-8 bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
            <div className="p-4 border-b border-slate-800 flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">{tx.compareTable}</h2>
              <span className="text-sm text-slate-500">{comparedProducts.length} products</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-800">
                    <th className="text-left p-3 text-slate-500 font-medium sticky left-0 bg-slate-900 min-w-[140px]">{tx.spec}</th>
                    {comparedProducts.map(p => (
                      <th key={p.id} className="text-left p-3 min-w-[180px]">
                        <div className="text-xs text-slate-500">{p.company}</div>
                        <div className="font-bold text-white">{p.name}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {specs.map(spec => {
                    const hasValue = comparedProducts.some(p => {
                      const val = (p as any)[spec.key];
                      return val !== undefined && val !== null && val !== false && (!Array.isArray(val) || val.length > 0);
                    });
                    if (!hasValue) return null;
                    return (
                      <tr key={spec.key} className="border-b border-slate-800/50">
                        <td className="p-3 text-slate-500 font-medium sticky left-0 bg-slate-900">{spec.label}</td>
                        {comparedProducts.map(p => (
                          <td key={p.id} className="p-3">
                            {renderSpec(p, spec.key, (spec as any).format)}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-white">
            {viewMode === 'all' ? tx.allProducts : viewMode === 'bars' ? tx.bars : viewMode === 'companions' ? tx.companions : viewMode === 'management' ? tx.management : tx.displays}
            <span className="text-sm text-slate-500 font-normal ml-2">({filtered.length})</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(p => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500">{tx.noResults}</p>
            <button
              onClick={() => { setSelectedCompanies([]); setSelectedPlatforms([]); setSearchQuery(''); }}
              className="mt-2 text-emerald-400 hover:text-emerald-300 text-sm"
            >
              {tx.clearFilters}
            </button>
          </div>
        )}
      </main>

      <footer className="border-t border-slate-800 mt-12 py-6 text-center">
        <p className="text-sm text-slate-600">
          {tx.footer}
        </p>
      </footer>
    </div>
  );
}
