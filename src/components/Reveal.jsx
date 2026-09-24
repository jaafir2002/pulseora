import { motion } from 'framer-motion'

export function Reveal({
  children,
  delay = 0,
  y = 40,
  duration = 0.7,
  className = '',
  once = true,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function RevealScale({ children, delay = 0, className = '', scale = 0.94 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0.001, scale }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export { itemVariants, Stagger } from './motionVariants'
