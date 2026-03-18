import { motion } from 'framer-motion';

const glassStyle = {
  background: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.06)',
  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.04)',
};

export default function Card({ children, className = '', padding = true, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      whileHover={{
        borderColor: 'rgba(0, 255, 204, 0.2)',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 255, 204, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.04)',
        transition: { duration: 0.2 },
      }}
      className={`rounded-xl backdrop-blur-md overflow-hidden ${padding ? 'p-5' : ''} ${className}`}
      style={glassStyle}
      {...props}
    >
      {children}
    </motion.div>
  );
}
