import { DashboardLayout } from '@/components/DashboardLayout';
import { StatsGrid } from '@/components/StatsGrid';
import { PerformanceChart } from '@/components/PerformanceChart';
import { PlayerList } from '@/components/PlayerList';
import { NewsSection } from '@/components/NewsSection';
import { useLanguage, LanguageProvider } from '@/hooks/useLanguage';
import { Toaster } from '@/components/ui/sonner';

function DashboardContent() {
  const { t } = useLanguage();

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-black tracking-tight text-blue-950 lg:text-4xl">
          {t.welcomeBack} 👋
        </h1>
        <p className="text-slate-500">
          Voici un aperçu de l'activité de votre académie aujourd'hui.
        </p>
      </div>

      <StatsGrid />

      <div className="grid gap-6 lg:grid-cols-6">
        <div className="lg:col-span-4 space-y-6">
          <PerformanceChart />
          <div className="grid gap-6 md:grid-cols-2 lg:hidden">
            <PlayerList />
            <NewsSection />
          </div>
          <div className="hidden lg:block">
             <div className="rounded-2xl bg-blue-900 p-8 text-white relative overflow-hidden">
                <div className="relative z-10 max-w-md">
                  <h3 className="text-2xl font-bold mb-2">Camp d'été 2024</h3>
                  <p className="text-blue-100 mb-6">Préparez vos futurs champions avec nos stages intensifs de perfectionnement technique.</p>
                  <button className="bg-white text-blue-900 px-6 py-2 rounded-full font-bold text-sm hover:bg-blue-50 transition-colors">
                    S'inscrire maintenant
                  </button>
                </div>
                <div className="absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-blue-800/50 blur-3xl" />
                <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden md:block opacity-20">
                  <img 
                    src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/4552933d-53a5-4423-ad5e-492c50d571e0/academy-logo-a4443dc0-1773396821951.webp" 
                    className="h-40 w-40"
                    alt=""
                  />
                </div>
             </div>
          </div>
        </div>
        
        <div className="lg:col-span-2 space-y-6 hidden lg:flex lg:flex-col">
          <PlayerList />
          <NewsSection />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <DashboardLayout>
        <DashboardContent />
      </DashboardLayout>
      <Toaster position="top-right" richColors />
    </LanguageProvider>
  );
}