import { motion } from 'framer-motion';

const variants = {
  primary: {
    background: 'rgba(0, 255, 204, 0.15)',
    border: '1px solid rgba(0, 255, 204, 0.35)',
    color: '#00ffcc',
    boxShadow: '0 0 16px rgba(0, 255, 204, 0.15)',
  },
  primaryHover: {
    background: 'rgba(0, 255, 204, 0.25)',
    border: '1px solid rgba(0, 255, 204, 0.5)',
    boxShadow: '0 0 24px rgba(0, 255, 204, 0.25), 0 0 48px rgba(0, 255, 204, 0.1)',
    scale: 1.02,
    transition: { duration: 0.2 },
  },
  primaryTap: { scale: 0.98 },
  secondary: {
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    color: '#e2e8f0',
    boxShadow: 'none',
  },
  secondaryHover: {
    background: 'rgba(255, 255, 255, 0.08)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    scale: 1.02,
    transition: { duration: 0.2 },
  },
  secondaryTap: { scale: 0.98 },
  ghost: {
    background: 'transparent',
    border: '1px solid transparent',
    color: '#00ffcc',
  },
  ghostHover: {
    background: 'rgba(0, 255, 204, 0.08)',
    scale: 1.02,
    transition: { duration: 0.2 },
  },
  ghostTap: { scale: 0.98 },
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button',
  ...props
}) {
  const isPrimary = variant === 'primary';
  const isSecondary = variant === 'secondary';
  const isGhost = variant === 'ghost';

  const baseStyle = isPrimary ? variants.primary : isSecondary ? variants.secondary : variants.ghost;
  const hoverStyle = isPrimary ? variants.primaryHover : isSecondary ? variants.secondaryHover : variants.ghostHover;
  const tapStyle = isPrimary ? variants.primaryTap : isSecondary ? variants.secondaryTap : variants.ghostTap;

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  return (
    <motion.button
      type={type}
      disabled={disabled}
      initial={false}
      whileHover={disabled ? {} : hoverStyle}
      whileTap={disabled ? {} : tapStyle}
      className={`
        font-medium rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-[#00ffcc] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0f14]
        disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
        ${sizeClasses[size]} ${className}
      `}
      style={baseStyle}
      {...props}
    >
      {children}
    </motion.button>
  );
}
