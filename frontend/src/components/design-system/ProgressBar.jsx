import { motion } from 'framer-motion';

export default function ProgressBar({
  value = 0,
  max = 100,
  showLabel = true,
  height = 'md',
  className = '',
  label,
}) {
  const percent = Math.min(100, Math.max(0, (value / max) * 100));
  const heightClass = height === 'sm' ? 'h-1.5' : height === 'lg' ? 'h-3' : 'h-2';

  return (
    <div className={`w-full ${className}`}>
      {(label || showLabel) && (
        <div className="flex justify-between items-center mb-1.5">
          {label && <span className="text-sm text-slate-400">{label}</span>}
          {showLabel && (
            <span className="text-sm font-medium text-slate-300 tabular-nums">{Math.round(percent)}%</span>
          )}
        </div>
      )}
      <div
        className={`w-full rounded-full bg-white/5 overflow-hidden border border-white/5 ${heightClass}`}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      >
        <motion.div
          className="h-full rounded-full"
          style={{
            background: 'linear-gradient(90deg, #00ffcc 0%, rgba(0, 255, 204, 0.7) 100%)',
            boxShadow: '0 0 12px rgba(0, 255, 204, 0.4)',
          }}
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{
            type: 'spring',
            stiffness: 50,
            damping: 20,
            duration: 0.6,
          }}
        />
      </div>
    </div>
  );
}
