import { motion } from 'framer-motion';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Send, Share2, Sparkles, UserCheck } from 'lucide-react';

const conversations = [
  {
    name: 'Amelia Hart',
    persona: 'VP Operations',
    summary: 'Asked about advanced routing and contract structure.',
    next: 'Send premium routing deck',
    priority: 'High'
  },
  {
    name: 'Kaito Silva',
    persona: 'Product Lead',
    summary: 'Wants to embed AI review inside QA wall.',
    next: 'Demo automation field kit',
    priority: 'Medium'
  },
  {
    name: 'Sasha Patel',
    persona: 'Chief of Staff',
    summary: 'Sync on enterprise controls + new seats.',
    next: 'Schedule 1:1 with Finance',
    priority: 'High'
  }
];

const suggestions = [
  { title: 'Surface proof points', detail: 'Share customer telemetry clips', icon: Share2 },
  { title: 'Invite co-build', detail: 'Offer AI pairing session', icon: Sparkles },
  { title: 'Confirm legal', detail: 'Send updated DPA', icon: UserCheck }
];

export function AIInbox() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <Card className="col-span-2 bg-gradient-to-br from-slate-900/70 to-slate-900/30">
        <CardHeader className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <Badge variant="glow">AI Ops Inbox</Badge>
            <CardTitle className="mt-2 text-4xl">Intent heatmap</CardTitle>
            <CardDescription>Realtime prioritization of every relationship thread.</CardDescription>
          </div>
          <Button>
            Respond queue
            <Send className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {conversations.map((conversation) => (
            <motion.div
              key={conversation.name}
              whileHover={{ scale: 1.01 }}
              className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 md:flex-row md:items-center"
            >
              <div className="flex items-center gap-3 md:w-1/4">
                <Avatar name={conversation.name} />
                <div>
                  <p className="text-base font-semibold text-white">{conversation.name}</p>
                  <p className="text-xs text-white/60">{conversation.persona}</p>
                </div>
              </div>
              <div className="flex-1 text-white/80">
                <p>{conversation.summary}</p>
                <p className="text-sm text-indigo-200">Next: {conversation.next}</p>
              </div>
              <Badge variant="outline" className="whitespace-nowrap text-sm">
                {conversation.priority} priority
              </Badge>
            </motion.div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-sky-300" />
            Auto-drafted replies
          </CardTitle>
          <CardDescription>Review before releasing to inbox.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {suggestions.map((suggestion) => (
            <div key={suggestion.title} className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">
              <div className="flex items-center gap-2 text-white">
                <suggestion.icon className="h-4 w-4 text-indigo-300" />
                <p className="font-semibold">{suggestion.title}</p>
              </div>
              <p className="mt-2 text-sm text-white/70">{suggestion.detail}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Collaboration macros</CardTitle>
          <CardDescription>Swarm complex deals with the right pods.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((macro) => (
            <div key={macro} className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Macro {macro}</p>
              <p className="mt-3 text-xl font-semibold text-white">Spin up tiger team</p>
              <p className="text-sm text-white/70">Route to Legal + RevOps + Exec sponsor</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
