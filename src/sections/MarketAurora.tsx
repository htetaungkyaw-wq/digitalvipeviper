import { motion } from 'framer-motion';
import { Activity, AlertTriangle, MicVocal, Sparkles, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const personas = [
  {
    name: 'Signal Creators',
    mood: 'Excited',
    spend: '$184k',
    focus: 'Interactive demos',
    color: 'from-cyan-400/50 to-indigo-500/40'
  },
  {
    name: 'Ops Architects',
    mood: 'Steady',
    spend: '$92k',
    focus: 'Reliability stories',
    color: 'from-emerald-400/40 to-sky-500/30'
  },
  {
    name: 'Procurement Council',
    mood: 'Cautious',
    spend: '$63k',
    focus: 'Security briefs',
    color: 'from-amber-400/30 to-rose-400/30'
  }
];

const signals = [
  { label: 'Campaign lift', value: '+38%', detail: 'Creative sprint 07', icon: TrendingUp },
  { label: 'Audience energy', value: '81', detail: 'Above safe zone', icon: Activity },
  { label: 'Escalations', value: '2 flags', detail: 'Ops review needed', icon: AlertTriangle }
];

export function MarketAurora() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <Card className="col-span-2 bg-gradient-to-br from-slate-900/60 to-slate-900/20">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <Badge variant="glow">Signal Stream</Badge>
              <CardTitle className="mt-3 text-4xl">Market Aurora</CardTitle>
              <CardDescription>
                Monitor persona energy, creative resonance, and readiness for launch moments.
              </CardDescription>
            </div>
            <Button variant="secondary">Export pulse</Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            {signals.map((signal) => (
              <div key={signal.label} className="rounded-3xl border border-white/5 bg-white/5 p-4">
                <signal.icon className="h-5 w-5 text-sky-300" />
                <p className="mt-4 text-sm uppercase tracking-wide text-white/60">{signal.label}</p>
                <p className="mt-1 text-3xl font-semibold text-white">{signal.value}</p>
                <p className="text-sm text-white/70">{signal.detail}</p>
              </div>
            ))}
          </div>
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-r from-violet-500/20 to-sky-500/30 p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/70">Predictive launch window</p>
                <p className="text-4xl font-semibold text-white">T-05 days</p>
                <p className="text-sm text-white/70">Confidence 92%</p>
              </div>
              <Button>
                Reserve bandwidth
                <Sparkles className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {personas.map((persona) => (
          <motion.div
            key={persona.name}
            whileHover={{ y: -4 }}
            className={`rounded-3xl border border-white/10 bg-gradient-to-br ${persona.color} p-5`}
          >
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">Persona</p>
            <p className="mt-2 text-2xl font-semibold text-white">{persona.name}</p>
            <div className="mt-4 space-y-2 text-white/80">
              <p>Mood: {persona.mood}</p>
              <p>Pipeline: {persona.spend}</p>
              <p>Focus: {persona.focus}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <Card className="col-span-3">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MicVocal className="h-5 w-5 text-white/70" />
            Story cues board
          </CardTitle>
          <CardDescription>Feed creative pods with precise beats.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((slot) => (
            <div key={slot} className="rounded-3xl border border-dashed border-white/20 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">Cue {slot}</p>
              <p className="mt-3 text-xl font-semibold text-white">Drop a tension-breaker headline</p>
              <p className="text-sm text-white/70">Moodboard ready</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
