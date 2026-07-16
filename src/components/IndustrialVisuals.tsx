import { useEffect, useRef, useState } from 'react';

// ============= ANIMATED COUNTER =============
export function Counter({ value, suffix = '', duration = 2000 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !started.current) {
        started.current = true;
        const start = Date.now();
        const tick = () => {
          const elapsed = Date.now() - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * value));
          if (progress < 1) requestAnimationFrame(tick);
          else setCount(value);
        };
        tick();
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// ============= HERO VISUAL — Industrial AI Composition =============
export function HeroVisual() {
  return (
    <div className="relative w-full h-full min-h-[500px] flex items-center justify-center">
      {/* Central orb */}
      <div className="relative w-80 h-80 lg:w-96 lg:h-96">
        {/* Outer glow */}
        <div className="absolute inset-0 bg-ops-blue/20 rounded-full blur-3xl animate-pulse-slow" />
        {/* Rotating ring */}
        <div className="absolute inset-0 rounded-full border border-ops-blue/20 animate-spin-slow" />
        <div className="absolute inset-8 rounded-full border border-ops-blue-light/20 animate-spin-slow" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
        <div className="absolute inset-16 rounded-full border border-dashed border-ops-blue/15 animate-spin-slow" style={{ animationDuration: '20s' }} />

        {/* Central hub */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full glass-card flex items-center justify-center glow-pulse">
            <svg viewBox="0 0 100 100" className="w-20 h-20 lg:w-24 lg:h-24">
              {/* Neural network node cluster */}
              <g>
                {/* Central node */}
                <circle cx="50" cy="50" r="6" fill="#1B6FE8" />
                <circle cx="50" cy="50" r="10" fill="none" stroke="#1B6FE8" strokeWidth="0.5" opacity="0.4" />
                {/* Outer nodes */}
                <circle cx="20" cy="30" r="3" fill="#4A90F0" className="animate-pulse" />
                <circle cx="80" cy="30" r="3" fill="#4A90F0" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                <circle cx="20" cy="70" r="3" fill="#4A90F0" className="animate-pulse" style={{ animationDelay: '1s' }} />
                <circle cx="80" cy="70" r="3" fill="#4A90F0" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
                <circle cx="50" cy="15" r="2.5" fill="#1B6FE8" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
                <circle cx="50" cy="85" r="2.5" fill="#1B6FE8" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
                {/* Connections */}
                <line x1="50" y1="50" x2="20" y2="30" stroke="#1B6FE8" strokeWidth="0.5" opacity="0.3" />
                <line x1="50" y1="50" x2="80" y2="30" stroke="#1B6FE8" strokeWidth="0.5" opacity="0.3" />
                <line x1="50" y1="50" x2="20" y2="70" stroke="#1B6FE8" strokeWidth="0.5" opacity="0.3" />
                <line x1="50" y1="50" x2="80" y2="70" stroke="#1B6FE8" strokeWidth="0.5" opacity="0.3" />
                <line x1="50" y1="50" x2="50" y2="15" stroke="#1B6FE8" strokeWidth="0.5" opacity="0.3" />
                <line x1="50" y1="50" x2="50" y2="85" stroke="#1B6FE8" strokeWidth="0.5" opacity="0.3" />
                <line x1="20" y1="30" x2="50" y2="15" stroke="#4A90F0" strokeWidth="0.3" opacity="0.2" />
                <line x1="80" y1="30" x2="50" y2="15" stroke="#4A90F0" strokeWidth="0.3" opacity="0.2" />
                <line x1="20" y1="70" x2="50" y2="85" stroke="#4A90F0" strokeWidth="0.3" opacity="0.2" />
                <line x1="80" y1="70" x2="50" y2="85" stroke="#4A90F0" strokeWidth="0.3" opacity="0.2" />
              </g>
            </svg>
          </div>
        </div>

        {/* Orbiting dots */}
        <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '10s' }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-ops-blue shadow-blue-glow" />
        </div>
        <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '10s', animationDirection: 'reverse' }}>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-ops-blue-light" />
        </div>
      </div>

      {/* Floating KPI Cards */}
      <div className="absolute top-[5%] left-[2%] hidden md:block animate-float-slow">
        <div className="glass-card p-4 w-40 shadow-glass">
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xs font-semibold text-ops-gray-400 uppercase tracking-wider">Machine Health</span>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </div>
          <p className="text-2xl font-bold text-ops-black dark:text-white">98%</p>
          <div className="mt-2 h-1 bg-ops-gray-200 dark:bg-ops-gray-800 rounded-full overflow-hidden">
            <div className="h-full w-[98%] bg-gradient-to-r from-green-500 to-ops-blue rounded-full" />
          </div>
        </div>
      </div>

      <div className="absolute top-[10%] right-[0%] hidden md:block animate-float-slower">
        <div className="glass-card p-4 w-40 shadow-glass">
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xs font-semibold text-ops-gray-400 uppercase tracking-wider">Production Today</span>
          </div>
          <p className="text-2xl font-bold text-ops-black dark:text-white">94%</p>
          <div className="mt-2 flex items-end gap-1 h-8">
            {[60, 75, 50, 85, 70, 94].map((h, i) => (
              <div key={i} className="flex-1 bg-ops-blue/30 rounded-sm" style={{ height: `${h}%` }}>
                <div className="w-full h-full bg-gradient-to-t from-ops-blue/40 to-ops-blue rounded-sm" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-[8%] left-[5%] hidden md:block animate-float" style={{ animationDelay: '1s' }}>
        <div className="glass-card p-4 w-44 shadow-glass">
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xs font-semibold text-ops-gray-400 uppercase tracking-wider">Maintenance Due</span>
            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          </div>
          <div className="flex items-center gap-2">
            <p className="text-2xl font-bold text-ops-black dark:text-white">3</p>
            <span className="text-xs text-ops-gray-400">Machines</span>
          </div>
          <div className="mt-2 flex gap-1.5">
            <div className="flex-1 h-1.5 rounded-full bg-amber-500/40" />
            <div className="flex-1 h-1.5 rounded-full bg-amber-500/40" />
            <div className="flex-1 h-1.5 rounded-full bg-amber-500/40" />
            <div className="flex-1 h-1.5 rounded-full bg-ops-gray-200 dark:bg-ops-gray-800" />
            <div className="flex-1 h-1.5 rounded-full bg-ops-gray-200 dark:bg-ops-gray-800" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-[12%] right-[3%] hidden md:block animate-float-slow" style={{ animationDelay: '2s' }}>
        <div className="glass-card p-4 w-40 shadow-glass">
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xs font-semibold text-ops-gray-400 uppercase tracking-wider">Downtime</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-green-500">↓18%</span>
          </div>
          <svg viewBox="0 0 100 30" className="mt-2 w-full h-8">
            <polyline points="0,5 20,10 40,8 60,15 80,12 100,20" fill="none" stroke="#10b981" strokeWidth="1.5" />
            <polyline points="0,5 20,10 40,8 60,15 80,12 100,20" fill="none" stroke="#10b981" strokeWidth="0.5" opacity="0.3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// ============= DASHBOARD MOCKUP =============
export function DashboardMockup({ variant = 'default' }: { variant?: 'default' | 'maintenance' | 'production' | 'inventory' | 'executive' }) {
  const bars = [65, 80, 45, 90, 70, 55, 85, 60, 75, 50, 95, 68];

  return (
    <div className="relative w-full rounded-2xl glass-card p-5 shadow-glass overflow-hidden">
      {/* Scan line effect */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ops-blue/40 to-transparent scan-line" />

      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-2xs font-semibold text-ops-gray-400 uppercase tracking-wider">
            {variant === 'maintenance' ? 'Maintenance Dashboard' : variant === 'production' ? 'Production Dashboard' : variant === 'inventory' ? 'Inventory Dashboard' : variant === 'executive' ? 'Executive Dashboard' : 'Operations Dashboard'}
          </span>
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        {[
          { label: 'OEE', value: '85%', trend: '+3%', color: 'text-green-500' },
          { label: 'MTTR', value: '2.4h', trend: '-12%', color: 'text-green-500' },
          { label: 'MTBF', value: '168h', trend: '+8%', color: 'text-green-500' },
        ].map((kpi, i) => (
          <div key={i} className="p-3 rounded-xl bg-ops-gray-50 dark:bg-ops-gray-800/50 border border-ops-gray-200 dark:border-ops-gray-800">
            <p className="text-2xs font-medium text-ops-gray-400 uppercase tracking-wider">{kpi.label}</p>
            <p className="text-lg font-bold text-ops-black dark:text-white mt-1">{kpi.value}</p>
            <p className={`text-2xs font-semibold ${kpi.color} mt-0.5`}>{kpi.trend}</p>
          </div>
        ))}
      </div>

      {/* Chart area */}
      <div className="rounded-xl bg-ops-gray-50 dark:bg-ops-gray-800/50 border border-ops-gray-200 dark:border-ops-gray-800 p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-2xs font-semibold text-ops-gray-400 uppercase tracking-wider">Production Trend</span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-ops-blue" />
            <span className="text-2xs text-ops-gray-400">12 months</span>
          </div>
        </div>
        <div className="flex items-end gap-1.5 h-24">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col justify-end h-full">
              <div
                className="w-full rounded-t-sm bg-gradient-to-t from-ops-blue/20 to-ops-blue transition-all duration-500"
                style={{ height: `${h}%`, animationDelay: `${i * 50}ms` }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Status row */}
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 rounded-xl bg-ops-gray-50 dark:bg-ops-gray-800/50 border border-ops-gray-200 dark:border-ops-gray-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xs font-semibold text-ops-gray-400 uppercase tracking-wider">Machine Status</span>
          </div>
          <div className="space-y-1.5">
            {[
              { name: 'Line A', status: 'Running', color: 'bg-green-500' },
              { name: 'Line B', status: 'Running', color: 'bg-green-500' },
              { name: 'Line C', status: 'Maintenance', color: 'bg-amber-500' },
            ].map((m, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`w-1.5 h-1.5 rounded-full ${m.color} animate-pulse`} />
                <span className="text-2xs text-ops-gray-500 dark:text-ops-gray-400">{m.name}</span>
                <span className="text-2xs text-ops-gray-400 ml-auto">{m.status}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="p-3 rounded-xl bg-ops-gray-50 dark:bg-ops-gray-800/50 border border-ops-gray-200 dark:border-ops-gray-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xs font-semibold text-ops-gray-400 uppercase tracking-wider">Alerts</span>
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
              <span className="text-2xs text-ops-gray-500 dark:text-ops-gray-400">Temp alert</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span className="text-2xs text-ops-gray-500 dark:text-ops-gray-400">PM due soon</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-ops-blue" />
              <span className="text-2xs text-ops-gray-500 dark:text-ops-gray-400">Sync complete</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============= INDUSTRIAL SCENE ILLUSTRATIONS =============
export function FactoryScene({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute -inset-4 bg-gradient-to-tr from-ops-blue/10 to-ops-blue-light/10 rounded-4xl blur-2xl" />
      <div className="relative rounded-2xl glass-card p-8 overflow-hidden">
        <svg viewBox="0 0 400 300" className="w-full h-auto">
          {/* Grid background */}
          <defs>
            <pattern id="factoryGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.05" />
            </pattern>
            <linearGradient id="factoryGlow" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1B6FE8" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#4A90F0" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <rect width="400" height="300" fill="url(#factoryGrid)" />

          {/* Factory buildings */}
          <g>
            {/* Main building */}
            <rect x="60" y="120" width="120" height="100" rx="4" fill="url(#factoryGlow)" stroke="#1B6FE8" strokeWidth="1" opacity="0.6" />
            <rect x="60" y="110" width="120" height="10" rx="2" fill="#1B6FE8" opacity="0.15" />

            {/* Roof details */}
            <polygon points="60,120 90,100 150,100 180,120" fill="none" stroke="#1B6FE8" strokeWidth="1" opacity="0.3" />

            {/* Windows */}
            <rect x="75" y="140" width="20" height="20" rx="2" fill="#1B6FE8" opacity="0.2" />
            <rect x="105" y="140" width="20" height="20" rx="2" fill="#1B6FE8" opacity="0.15" />
            <rect x="135" y="140" width="20" height="20" rx="2" fill="#1B6FE8" opacity="0.2" />
            <rect x="75" y="175" width="20" height="20" rx="2" fill="#1B6FE8" opacity="0.15" />
            <rect x="105" y="175" width="20" height="20" rx="2" fill="#1B6FE8" opacity="0.2" />
            <rect x="135" y="175" width="20" height="20" rx="2" fill="#1B6FE8" opacity="0.15" />

            {/* Chimney */}
            <rect x="150" y="70" width="16" height="50" rx="2" fill="#1B6FE8" opacity="0.2" stroke="#1B6FE8" strokeWidth="0.5" />
            <circle cx="158" cy="65" r="3" fill="#4A90F0" className="animate-pulse" opacity="0.4" />

            {/* Second building */}
            <rect x="220" y="140" width="100" height="80" rx="4" fill="url(#factoryGlow)" stroke="#1B6FE8" strokeWidth="1" opacity="0.4" />
            <rect x="235" y="160" width="15" height="15" rx="2" fill="#1B6FE8" opacity="0.15" />
            <rect x="260" y="160" width="15" height="15" rx="2" fill="#1B6FE8" opacity="0.2" />
            <rect x="285" y="160" width="15" height="15" rx="2" fill="#1B6FE8" opacity="0.15" />
            <rect x="235" y="185" width="15" height="15" rx="2" fill="#1B6FE8" opacity="0.2" />
            <rect x="260" y="185" width="15" height="15" rx="2" fill="#1B6FE8" opacity="0.15" />
            <rect x="285" y="185" width="15" height="15" rx="2" fill="#1B6FE8" opacity="0.2" />
          </g>

          {/* Connected machines — dots and lines */}
          <g>
            {/* Connection lines */}
            <line x1="120" y1="170" x2="270" y2="180" stroke="#1B6FE8" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" className="animate-pulse" />
            <line x1="120" y1="170" x2="200" y2="60" stroke="#4A90F0" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.2" />
            <line x1="270" y1="180" x2="340" y2="100" stroke="#4A90F0" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.2" />

            {/* Data nodes */}
            <circle cx="200" cy="60" r="6" fill="#1B6FE8" opacity="0.2" />
            <circle cx="200" cy="60" r="3" fill="#1B6FE8" className="animate-pulse" />
            <circle cx="340" cy="100" r="5" fill="#4A90F0" opacity="0.2" />
            <circle cx="340" cy="100" r="2.5" fill="#4A90F0" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
          </g>

          {/* Ground line */}
          <line x1="0" y1="220" x2="400" y2="220" stroke="#1B6FE8" strokeWidth="0.5" opacity="0.15" />

          {/* Data flow particles */}
          <circle cx="180" cy="175" r="2" fill="#1B6FE8" opacity="0.6">
            <animate attributeName="cx" from="120" to="270" dur="3s" repeatCount="indefinite" />
            <animate attributeName="cy" from="170" to="180" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.6;0" dur="3s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
    </div>
  );
}

// ============= NEURAL NETWORK VISUAL =============
export function NeuralNetworkViz({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute -inset-4 bg-gradient-to-tr from-ops-blue/10 to-ops-blue-light/5 rounded-4xl blur-2xl" />
      <div className="relative rounded-2xl glass-card p-8 overflow-hidden">
        <svg viewBox="0 0 400 250" className="w-full h-auto">
          <defs>
            <radialGradient id="nodeGlow">
              <stop offset="0%" stopColor="#1B6FE8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#1B6FE8" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Layers: 4 input, 6 hidden, 5 hidden, 3 output */}
          {/* Connections layer 1->2 */}
          {[80, 120, 160, 200].map((y1, i) =>
            [60, 100, 140, 180, 220, 260].map((y2, j) => (
              <line key={`l1-${i}-${j}`} x1="60" y1={y1} x2="180" y2={y2} stroke="#1B6FE8" strokeWidth="0.4" opacity={Math.random() * 0.3 + 0.05} />
            ))
          )}
          {/* Connections layer 2->3 */}
          {[60, 100, 140, 180, 220, 260].map((y1, i) =>
            [80, 120, 160, 200, 240].map((y2, j) => (
              <line key={`l2-${i}-${j}`} x1="180" y1={y1} x2="300" y2={y2} stroke="#4A90F0" strokeWidth="0.4" opacity={Math.random() * 0.25 + 0.05} />
            ))
          )}
          {/* Connections layer 3->4 */}
          {[80, 120, 160, 200, 240].map((y1, i) =>
            [100, 150, 200].map((y2, j) => (
              <line key={`l3-${i}-${j}`} x1="300" y1={y1} x2="360" y2={y2} stroke="#1B6FE8" strokeWidth="0.4" opacity={Math.random() * 0.3 + 0.05} />
            ))
          )}

          {/* Nodes */}
          {/* Input layer */}
          {[80, 120, 160, 200].map((y, i) => (
            <g key={`n1-${i}`}>
              <circle cx="60" cy={y} r="12" fill="url(#nodeGlow)" />
              <circle cx="60" cy={y} r="5" fill="#1B6FE8" className="animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
            </g>
          ))}
          {/* Hidden layer 1 */}
          {[60, 100, 140, 180, 220, 260].map((y, i) => (
            <g key={`n2-${i}`}>
              <circle cx="180" cy={y} r="10" fill="url(#nodeGlow)" />
              <circle cx="180" cy={y} r="4" fill="#4A90F0" className="animate-pulse" style={{ animationDelay: `${i * 0.15}s` }} />
            </g>
          ))}
          {/* Hidden layer 2 */}
          {[80, 120, 160, 200, 240].map((y, i) => (
            <g key={`n3-${i}`}>
              <circle cx="300" cy={y} r="10" fill="url(#nodeGlow)" />
              <circle cx="300" cy={y} r="4" fill="#1B6FE8" className="animate-pulse" style={{ animationDelay: `${i * 0.18}s` }} />
            </g>
          ))}
          {/* Output layer */}
          {[100, 150, 200].map((y, i) => (
            <g key={`n4-${i}`}>
              <circle cx="360" cy={y} r="12" fill="url(#nodeGlow)" />
              <circle cx="360" cy={y} r="5" fill="#4A90F0" className="animate-pulse" style={{ animationDelay: `${i * 0.25}s` }} />
            </g>
          ))}

          {/* Labels */}
          <text x="60" y="240" textAnchor="middle" fill="#9CA3AF" fontSize="8" fontFamily="Inter">Input</text>
          <text x="180" y="290" textAnchor="middle" fill="#9CA3AF" fontSize="8" fontFamily="Inter">Hidden</text>
          <text x="300" y="270" textAnchor="middle" fill="#9CA3AF" fontSize="8" fontFamily="Inter">Hidden</text>
          <text x="360" y="230" textAnchor="middle" fill="#9CA3AF" fontSize="8" fontFamily="Inter">Output</text>
        </svg>
      </div>
    </div>
  );
}

// ============= WORKFLOW DIAGRAM =============
export function WorkflowDiagram({ className = '' }: { className?: string }) {
  const steps = [
    { icon: 'M3 12h4l2-7 4 14 2-7h4', label: 'Data' },
    { icon: 'M12 2a10 10 0 100 20 10 10 0 000-20z M12 6v6l4 2', label: 'Process' },
    { icon: 'M3 3v18h18 M7 14l4-4 3 3 5-6', label: 'Analyze' },
    { icon: 'M5 12l5 5 9-9', label: 'Optimize' },
  ];

  return (
    <div className={`relative ${className}`}>
      <div className="absolute -inset-4 bg-gradient-to-tr from-ops-blue/10 to-ops-blue-light/5 rounded-4xl blur-2xl" />
      <div className="relative rounded-2xl glass-card p-8 overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col lg:flex-row items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-ops-blue/10 flex items-center justify-center border border-ops-blue/20">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 text-ops-blue" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={step.icon} />
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-ops-blue text-white text-2xs font-bold flex items-center justify-center">
                  {i + 1}
                </div>
              </div>
              <span className="text-sm font-semibold text-ops-black dark:text-white">{step.label}</span>
              {i < steps.length - 1 && (
                <svg className="w-6 h-6 text-ops-blue/40 hidden lg:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14 M12 5l7 7-7 7" />
                </svg>
              )}
            </div>
          ))}
        </div>
        {/* Animated flow line */}
        <div className="mt-6 h-px bg-gradient-to-r from-transparent via-ops-blue/30 to-transparent relative overflow-hidden">
          <div className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-ops-blue to-transparent shimmer-line" />
        </div>
      </div>
    </div>
  );
}

// ============= SERVICE ILLUSTRATION =============
export function ServiceIllustration({ type, className = '' }: { type: string; className?: string }) {
  const illustrations: Record<string, JSX.Element> = {
    maintenance: (
      <svg viewBox="0 0 200 150" className="w-full h-auto">
        {/* Gear */}
        <g transform="translate(100 75)">
          <circle r="35" fill="none" stroke="#1B6FE8" strokeWidth="1.5" opacity="0.3" />
          <circle r="25" fill="none" stroke="#1B6FE8" strokeWidth="1" opacity="0.2" />
          {[...Array(8)].map((_, i) => (
              <rect key={i} x="-3" y="-42" width="6" height="12" rx="1" fill="#1B6FE8" opacity="0.3"
                transform={`rotate(${i * 45})`} />
            ))}
          <circle r="8" fill="#1B6FE8" opacity="0.15" />
          <circle r="4" fill="#1B6FE8" className="animate-pulse" />
        </g>
        {/* Wrench overlay */}
        <g transform="translate(140 40) rotate(45)" opacity="0.4">
          <rect x="0" y="0" width="4" height="30" rx="2" fill="#4A90F0" />
          <path d="M-4 0 L0 -8 L4 0 L8 -4 L4 -12 L-4 -12 L-8 -4 Z" fill="#4A90F0" />
        </g>
      </svg>
    ),
    ai: (
      <svg viewBox="0 0 200 150" className="w-full h-auto">
        {/* Neural cluster */}
        <g>
          {/* Connections */}
          {[0, 1, 2, 3, 4].map((i) =>
            [0, 1, 2, 3, 4].map((j) => (
              <line key={`${i}-${j}`} x1={50 + i * 25} y1={40} x2={50 + j * 25} y2={110}
                stroke="#1B6FE8" strokeWidth="0.3" opacity={Math.random() * 0.2 + 0.05} />
            ))
          )}
          {/* Top nodes */}
          {[50, 75, 100, 125, 150].map((x, i) => (
            <circle key={`top-${i}`} cx={x} cy={40} r="4" fill="#1B6FE8" className="animate-pulse" style={{ animationDelay: `${i * 0.15}s` }} />
          ))}
          {/* Bottom nodes */}
          {[50, 75, 100, 125, 150].map((x, i) => (
            <circle key={`bot-${i}`} cx={x} cy={110} r="4" fill="#4A90F0" className="animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
          ))}
          {/* Middle node */}
          <circle cx="100" cy="75" r="6" fill="#1B6FE8" opacity="0.3" />
          <circle cx="100" cy="75" r="3" fill="#1B6FE8" className="animate-pulse" />
        </g>
      </svg>
    ),
    dashboards: (
      <svg viewBox="0 0 200 150" className="w-full h-auto">
        {/* Dashboard frame */}
        <rect x="20" y="20" width="160" height="110" rx="6" fill="none" stroke="#1B6FE8" strokeWidth="1" opacity="0.2" />
        {/* KPI cards */}
        <rect x="30" y="30" width="40" height="25" rx="3" fill="#1B6FE8" opacity="0.1" />
        <rect x="80" y="30" width="40" height="25" rx="3" fill="#1B6FE8" opacity="0.08" />
        <rect x="130" y="30" width="40" height="25" rx="3" fill="#1B6FE8" opacity="0.1" />
        {/* Chart bars */}
        <g transform="translate(30 70)">
          {[20, 35, 25, 40, 30, 45, 35].map((h, i) => (
            <rect key={i} x={i * 18} y={50 - h} width="12" height={h} rx="1" fill="#1B6FE8" opacity={0.15 + i * 0.03} />
          ))}
        </g>
        {/* Line chart */}
        <polyline points="30,115 60,100 90,108 120,90 150,95 180,80"
          fill="none" stroke="#4A90F0" strokeWidth="1.5" opacity="0.4" />
      </svg>
    ),
    automation: (
      <svg viewBox="0 0 200 150" className="w-full h-auto">
        {/* Robotic arm */}
        <g>
          {/* Base */}
          <rect x="30" y="110" width="30" height="20" rx="3" fill="#1B6FE8" opacity="0.15" />
          {/* Arm segments */}
          <line x1="45" y1="110" x2="80" y2="70" stroke="#1B6FE8" strokeWidth="4" strokeLinecap="round" opacity="0.3" />
          <line x1="80" y1="70" x2="130" y2="50" stroke="#4A90F0" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
          {/* Joints */}
          <circle cx="45" cy="110" r="5" fill="#1B6FE8" opacity="0.3" />
          <circle cx="80" cy="70" r="4" fill="#4A90F0" className="animate-pulse" />
          <circle cx="130" cy="50" r="3" fill="#1B6FE8" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
          {/* End effector */}
          <rect x="125" y="45" width="15" height="10" rx="2" fill="#1B6FE8" opacity="0.2" />
        </g>
        {/* Conveyor */}
        <line x1="140" y1="120" x2="190" y2="120" stroke="#1B6FE8" strokeWidth="1" opacity="0.2" strokeDasharray="4 2" />
        <rect x="150" y="112" width="10" height="8" rx="1" fill="#4A90F0" opacity="0.2" />
      </svg>
    ),
    quality: (
      <svg viewBox="0 0 200 150" className="w-full h-auto">
        {/* Inspection scope */}
        <circle cx="100" cy="75" r="40" fill="none" stroke="#1B6FE8" strokeWidth="1.5" opacity="0.2" />
        <circle cx="100" cy="75" r="25" fill="none" stroke="#1B6FE8" strokeWidth="1" opacity="0.15" />
        <circle cx="100" cy="75" r="10" fill="#1B6FE8" opacity="0.1" />
        <circle cx="100" cy="75" r="3" fill="#1B6FE8" className="animate-pulse" />
        {/* Crosshairs */}
        <line x1="100" y1="25" x2="100" y2="125" stroke="#1B6FE8" strokeWidth="0.5" opacity="0.15" />
        <line x1="50" y1="75" x2="150" y2="75" stroke="#1B6FE8" strokeWidth="0.5" opacity="0.15" />
        {/* Checkmark */}
        <path d="M90 75 L98 83 L115 65" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    inventory: (
      <svg viewBox="0 0 200 150" className="w-full h-auto">
        {/* Warehouse shelves */}
        <g>
          {/* Shelf frame */}
          <rect x="40" y="30" width="120" height="90" rx="2" fill="none" stroke="#1B6FE8" strokeWidth="1" opacity="0.15" />
          <line x1="40" y1="60" x2="160" y2="60" stroke="#1B6FE8" strokeWidth="0.5" opacity="0.1" />
          <line x1="40" y1="90" x2="160" y2="90" stroke="#1B6FE8" strokeWidth="0.5" opacity="0.1" />
          {/* Boxes */}
          {[0, 1, 2].map((row) =>
            [0, 1, 2, 3].map((col) => (
              <rect key={`${row}-${col}`} x={48 + col * 27} y={35 + row * 30} width="22" height="22" rx="2"
                fill="#1B6FE8" opacity={0.08 + Math.random() * 0.12} />
            ))
          )}
        </g>
        {/* Forklift indicator */}
        <circle cx="170" cy="120" r="4" fill="#4A90F0" className="animate-pulse" opacity="0.4" />
      </svg>
    ),
    analytics: (
      <svg viewBox="0 0 200 150" className="w-full h-auto">
        {/* Pie chart */}
        <g transform="translate(60 75)">
          <circle r="35" fill="none" stroke="#1B6FE8" strokeWidth="1" opacity="0.1" />
          <path d="M0 -35 A35 35 0 0 1 30 -17 L0 0 Z" fill="#1B6FE8" opacity="0.2" />
          <path d="M30 -17 A35 35 0 0 1 17 30 L0 0 Z" fill="#4A90F0" opacity="0.15" />
          <path d="M17 30 A35 35 0 0 1 -30 17 L0 0 Z" fill="#1B6FE8" opacity="0.1" />
        </g>
        {/* Bar chart */}
        <g transform="translate(120 50)">
          {[30, 50, 35, 60, 45, 70].map((h, i) => (
            <rect key={i} x={i * 12} y={70 - h} width="8" height={h} rx="1" fill="#1B6FE8" opacity={0.1 + i * 0.03} />
          ))}
        </g>
        {/* Trend line */}
        <polyline points="120,100 135,85 150,90 165,70 180,75"
          fill="none" stroke="#4A90F0" strokeWidth="1.5" opacity="0.3" />
      </svg>
    ),
    default: (
      <svg viewBox="0 0 200 150" className="w-full h-auto">
        <circle cx="100" cy="75" r="30" fill="none" stroke="#1B6FE8" strokeWidth="1" opacity="0.2" />
        <circle cx="100" cy="75" r="15" fill="#1B6FE8" opacity="0.1" />
        <circle cx="100" cy="75" r="5" fill="#1B6FE8" className="animate-pulse" />
      </svg>
    ),
  };

  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-ops-blue/5 to-transparent rounded-2xl" />
      <div className="relative p-6">
        {illustrations[type] || illustrations.default}
      </div>
    </div>
  );
}

// ============= BLOG FEATURED IMAGE =============
export function BlogFeaturedImage({ category, className = '' }: { category: string; className?: string }) {
  const themes: Record<string, { icon: string; label: string }> = {
    'AI': { icon: 'M12 2a10 10 0 100 20 10 10 0 000-20z M12 6v6l4 2', label: 'AI & Machine Learning' },
    'Manufacturing': { icon: 'M3 21h18 M5 21V8l7-5 7 5v13 M9 21v-6h6v6', label: 'Manufacturing' },
    'Maintenance': { icon: 'M14.7 6.3a4 4 0 00-5.7 5.7L3 18v3h3l6-6a4 4 0 005.7-5.7z', label: 'Maintenance' },
    'Continuous Improvement': { icon: 'M21 12a9 9 0 11-6.2-8.5 M21 3v6h-6', label: 'Continuous Improvement' },
    'Operations': { icon: 'M3 3v18h18 M7 14l4-4 3 3 5-6', label: 'Operations' },
    'Digital Transformation': { icon: 'M21 12a9 9 0 11-9-9 M21 3v6h-6 M9 12l2 2 4-4', label: 'Digital Transformation' },
    'Automation': { icon: 'M12 2v4 M12 18v4 M4.9 4.9l2.8 2.8 M16.3 16.3l2.8 2.8 M2 12h4 M18 12h4 M4.9 19.1l2.8-2.8 M16.3 7.7l2.8-2.8', label: 'Automation' },
    'Quality': { icon: 'M9 12l2 2 4-4 M21 12a9 9 0 11-18 0 9 9 0 0118 0z', label: 'Quality' },
    'Business Systems': { icon: 'M3 3h18v18H3z M3 9h18 M9 21V9', label: 'Business Systems' },
    'Knowledge Management': { icon: 'M4 19.5A2.5 2.5 0 016.5 17H20 M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z', label: 'Knowledge Management' },
  };

  const theme = themes[category] || { icon: 'M12 2a10 10 0 100 20 10 10 0 000-20z', label: category };

  return (
    <div className={`relative aspect-video overflow-hidden bg-gradient-to-br from-ops-blue/8 via-ops-blue-light/5 to-transparent ${className}`}>
      <div className="absolute inset-0 hero-grid dark:hero-grid-dark opacity-30" />
      {/* Decorative orbs */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-ops-blue/10 rounded-full blur-2xl" />
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-ops-blue-light/8 rounded-full blur-xl" />

      <div className="relative h-full flex flex-col items-center justify-center p-8">
        <div className="w-16 h-16 rounded-2xl bg-ops-blue/10 flex items-center justify-center mb-4 border border-ops-blue/20">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-ops-blue" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d={theme.icon} />
          </svg>
        </div>
        <span className="px-4 py-1.5 rounded-full bg-ops-blue/10 text-ops-blue text-sm font-semibold border border-ops-blue/20">
          {theme.label}
        </span>
        {/* Decorative data lines */}
        <svg className="absolute bottom-0 left-0 w-full h-20 opacity-20" viewBox="0 0 400 80">
          <polyline points="0,60 50,40 100,50 150,30 200,45 250,20 300,35 350,15 400,25"
            fill="none" stroke="#1B6FE8" strokeWidth="1" />
          <polyline points="0,70 50,55 100,60 150,45 200,55 250,35 300,50 350,30 400,40"
            fill="none" stroke="#4A90F0" strokeWidth="0.5" />
        </svg>
      </div>
    </div>
  );
}

// ============= RESOURCE COVER IMAGE =============
export function ResourceCover({ type, title, className = '' }: { type: string; title: string; className?: string }) {
  return (
    <div className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-ops-blue/8 via-ops-blue-light/5 to-transparent ${className}`}>
      <div className="absolute inset-0 hero-grid dark:hero-grid-dark opacity-25" />
      <div className="absolute top-0 right-0 w-24 h-24 bg-ops-blue/10 rounded-full blur-2xl" />

      <div className="relative h-full flex flex-col justify-between p-5">
        <div className="flex items-start justify-between">
          <div className="w-10 h-10 rounded-xl bg-ops-blue/10 flex items-center justify-center border border-ops-blue/20">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-ops-blue" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z M14 2v6h6 M8 13h8 M8 17h5" />
            </svg>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-white/60 dark:bg-ops-gray-900/60 text-2xs font-semibold text-ops-blue border border-ops-blue/20">
            {type}
          </span>
        </div>
        <div>
          <div className="h-px bg-gradient-to-r from-ops-blue/30 to-transparent mb-3" />
          <p className="text-sm font-bold text-ops-black dark:text-white leading-snug line-clamp-2">{title}</p>
        </div>
      </div>
    </div>
  );
}

// ============= CONNECTED MACHINES VISUAL =============
export function ConnectedMachines({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute -inset-4 bg-gradient-to-tr from-ops-blue/10 to-ops-blue-light/5 rounded-4xl blur-2xl" />
      <div className="relative rounded-2xl glass-card p-8 overflow-hidden">
        <svg viewBox="0 0 400 250" className="w-full h-auto">
          <defs>
            <pattern id="cmGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.04" />
            </pattern>
          </defs>
          <rect width="400" height="250" fill="url(#cmGrid)" />

          {/* Central hub */}
          <g transform="translate(200 125)">
            <circle r="30" fill="#1B6FE8" opacity="0.08" />
            <circle r="20" fill="#1B6FE8" opacity="0.12" />
            <circle r="10" fill="#1B6FE8" className="animate-pulse" />
            <circle r="14" fill="none" stroke="#1B6FE8" strokeWidth="0.5" opacity="0.3" />
          </g>

          {/* Machine nodes */}
          {[
            { x: 80, y: 60, label: 'M1' },
            { x: 320, y: 60, label: 'M2' },
            { x: 80, y: 190, label: 'M3' },
            { x: 320, y: 190, label: 'M4' },
            { x: 200, y: 40, label: 'M5' },
            { x: 200, y: 210, label: 'M6' },
          ].map((node, i) => (
            <g key={i}>
              {/* Connection to hub */}
              <line x1={node.x} y1={node.y} x2="200" y2="125"
                stroke="#1B6FE8" strokeWidth="0.5" opacity="0.15" strokeDasharray="3 3" />
              {/* Node */}
              <rect x={node.x - 15} y={node.y - 12} width="30" height="24" rx="4"
                fill="#1B6FE8" opacity="0.1" stroke="#1B6FE8" strokeWidth="0.5" />
              <circle cx={node.x} cy={node.y} r="3" fill="#4A90F0" className="animate-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
              <text x={node.x} y={node.y + 1} textAnchor="middle" fill="#9CA3AF" fontSize="6" fontFamily="Inter">{node.label}</text>
            </g>
          ))}

          {/* Data flow particles */}
          {[0, 1, 2, 3].map((i) => (
            <circle key={i} r="2" fill="#1B6FE8" opacity="0.5">
              <animate attributeName="cx" values={`${[80, 320, 80, 320][i]};200`} dur={`${2 + i * 0.5}s`} repeatCount="indefinite" />
              <animate attributeName="cy" values={`${[60, 60, 190, 190][i]};125`} dur={`${2 + i * 0.5}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;0.5;0" dur={`${2 + i * 0.5}s`} repeatCount="indefinite" />
            </circle>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ============= PREDICTIVE MAINTENANCE VISUAL =============
export function PredictiveMaintenanceViz({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute -inset-4 bg-gradient-to-tr from-ops-blue/10 to-ops-blue-light/5 rounded-4xl blur-2xl" />
      <div className="relative rounded-2xl glass-card p-8 overflow-hidden">
        <svg viewBox="0 0 400 200" className="w-full h-auto">
          {/* Baseline (normal) */}
          <polyline points="0,140 40,135 80,138 120,130 160,132 200,128 240,125 280,130 320,122 360,125 400,120"
            fill="none" stroke="#10b981" strokeWidth="1.5" opacity="0.4" />

          {/* Prediction curve (degrading) */}
          <polyline points="0,140 40,135 80,138 120,130 160,132 200,128 240,115 280,95 320,70 360,50 400,30"
            fill="none" stroke="#f59e0b" strokeWidth="1.5" opacity="0.6" strokeDasharray="4 2" />

          {/* Threshold line */}
          <line x1="0" y1="60" x2="400" y2="60" stroke="#ef4444" strokeWidth="0.5" strokeDasharray="6 3" opacity="0.3" />
          <text x="380" y="56" textAnchor="end" fill="#ef4444" fontSize="7" fontFamily="Inter" opacity="0.5">Threshold</text>

          {/* Current point */}
          <circle cx="200" cy="128" r="4" fill="#10b981" className="animate-pulse" />
          <text x="200" y="115" textAnchor="middle" fill="#10b981" fontSize="7" fontFamily="Inter">Now</text>

          {/* Predicted failure point */}
          <circle cx="360" cy="50" r="5" fill="#ef4444" opacity="0.4" />
          <circle cx="360" cy="50" r="3" fill="#ef4444" className="animate-pulse" />
          <text x="360" y="40" textAnchor="middle" fill="#ef4444" fontSize="7" fontFamily="Inter">Predicted</text>

          {/* Axis */}
          <line x1="0" y1="170" x2="400" y2="170" stroke="#9CA3AF" strokeWidth="0.5" opacity="0.2" />
          <text x="200" y="190" textAnchor="middle" fill="#9CA3AF" fontSize="7" fontFamily="Inter" opacity="0.4">Time →</text>
        </svg>
      </div>
    </div>
  );
}
