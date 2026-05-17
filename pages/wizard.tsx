import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import { products } from '../data/products';
import { roomSizes, platformOptions, priorities, categoryOptions } from '../data/wizard';
import { Product } from '../data/types';
import { useI18n, languages } from '../data/i18n';
import { getWizardOptionLabel, getWizardOptionDesc } from '../data/i18n-wizard';

interface Answer {
  roomSize: string;
  platform: string;
  priority: string;
  category: string;
}

const platformMap: Record<string, string> = {
  zoom: 'Zoom Rooms',
  teams: 'Microsoft Teams',
  meet: 'Google Meet',
  webex: 'Webex',
  byod: 'BYOD',
  any: 'any',
};

function scoreProduct(p: Product, answers: Answer): number {
  let score = 0;
  const sizeMap: Record<string, string[]> = {
    huddle: ['Huddle', 'Focus', 'Phone Booth', 'Small'],
    small: ['Small', 'Huddle', 'Focus'],
    medium: ['Medium', 'Small-Medium', 'Medium-Large', 'Large'],
    large: ['Large', 'Medium-Large', 'Extra Large'],
  };
  const matchedSize = sizeMap[answers.roomSize]?.some(s => p.subCategory?.toLowerCase().includes(s.toLowerCase()));
  if (matchedSize) score += 30;
  if (answers.platform === 'any' || answers.platform === 'byod') {
    score += 15;
  } else {
    const platformName = platformMap[answers.platform];
    if (p.platformSupport?.some(pl => pl.toLowerCase().includes(platformName.toLowerCase()))) {
      score += 20;
    }
  }
  if (answers.category === 'any') {
    score += 10;
  } else if (answers.category === p.category) {
    score += 20;
  }
  switch (answers.priority) {
    case 'camera':
      if (p.cameraResolution?.includes('4K') || p.cameraResolution?.includes('100MP') || p.cameraResolution?.includes('96MP')) score += 25;
      if (p.fieldOfView && parseInt(p.fieldOfView) >= 110) score += 10;
      if (p.opticalZoom || p.panTiltZoom) score += 10;
      break;
    case 'audio':
      if (p.micCount && p.micCount >= 12) score += 25;
      if (p.noiseCancellation) score += 15;
      if (p.micPickupRange?.includes('15') || p.micPickupRange?.includes('m')) score += 10;
      break;
    case 'ai':
      if (p.aiFeatures && p.aiFeatures.length >= 3) score += 25;
      if (p.aiFeatures?.some(f => f.toLowerCase().includes('tracking') || f.toLowerCase().includes('framing'))) score += 15;
      break;
    case 'value':
      if (p.company === 'Yealink' || p.company === 'MAXHUB' || p.company === 'Lenovo') score += 25;
      if (!p.specialFeatures?.some(f => f.toLowerCase().includes('premium'))) score += 10;
      break;
    case 'reliable':
      if (p.company === 'Cisco' || p.company === 'Logitech' || p.company === 'Poly') score += 25;
      if (p.productUrl) score += 5;
      break;
    case 'display':
      if (p.category === 'display' && p.displaySize) {
        const sizeNum = parseInt(p.displaySize);
        score += sizeNum >= 65 ? 35 : sizeNum >= 55 ? 25 : 15;
      }
      if (p.touchScreen) score += 15;
      break;
  }
  if (p.company === 'Neat') score += 5;

  return score;
}

