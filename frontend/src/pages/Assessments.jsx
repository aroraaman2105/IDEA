import { motion } from 'framer-motion';

export default function Assessments() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-2xl font-semibold text-white">Assessments</h1>
        <p className="text-slate-400 mt-1">Manage and run autism screening assessments</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="glass-card p-6 rounded-xl border-dark-border/50 hover:border-neon-green/20 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-neon-green/10 border border-neon-green/20 flex items-center justify-center">
              <span className="text-neon-green text-xl font-bold">M</span>
            </div>
            <div>
              <h3 className="font-semibold text-white">M-CHAT-R</h3>
              <p className="text-sm text-slate-400">Modified Checklist for Autism in Toddlers</p>
            </div>
          </div>
          <p className="text-slate-400 text-sm mb-4">Quick screening for toddlers 16–30 months.</p>
          <button className="w-full py-2.5 rounded-lg bg-neon-green/20 text-neon-green border border-neon-green/30 hover:bg-neon-green/30 transition-colors font-medium text-sm">
            Start assessment
          </button>
        </div>

        <div className="glass-card p-6 rounded-xl border-dark-border/50 hover:border-neon-blue/20 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center">
              <span className="text-neon-blue text-xl font-bold">C</span>
            </div>
            <div>
              <h3 className="font-semibold text-white">CARS-2</h3>
              <p className="text-sm text-slate-400">Childhood Autism Rating Scale</p>
            </div>
          </div>
          <p className="text-slate-400 text-sm mb-4">Structured observation for diagnosis support.</p>
          <button className="w-full py-2.5 rounded-lg bg-neon-blue/20 text-neon-blue border border-neon-blue/30 hover:bg-neon-blue/30 transition-colors font-medium text-sm">
            Start assessment
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="glass-card p-6 rounded-xl border-dark-border/50"
      >
        <h3 className="text-lg font-semibold text-white mb-4">Recent assessments</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-slate-400 border-b border-dark-border/50">
                <th className="pb-3 font-medium">Patient</th>
                <th className="pb-3 font-medium">Type</th>
                <th className="pb-3 font-medium">Date</th>
                <th className="pb-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              <tr className="border-b border-dark-border/30">
                <td className="py-3">Child A</td>
                <td className="py-3">M-CHAT-R</td>
                <td className="py-3">Mar 15, 2025</td>
                <td className="py-3"><span className="text-neon-green">Completed</span></td>
              </tr>
              <tr className="border-b border-dark-border/30">
                <td className="py-3">Child B</td>
                <td className="py-3">CARS-2</td>
                <td className="py-3">Mar 14, 2025</td>
                <td className="py-3"><span className="text-neon-blue">In progress</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
