import { translations } from '../translations';

type HeaderProps = {
  language: keyof typeof translations;
  setLanguage: (lang: keyof typeof translations) => void;
  t: (key: string) => string;
};

export default function Header({ language, setLanguage, t }: HeaderProps) {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/14f55fcf-3139-4b74-bede-c3f196dd2af7/sentepay-logo-c6tghl6-1764944216795.webp" alt="SentePay Logo" className="h-10 w-auto" />
        <h1 className="text-2xl font-bold text-safaricom-green">{t('app.title')}</h1>
      </div>
      <div className="flex items-center space-x-4">
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-brand-text hover:text-safaricom-green font-medium">{t('nav.dashboard')}</a>
          <a href="#" className="text-brand-text hover:text-safaricom-green font-medium">{t('nav.bills')}</a>
          <a href="#" className="text-brand-text hover:text-safaricom-green font-medium">{t('nav.spending')}</a>
          <a href="#" className="text-brand-text hover:text-safaricom-green font-medium">{t('nav.settings')}</a>
        </nav>
        <div className="relative">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as keyof typeof translations)}
            className="bg-gray-100 border-2 border-gray-300 rounded-md py-2 pl-3 pr-8 text-brand-text focus:outline-none focus:border-safaricom-green appearance-none"
          >
            <option value="en">English</option>
            <option value="am">አማርኛ</option>
            <option value="om">Oromifa</option>
          </select>
        </div>
      </div>
    </header>
  );
}