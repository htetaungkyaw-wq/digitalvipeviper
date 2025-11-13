import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, AlertTriangle, Clock8, Cpu, LoaderPinwheel } from 'lucide-react';

const incidents = [
  {
    title: 'API latency spike',
    status: 'Investigating',
    owner: 'Edge Squad',
    eta: 'Mitigate in 24m',
    severity: 'High'
  },
  {
    title: 'Webhook retries',
    status: 'Monitoring',
    owner: 'Integrations',
    eta: 'Auto scaling engaged',
    severity: 'Medium'
  },
  {
    title: 'Billing export lag',
    status: 'Resolved',
    owner: 'Finance Eng',
    eta: 'Patch shipped',
    severity: 'Low'
  }
];

const squads = [
  { name: 'Northstar Ops', load: 82, focus: 'Platform hardening' },
  { name: 'Pulse Control', load: 64, focus: 'Alert routing' },
  { name: 'Atlas Build', load: 45, focus: 'New region bring-up' }
];

export function SystemsLab() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <Card className="col-span-2 bg-gradient-to-br from-slate-900/70 to-slate-900/20">
        <CardHeader className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <Badge variant="glow">Systems Lab</Badge>
            <CardTitle className="mt-3 text-4xl">Diagnostics wall</CardTitle>
            <CardDescription>Incident drilldowns, squad bandwidth, and timers.</CardDescription>
          </div>
          <Button>
            Dispatch play
            <LoaderPinwheel className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {incidents.map((incident) => (
            <motion.div
              key={incident.title}
              whileHover={{ scale: 1.01 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-5"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-white/70">Incident</p>
                  <p className="text-2xl font-semibold text-white">{incident.title}</p>
                  <p className="text-sm text-white/70">Owner: {incident.owner}</p>
                </div>
                <Badge variant="outline">{incident.severity}</Badge>
              </div>
              <div className="mt-4 flex items-center justify-between text-white/80">
                <p>{incident.status}</p>
                <p>{incident.eta}</p>
              </div>
            </motion.div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cpu className="h-5 w-5 text-indigo-300" />
            Platform vitals
          </CardTitle>
          <CardDescription>Stack-wide snapshot.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">
            <Activity className="h-5 w-5 text-emerald-300" />
            <p className="mt-2 text-sm uppercase tracking-[0.3em] text-white/70">Throughput</p>
            <p className="text-3xl font-semibold text-white">2.4M rps</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">
            <AlertTriangle className="h-5 w-5 text-amber-300" />
            <p className="mt-2 text-sm uppercase tracking-[0.3em] text-white/70">Alerts</p>
            <p className="text-3xl font-semibold text-white">3 open</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">
            <Clock8 className="h-5 w-5 text-sky-300" />
            <p className="mt-2 text-sm uppercase tracking-[0.3em] text-white/70">MTTR</p>
            <p className="text-3xl font-semibold text-white">34m</p>
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Squad bandwidth</CardTitle>
          <CardDescription>Balance focus and avoid burn.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          {squads.map((squad) => (
            <div key={squad.name} className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">{squad.name}</p>
              <p className="mt-3 text-4xl font-semibold text-white">{squad.load}%</p>
              <p className="text-sm text-white/70">{squad.focus}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
