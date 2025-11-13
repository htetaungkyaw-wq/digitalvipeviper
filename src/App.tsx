import { useState } from 'react';
import { motion } from 'framer-motion';
import { designSections } from '@/data/designs';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PilotOps } from '@/sections/PilotOps';
import { MarketAurora } from '@/sections/MarketAurora';
import { AutomationField } from '@/sections/AutomationField';
import { AIInbox } from '@/sections/AIInbox';
import { SystemsLab } from '@/sections/SystemsLab';
import { Badge } from '@/components/ui/badge';

const sectionMap: Record<string, JSX.Element> = {
  'pilot-ops': <PilotOps />,
  'market-aurora': <MarketAurora />,
  'automation-field': <AutomationField />,
  'ai-inbox': <AIInbox />,
  'systems-lab': <SystemsLab />
};

function App() {
  const [active, setActive] = useState(designSections[0].id);

  return (
    <div className="min-h-screen bg-[#010417] px-4 py-10 text-white">
      <div className="mx-auto max-w-6xl space-y-10">
        <header className="space-y-4 text-center">
          <Badge variant="glow" className="mx-auto w-fit">Design drop</Badge>
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Viper multi-surface experience
          </h1>
          <p className="text-lg text-white/70">
            Five focused canvases recreated from the latest Figma handoff — built with React, Tailwind, shadcn/ui, and motion.
          </p>
        </header>

        <Tabs defaultValue={active} value={active} onValueChange={setActive}>
          <TabsList>
            {designSections.map((section) => (
              <TabsTrigger key={section.id} value={section.id}>
                <p className="text-xs uppercase tracking-[0.4em] text-white/60">{section.tagline}</p>
                <p className="text-lg text-white">{section.title}</p>
                <p className="text-xs text-white/60">{section.description}</p>
              </TabsTrigger>
            ))}
          </TabsList>
          {designSections.map((section) => (
            <TabsContent key={section.id} value={section.id} className="bg-transparent p-0">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {sectionMap[section.id]}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}

export default App;
