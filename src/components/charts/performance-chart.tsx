import * as React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { label: 'Jan', value: 22 },
  { label: 'Feb', value: 28 },
  { label: 'Mar', value: 35 },
  { label: 'Apr', value: 32 },
  { label: 'May', value: 42 },
  { label: 'Jun', value: 51 },
  { label: 'Jul', value: 56 },
  { label: 'Aug', value: 62 }
];

export function PerformanceChart() {
  return (
    <div className="h-56 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ left: 0, right: 0, top: 10, bottom: 0 }}>
          <defs>
            <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#a855f7" stopOpacity={0.85} />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="#1e293b" strokeDasharray="3 3" vertical={false} />
          <Tooltip
            contentStyle={{
              background: '#0f172a',
              borderRadius: 16,
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#fff'
            }}
          />
          <Area type="monotone" dataKey="value" stroke="#a855f7" fill="url(#area)" strokeWidth={3} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