export default function Wizard() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<Answer>>({});
  const [showResults, setShowResults] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { lang, setLang, tx } = useI18n();

  const steps = [
    { key: 'roomSize' as const, title: tx.wizardRoomSize, subtitle: tx.wizardRoomSizeDesc },
    { key: 'platform' as const, title: tx.wizardPlatform, subtitle: tx.wizardPlatformDesc },
    { key: 'priority' as const, title: tx.wizardPriority, subtitle: tx.wizardPriorityDesc },
    { key: 'category' as const, title: tx.wizardCategory, subtitle: tx.wizardCategoryDesc },
  ];

  const current = steps[step];
  const currentKey = current?.key;

  const setAnswer = (val: string) => {
    setAnswers(prev => ({ ...prev, [currentKey]: val }));
    if (step < steps.length - 1) {
      setStep(s => s + 1);
    } else {
      setShowResults(true);
    }
  };

  const recommendations = useMemo(() => {
    if (!showResults || !answers.roomSize || !answers.platform || !answers.priority || !answers.category) return [];
    const scored = products.map(p => ({ product: p, score: scoreProduct(p, answers as Answer) }));
    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, 5).filter(s => s.score > 0);
  }, [showResults, answers]);

  const OptionCard = ({ icon, label, desc, onClick, selected }: any) => (
    <button
      onClick={onClick}
      className={`p-5 rounded-xl border text-left transition-all hover:scale-[1.02] ${
        selected
          ? 'bg-emerald-500/10 border-emerald-500/50'
          : 'bg-slate-900 border-slate-800 hover:border-slate-600'
      }`}
    >
      <div className="text-2xl mb-2">{icon}</div>
      <div className="font-medium text-white">{label}</div>
      {desc && <div className="text-sm text-slate-500 mt-1">{desc}</div>}
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Head>
        <title>{tx.wizardTitle} — {tx.siteTitle}</title>
      </Head>

      <header className="border-b border-slate-800">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">{tx.siteTitle}</h1>
              <p className="text-xs text-slate-500">{tx.wizardTitle}</p>
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
            <a href="/" className="text-sm text-slate-400 hover:text-white">{tx.back}</a>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">
        {!showResults ? (
          <div className="space-y-8">
            {/* Progress */}
            <div className="flex gap-2 mb-8">
              {steps.map((_, i) => (
                <div key={i} className={`flex-1 h-1 rounded-full transition-colors ${
                  i <= step ? 'bg-emerald-500' : 'bg-slate-800'
                }`} />
              ))}
            </div>

            <div className="text-center space-y-2 mb-8">
              <div className="text-xs text-emerald-400 uppercase tracking-wider">{tx.wizardStep} {step + 1} / {steps.length}</div>
              <h2 className="text-2xl font-bold text-white">{current.title}</h2>
              <p className="text-slate-400">{current.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentKey === 'roomSize' && roomSizes.map(opt => (
                <OptionCard key={opt.id} icon={opt.icon} label={getWizardOptionLabel(lang, opt.id, 'room')} desc={getWizardOptionDesc(lang, opt.id, 'room')}
                  onClick={() => setAnswer(opt.id)}
                  selected={answers.roomSize === opt.id} />
              ))}
              {currentKey === 'platform' && platformOptions.map(opt => (
                <OptionCard key={opt.id} icon={opt.icon} label={getWizardOptionLabel(lang, opt.id, 'platform')}
                  onClick={() => setAnswer(opt.id)}
                  selected={answers.platform === opt.id} />
              ))}
              {currentKey === 'priority' && priorities.map(opt => (
                <OptionCard key={opt.id} icon={''} label={getWizardOptionLabel(lang, opt.id, 'priority')} desc={getWizardOptionDesc(lang, opt.id, 'priority')}
                  onClick={() => setAnswer(opt.id)}
                  selected={answers.priority === opt.id} />
              ))}
              {currentKey === 'category' && categoryOptions.map(opt => (
                <OptionCard key={opt.id} icon={''} label={getWizardOptionLabel(lang, opt.id, 'category')} desc={getWizardOptionDesc(lang, opt.id, 'category')}
                  onClick={() => setAnswer(opt.id)}
                  selected={answers.category === opt.id} />
              ))}
            </div>

            {step > 0 && (
              <div className="text-center">
                <button
                  onClick={() => setStep(s => s - 1)}
                  className="text-slate-500 hover:text-slate-300 text-sm"
                >
                  {tx.back}
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-white">{tx.wizardResults}</h2>
              <p className="text-slate-400 text-sm">
                {getWizardOptionLabel(lang, answers.roomSize || '', 'room')} · 
                {getWizardOptionLabel(lang, answers.platform || '', 'platform')} · 
                {getWizardOptionLabel(lang, answers.priority || '', 'priority')} · 
                {getWizardOptionLabel(lang, answers.category || '', 'category')}
              </p>
              <button
                onClick={() => { setShowResults(false); setStep(0); setAnswers({}); }}
                className="mt-2 text-sm text-emerald-400 hover:text-emerald-300"
              >
                {tx.wizardStartOver}
              </button>
            </div>

            {recommendations.length === 0 ? (
              <div className="text-center py-12 text-slate-500">
                {tx.noResults}
              </div>
            ) : (
              <div className="space-y-4">
                {recommendations.map(({ product: p, score }, i) => (
                  <div key={p.id} className={`bg-slate-900 border rounded-xl p-5 ${
                    i === 0 ? 'border-emerald-500/30 bg-emerald-500/5' : 'border-slate-800'
                  }`}>
                    <div className="flex items-start justify-between">
                      <div>
                        {i === 0 && (
                          <div className="text-xs text-emerald-400 font-medium mb-1">{tx.wizardTopPick}</div>
                        )}
                        <div className="text-xs text-slate-500 uppercase tracking-wider">{p.company}</div>
                        <h3 className="text-lg font-bold text-white">{p.name}</h3>
                        <div className="text-xs text-slate-400 mt-1">{p.subCategory} · {tx.wizardScore}: {score}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-emerald-400">#{i + 1}</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 text-sm">
                      {p.cameraResolution && (
                        <div><span className="text-slate-500">{tx.camera}:</span> <span className="text-slate-300">{p.cameraResolution}</span></div>
                      )}
                      {p.fieldOfView && (
                        <div><span className="text-slate-500">{tx.fov}:</span> <span className="text-slate-300">{p.fieldOfView}</span></div>
                      )}
                      {p.micCount && (
                        <div><span className="text-slate-500">{tx.mics}:</span> <span className="text-slate-300">{p.micCount} array</span></div>
                      )}
                      {p.displaySize && (
                        <div><span className="text-slate-500">{tx.display}:</span> <span className="text-slate-300">{p.displaySize}</span></div>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {p.platformSupport?.map(pl => (
                        <span key={pl} className="px-2 py-0.5 bg-slate-800 text-slate-400 rounded text-xs">{pl}</span>
                      ))}
                    </div>
                    <a href={p.productUrl} target="_blank" rel="noopener noreferrer"
                      className="mt-3 block text-center py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-sm"
                    >
                      {tx.viewProduct}
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      <footer className="border-t border-slate-800 mt-12 py-6 text-center space-y-2">
        <p className="text-sm text-slate-500">
          {tx.disclaimer}
        </p>
        <p className="text-sm text-slate-600">
          {tx.footer} <a href="/privacy" className="text-slate-500 hover:text-emerald-400 transition-colors">{tx.privacyPolicy}</a>
        </p>
      </footer>
    </div>
  );
}
