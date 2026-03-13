import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';

const data = [
  { name: 'Jan', athletes: 400, sessions: 240 },
  { name: 'Fév', athletes: 420, sessions: 300 },
  { name: 'Mar', athletes: 450, sessions: 320 },
  { name: 'Avr', athletes: 480, sessions: 380 },
  { name: 'Mai', athletes: 500, sessions: 420 },
  { name: 'Juin', athletes: 520, sessions: 450 },
];

export function PerformanceChart() {
  const { t } = useLanguage();

  return (
    <Card className="col-span-1 lg:col-span-4 border-none shadow-md bg-white/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle>{t.growthTitle}</CardTitle>
        <CardDescription>{t.growthSubtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorAthletes" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1e40af" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#1e40af" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" vertical={false} />
              <XAxis 
                dataKey="name" 
                stroke="#888888" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false} 
              />
              <YAxis 
                stroke="#888888" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false} 
                tickFormatter={(value) => `${value}`}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  borderRadius: '8px', 
                  border: 'none', 
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)' 
                }} 
              />
              <Area 
                type="monotone" 
                dataKey="athletes" 
                stroke="#1e40af" 
                fillOpacity={1} 
                fill="url(#colorAthletes)" 
                strokeWidth={3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}