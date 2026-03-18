import { motion } from 'framer-motion';

export default function Sessions() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-2xl font-semibold text-white">Sessions</h1>
        <p className="text-slate-400 mt-1">View and manage therapy and screening sessions</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-card p-6 rounded-xl border-dark-border/50"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <input
            type="search"
            placeholder="Search sessions..."
            className="px-4 py-2 rounded-lg bg-dark-bg/80 border border-dark-border text-slate-200 placeholder-slate-500 focus:outline-none focus:border-neon-green/50 w-full sm:max-w-xs"
          />
          <button className="px-4 py-2 rounded-lg bg-neon-green/20 text-neon-green border border-neon-green/30 hover:bg-neon-green/30 transition-colors font-medium text-sm whitespace-nowrap">
            New session
          </button>
        </div>
        <ul className="space-y-3">
          {[
            { id: 1, patient: 'Child A', type: 'Screening', date: 'Mar 17, 2025', duration: '25 min', status: 'Completed' },
            { id: 2, patient: 'Child B', type: 'Therapy', date: 'Mar 16, 2025', duration: '45 min', status: 'Completed' },
            { id: 3, patient: 'Child C', type: 'Screening', date: 'Mar 15, 2025', duration: '—', status: 'Scheduled' },
          ].map((session, i) => (
            <motion.li
              key={session.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="flex flex-wrap items-center gap-4 py-4 px-4 rounded-lg bg-dark-bg/50 border border-dark-border/30 hover:border-neon-green/20 transition-colors"
            >
              <span className="font-medium text-white w-24">{session.patient}</span>
              <span className="text-slate-400 text-sm">{session.type}</span>
              <span className="text-slate-400 text-sm">{session.date}</span>
              <span className="text-slate-400 text-sm">{session.duration}</span>
              <span className={`ml-auto text-sm ${session.status === 'Completed' ? 'text-neon-green' : 'text-neon-blue'}`}>
                {session.status}
              </span>
              <button className="text-slate-400 hover:text-white text-sm">View</button>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
