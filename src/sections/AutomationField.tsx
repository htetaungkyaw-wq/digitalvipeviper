import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ActivitySquare, CircuitBoard, ShieldHalf, ToggleLeft } from 'lucide-react';

const automations = [
  {
    name: 'Welcome runway',
    steps: 8,
    status: 'Calibrating',
    success: '98% deliverability',
    color: 'from-sky-500/20 to-cyan-500/10'
  },
  {
    name: 'Renewal pulse',
    steps: 6,
    status: 'Live',
    success: '72% triggered',
    color: 'from-emerald-500/20 to-lime-500/10'
  },
  {
    name: 'Compliance failsafe',
    steps: 5,
    status: 'Testing',
    success: '0 leaks',
    color: 'from-amber-500/20 to-rose-500/10'
  }
];

const audits = [
  { title: 'Signal sync', owner: 'Ops', status: 'Passed', detail: 'Latency < 80ms' },
  { title: 'Compliance', owner: 'Security', status: 'Due', detail: 'ISO addendum' },
  { title: 'Localization', owner: 'Product', status: 'In flight', detail: '6 markets' }
];

export function AutomationField() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <Card className="col-span-2 bg-gradient-to-br from-slate-900/50 to-slate-900/20">
        <CardHeader className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <Badge variant="glow">Automation Field Kit</Badge>
            <CardTitle className="mt-3 text-4xl">Blueprints on standby</CardTitle>
            <CardDescription>Preview every adaptive sequence with compliance overlays.</CardDescription>
          </div>
          <Button>
            Deploy playbook
            <ToggleLeft className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {automations.map((automation) => (
            <motion.div
              key={automation.name}
              whileHover={{ scale: 1.01 }}
              className={`rounded-3xl border border-white/10 bg-gradient-to-r ${automation.color} p-5`}
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/70">Sequence</p>
                  <p className="text-2xl font-semibold text-white">{automation.name}</p>
                </div>
                <Badge variant="outline">{automation.status}</Badge>
              </div>
              <div className="mt-4 flex items-center justify-between text-white/80">
                <p>{automation.steps} steps</p>
                <p>{automation.success}</p>
              </div>
            </motion.div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CircuitBoard className="h-5 w-5 text-sky-300" />
            Health monitor
          </CardTitle>
          <CardDescription>Infra level checks and drift alerts.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {audits.map((audit) => (
            <div key={audit.title} className="rounded-2xl border border-white/10 bg-slate-900/30 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-base font-semibold text-white">{audit.title}</p>
                  <p className="text-xs text-white/60">Team {audit.owner}</p>
                </div>
                <Badge variant="outline">{audit.status}</Badge>
              </div>
              <p className="mt-2 text-sm text-white/70">{audit.detail}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="col-span-3">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ActivitySquare className="h-5 w-5 text-emerald-300" />
            Live safety net
          </CardTitle>
          <CardDescription>Instant read on failsafes and fallback latencies.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <ShieldHalf className="h-6 w-6 text-white" />
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-white/70">Shield state</p>
            <p className="text-3xl font-semibold text-white">Green</p>
            <p className="text-sm text-white/70">Last incident 28d ago</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-white/70">Fallback latency</p>
            <p className="text-4xl font-semibold text-white">146ms</p>
            <p className="text-sm text-white/70">-12ms vs last scan</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-white/70">Energy reserve</p>
            <p className="text-4xl font-semibold text-white">64%</p>
            <p className="text-sm text-white/70">Ready for 3 spikes</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
