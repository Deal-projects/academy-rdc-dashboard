import { Users, Trophy, MapPin, Star } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function StatsGrid() {
  const { t } = useLanguage();

  const stats = [
    {
      title: t.activeAthletes,
      value: '520+',
      icon: Users,
      description: '+12% ce mois',
      color: 'text-blue-600',
    },
    {
      title: t.coaches,
      value: '25',
      icon: Star,
      description: 'Experts Certifiés',
      color: 'text-amber-500',
    },
    {
      title: t.centers,
      value: '4',
      icon: MapPin,
      description: 'À travers Kinshasa',
      color: 'text-emerald-600',
    },
    {
      title: 'Programmes',
      value: '12',
      icon: Trophy,
      description: 'Sports & Formations',
      color: 'text-red-600',
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index} className="border-none shadow-md overflow-hidden bg-white/50 backdrop-blur-sm transition-all hover:shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {stat.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}