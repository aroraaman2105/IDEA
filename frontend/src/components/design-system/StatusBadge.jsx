import { motion } from 'framer-motion';

const variants = {
  high: {
    background: 'rgba(239, 68, 68, 0.15)',
    border: '1px solid rgba(239, 68, 68, 0.4)',
    color: '#f87171',
    glow: '0 0 12px rgba(239, 68, 68, 0.2)',
  },
  low: {
    background: 'rgba(0, 255, 204, 0.12)',
    border: '1px solid rgba(0, 255, 204, 0.35)',
    color: '#00ffcc',
    glow: '0 0 12px rgba(0, 255, 204, 0.15)',
  },
  medium: {
    background: 'rgba(251, 191, 36, 0.12)',
    border: '1px solid rgba(251, 191, 36, 0.35)',
    color: '#fbbf24',
    glow: '0 0 12px rgba(251, 191, 36, 0.15)',
  },
};

const labels = {
  high: 'High risk',
  low: 'Low risk',
  medium: 'Medium risk',
};

export default function StatusBadge({ status = 'low', label, className = '' }) {
  const style = variants[status] || variants.low;
  const text = label ?? labels[status];

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      whileHover={{
        scale: 1.05,
        boxShadow: style.glow,
        transition: { duration: 0.15 },
      }}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium ${className}`}
      style={{
        background: style.background,
        border: style.border,
        color: style.color,
        boxShadow: style.glow,
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full animate-pulse"
        style={{ backgroundColor: style.color }}
      />
      {text}
    </motion.span>
  );
}
