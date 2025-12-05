import { useState, useMemo, useCallback } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard.tsx';
import { translations } from './translations';
import { Toaster } from 'sonner';

export default function App() {
  const [language, setLanguage] = useState<keyof typeof translations>('en');

  const t = useCallback((key: string) => {
    return translations[language][key] || key;
  }, [language]);

  return (
    <div className="min-h-screen bg-brand-background font-sans">
      <Toaster richColors />
      <Header language={language} setLanguage={setLanguage} t={t} />
      <main className="p-4 sm:p-6 md:p-8">
        <Dashboard t={t} />
      </main>
    </div>
  );
}