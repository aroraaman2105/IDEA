import { motion } from 'framer-motion';

const stats = [
  { label: 'Total Sessions', value: '1,247', change: '+12%', color: 'neon-green', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
  { label: 'Active Users', value: '89', change: '+8%', color: 'neon-blue', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
  { label: 'Assessments Done', value: '342', change: '+24%', color: 'neon-green', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
  { label: 'Avg. Engagement', value: '87%', change: '+5%', color: 'neon-blue', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
        <p className="text-slate-400 mt-1">Overview of your TELIPORT AI platform metrics</p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            variants={item}
            className="glass-card p-5 rounded-xl border-dark-border/50 hover:border-neon-green/20 transition-colors group"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-slate-400 text-sm font-medium">{stat.label}</p>
                <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                <p className="text-sm mt-2 font-medium" style={{ color: stat.color === 'neon-green' ? '#00ff88' : '#00d4ff' }}>
                  {stat.change} from last month
                </p>
              </div>
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center border border-dark-border/50 group-hover:border-neon-green/30 transition-colors"
                style={{ backgroundColor: stat.color === 'neon-green' ? 'rgba(0,255,136,0.1)' : 'rgba(0,212,255,0.1)' }}
              >
                <svg className="w-5 h-5" style={{ color: stat.color === 'neon-green' ? '#00ff88' : '#00d4ff' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <div className="glass-card p-6 rounded-xl border-dark-border/50">
          <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
          <ul className="space-y-3">
            {['Session completed - Child A', 'Assessment submitted - Child B', 'New user onboarded', 'Report generated'].map((text, i) => (
              <li key={i} className="flex items-center gap-3 py-2 border-b border-dark-border/30 last:border-0">
                <span className="w-2 h-2 rounded-full bg-neon-green" />
                <span className="text-slate-300">{text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="glass-card p-6 rounded-xl border-dark-border/50">
          <h3 className="text-lg font-semibold text-white mb-4">AI Insights</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Your engagement metrics are above average. Consider scheduling follow-up assessments for users who haven’t completed a session in 7+ days.
          </p>
          <div className="mt-4 flex gap-2">
            <button className="px-4 py-2 rounded-lg bg-neon-green/20 text-neon-green border border-neon-green/30 hover:bg-neon-green/30 transition-colors text-sm font-medium">
              View suggestions
            </button>
            <button className="px-4 py-2 rounded-lg border border-dark-border text-slate-400 hover:text-white hover:border-slate-500 transition-colors text-sm">
              Dismiss
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
