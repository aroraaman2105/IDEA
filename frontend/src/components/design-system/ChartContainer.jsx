import { motion } from 'framer-motion';

const glassStyle = {
  background: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.06)',
  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.04)',
};

export default function ChartContainer({
  title,
  subtitle,
  children,
  className = '',
  action,
  ...props
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      whileHover={{
        borderColor: 'rgba(0, 255, 204, 0.15)',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 255, 204, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.04)',
        transition: { duration: 0.2 },
      }}
      className={`rounded-xl backdrop-blur-md overflow-hidden ${className}`}
      style={glassStyle}
      {...props}
    >
      <div className="p-5 border-b border-white/5">
        <div className="flex items-start justify-between gap-4">
          <div>
            {title && <h3 className="text-lg font-semibold text-white">{title}</h3>}
            {subtitle && <p className="text-sm text-slate-400 mt-0.5">{subtitle}</p>}
          </div>
          {action && <div className="flex-shrink-0">{action}</div>}
        </div>
      </div>
      <div className="p-5 min-h-[200px] flex items-center justify-center">
        {children}
      </div>
    </motion.div>
  );
}
