import { motion } from 'framer-motion';

export default function Settings() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-2xl font-semibold text-white">Settings</h1>
        <p className="text-slate-400 mt-1">Configure your TELIPORT AI platform</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-6 max-w-2xl"
      >
        <div className="glass-card p-6 rounded-xl border-dark-border/50">
          <h3 className="font-semibold text-white mb-4">Profile</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-slate-400 mb-1">Display name</label>
              <input
                type="text"
                defaultValue="Clinician"
                className="w-full px-4 py-2 rounded-lg bg-dark-bg/80 border border-dark-border text-slate-200 focus:outline-none focus:border-neon-green/50"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1">Email</label>
              <input
                type="email"
                defaultValue="user@teliport.ai"
                className="w-full px-4 py-2 rounded-lg bg-dark-bg/80 border border-dark-border text-slate-200 focus:outline-none focus:border-neon-green/50"
              />
            </div>
          </div>
        </div>

        <div className="glass-card p-6 rounded-xl border-dark-border/50">
          <h3 className="font-semibold text-white mb-4">Notifications</h3>
          <div className="flex items-center justify-between py-2">
            <span className="text-slate-300">Email notifications</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-dark-border rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-neon-green/50" />
            </label>
          </div>
          <div className="flex items-center justify-between py-2 border-t border-dark-border/30">
            <span className="text-slate-300">Session reminders</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-dark-border rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-neon-green/50" />
            </label>
          </div>
        </div>

        <div className="glass-card p-6 rounded-xl border-dark-border/50">
          <h3 className="font-semibold text-white mb-4">API & Integrations</h3>
          <p className="text-slate-400 text-sm mb-4">Connect external tools and access API keys.</p>
          <button className="px-4 py-2 rounded-lg border border-dark-border text-slate-300 hover:border-neon-blue/50 hover:text-neon-blue transition-colors text-sm font-medium">
            Manage API keys
          </button>
        </div>
      </motion.div>
    </div>
  );
}
