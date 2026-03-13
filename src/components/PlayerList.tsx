import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';
import { Badge } from '@/components/ui/badge';

const athletes = [
  {
    name: 'Samuel Mbala',
    sport: 'Football',
    level: 'Elite',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&fit=crop',
    initials: 'SM',
  },
  {
    name: 'Sarah Kalanga',
    sport: 'Basketball',
    level: 'Pro',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    initials: 'SK',
  },
  {
    name: 'David Nkosi',
    sport: 'Karate',
    level: 'Advanced',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    initials: 'DN',
  },
  {
    name: 'Grace Mwamba',
    sport: 'Danse',
    level: 'Pro',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    initials: 'GM',
  },
];

export function PlayerList() {
  const { t } = useLanguage();

  return (
    <Card className="border-none shadow-md bg-white/50 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-bold">{t.athletes} Stars</CardTitle>
        <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200 cursor-pointer">
          {t.viewAll}
        </Badge>
      </CardHeader>
      <CardContent className="grid gap-6">
        {athletes.map((athlete, index) => (
          <div key={index} className="flex items-center justify-between space-x-4">
            <div className="flex items-center space-x-4">
              <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
                <AvatarImage src={athlete.avatar} alt={athlete.name} />
                <AvatarFallback className="bg-blue-500 text-white font-semibold">
                  {athlete.initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold leading-none">{athlete.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{athlete.sport}</p>
              </div>
            </div>
            <Badge 
              variant="outline" 
              className={
                athlete.level === 'Elite' 
                  ? 'border-amber-400 text-amber-700' 
                  : 'border-blue-400 text-blue-700'
              }
            >
              {athlete.level}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}