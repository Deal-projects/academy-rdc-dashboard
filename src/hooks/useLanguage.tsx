import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

type Translations = {
  [key in Language]: {
    dashboard: string;
    athletes: string;
    news: string;
    stats: string;
    performance: string;
    programs: string;
    centers: string;
    coaches: string;
    activeAthletes: string;
    enrolledSports: string;
    recentActivity: string;
    viewAll: string;
    upcomingEvents: string;
    languageName: string;
    searchPlaceholder: string;
    notifications: string;
    profile: string;
    settings: string;
    logout: string;
    welcomeBack: string;
    overview: string;
    growthTitle: string;
    growthSubtitle: string;
    popularSports: string;
    latestNews: string;
    readMore: string;
    academyStats: string;
  };
};

const translations: Translations = {
  fr: {
    dashboard: 'Tableau de bord',
    athletes: 'Athlètes',
    news: 'Actualités',
    stats: 'Statistiques',
    performance: 'Performance',
    programs: 'Programmes',
    centers: 'Centres',
    coaches: 'Coachs',
    activeAthletes: 'Athlètes Actifs',
    enrolledSports: 'Sports Inscrits',
    recentActivity: 'Activité Récente',
    viewAll: 'Voir tout',
    upcomingEvents: 'Événements à venir',
    languageName: 'Français',
    searchPlaceholder: 'Rechercher un athlète...',
    notifications: 'Notifications',
    profile: 'Profil',
    settings: 'Paramètres',
    logout: 'Déconnexion',
    welcomeBack: 'Bienvenue chez Champions Academy',
    overview: 'Aperçu',
    growthTitle: "Croissance de l'Académie",
    growthSubtitle: "Évolution du nombre d'inscriptions mensuelles",
    popularSports: 'Sports Populaires',
    latestNews: 'Dernières Nouvelles',
    readMore: 'Lire la suite',
    academyStats: "Stats de l'Académie",
  },
  en: {
    dashboard: 'Dashboard',
    athletes: 'Athletes',
    news: 'News',
    stats: 'Statistics',
    performance: 'Performance',
    programs: 'Programs',
    centers: 'Centers',
    coaches: 'Coaches',
    activeAthletes: 'Active Athletes',
    enrolledSports: 'Enrolled Sports',
    recentActivity: 'Recent Activity',
    viewAll: 'View all',
    upcomingEvents: 'Upcoming Events',
    languageName: 'English',
    searchPlaceholder: 'Search athlete...',
    notifications: 'Notifications',
    profile: 'Profile',
    settings: 'Settings',
    logout: 'Logout',
    welcomeBack: 'Welcome to Champions Academy',
    overview: 'Overview',
    growthTitle: 'Academy Growth',
    growthSubtitle: 'Monthly enrollment trends',
    popularSports: 'Popular Sports',
    latestNews: 'Latest News',
    readMore: 'Read more',
    academyStats: 'Academy Stats',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations[Language];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}