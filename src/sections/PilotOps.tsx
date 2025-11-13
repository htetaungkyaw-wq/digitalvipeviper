import { motion } from 'framer-motion';
import { ArrowUpRight, Compass, Flame, Gauge, Radar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PerformanceChart } from '@/components/charts/performance-chart';

const metrics = [
  { label: 'Velocity', value: '124%', delta: '+18% vs last sprint' },
  { label: 'Win Rate', value: '42 deals', delta: '6 pilot upgrades' },
  { label: 'Runway', value: '32 days', delta: 'Operational clear' }
];

const backlog = [
  { title: 'Partner activation kit', owner: 'Growth', eta: 'Due in 3d', status: 'Ready' },
  { title: 'Thermal score UX', owner: 'Product', eta: 'Due in 5d', status: 'Blocked' },
  { title: 'Signal anomaly doc', owner: 'Revenue', eta: 'Due in 7d', status: 'In review' }
];

const timeline = [
  { time: '09:40', title: 'Northstar sync', detail: 'New energy ceiling agreed' },
  { time: '12:00', title: 'Ops drill', detail: 'Load test w/ team Zephyr' },
  { time: '15:30', title: 'Pilot retro', detail: 'Documenting learnings' }
];

export function PilotOps() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <Card className="col-span-2 bg-gradient-to-br from-slate-900/60 to-indigo-900/40">
        <CardHeader className="mb-6 flex items-center justify-between">
          <div>
            <Badge variant="glow" className="tracking-[0.3em] text-xs">
              LIVE
            </Badge>
            <CardTitle className="mt-4 text-4xl">Pilot Ops HQ</CardTitle>
            <CardDescription>
              Monitor live experiments, re-route energy, and keep every squad in phase.
            </CardDescription>
          </div>
          <Button className="whitespace-nowrap">
            Launch briefing
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm uppercase tracking-wide text-white/60">{metric.label}</p>
                <p className="mt-2 text-3xl font-semibold">{metric.value}</p>
                <p className="text-xs text-emerald-300">{metric.delta}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <div className="flex items-center gap-3">
              <Flame className="h-4 w-4 text-amber-300" />
              <p className="text-sm text-white/70">Thermal performance last 8 cycles</p>
            </div>
            <PerformanceChart />
          </div>
        </CardContent>
      </Card>

      <Card className="space-y-4">
        <CardHeader>
          <CardTitle>Flight backlog</CardTitle>
          <CardDescription>Streamlined queue of work ready for lift.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {backlog.map((item) => (
            <motion.div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-slate-900/40 p-4"
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-base font-semibold text-white">{item.title}</p>
                  <p className="text-xs text-white/60">Owned by {item.owner}</p>
                </div>
                <Badge variant="outline">{item.status}</Badge>
              </div>
              <p className="mt-3 text-sm text-white/70">{item.eta}</p>
            </motion.div>
          ))}
        </CardContent>
      </Card>

      <Card className="col-span-3 lg:col-span-3">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Radar className="h-5 w-5 text-sky-300" />
            Mission schedule
          </CardTitle>
          <CardDescription>Every checkpoint and signal broadcast.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-3">
          {timeline.map((entry, index) => (
            <motion.div
              key={entry.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/50">{entry.time}</p>
              <p className="mt-3 text-xl font-semibold text-white">{entry.title}</p>
              <p className="text-sm text-white/70">{entry.detail}</p>
            </motion.div>
          ))}
        </CardContent>
      </Card>

      <Card className="col-span-3">
        <CardContent className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-gradient-to-br from-indigo-500/30 to-fuchsia-500/30 p-5 text-white">
            <Compass className="h-6 w-6" />
            <p className="mt-4 text-sm uppercase tracking-[0.2em] text-white/80">Course</p>
            <p className="text-3xl font-semibold">North x43</p>
            <p className="text-sm text-white/80">Stability locked</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/40 p-5">
            <Gauge className="h-6 w-6 text-sky-300" />
            <p className="mt-4 text-sm uppercase tracking-[0.2em] text-white/70">Fuel</p>
            <p className="text-3xl font-semibold text-white">82%</p>
            <p className="text-sm text-emerald-300">+6% regenerated</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/40 p-5">
            <ArrowUpRight className="h-6 w-6 text-rose-300" />
            <p className="mt-4 text-sm uppercase tracking-[0.2em] text-white/70">Trajectory</p>
            <p className="text-3xl font-semibold text-white">+12°</p>
            <p className="text-sm text-white/60">Trimmed for next mission</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
