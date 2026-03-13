import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';
import { Calendar, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const news = [
  {
    title: 'Inscriptions 2024 Ouvertes',
    date: '15 Mars 2024',
    category: 'Academy',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/4552933d-53a5-4423-ad5e-492c50d571e0/academy-building-b3136a89-1773396825315.webp',
  },
  {
    title: 'Nouveau Programme Basketball',
    date: '10 Mars 2024',
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&h=300&fit=crop',
  },
  {
    title: 'Tournoi Inter-Centres Kinshasa',
    date: '02 Mars 2024',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=500&h=300&fit=crop',
  },
];

export function NewsSection() {
  const { t } = useLanguage();

  return (
    <Card className="border-none shadow-md bg-white/50 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-bold">{t.latestNews}</CardTitle>
        <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
          {t.viewAll} <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="grid gap-4">
        {news.map((item, index) => (
          <div key={index} className="group relative flex flex-col space-y-2 overflow-hidden rounded-xl bg-slate-50 p-2 transition-all hover:bg-slate-100">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <img 
                src={item.image} 
                alt={item.title} 
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-2 left-2">
                <span className="rounded-full bg-blue-600/90 px-2.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur-sm">
                  {item.category}
                </span>
              </div>
            </div>
            <div className="p-1">
              <div className="flex items-center text-[10px] text-muted-foreground mb-1">
                <Calendar className="mr-1 h-3 w-3" />
                {item.date}
              </div>
              <h4 className="line-clamp-2 text-sm font-bold leading-tight group-hover:text-blue-600">
                {item.title}
              </h4>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}