import { Link } from 'react-router-dom'

const base =
  'group inline-flex items-center justify-center gap-2 rounded-[12px] px-6 py-3 font-mono text-[14px] font-semibold uppercase tracking-[-0.05em] transition-all duration-300 select-none'

const variants = {
  primary:
    'bg-purple text-white border-2 border-purple hover:bg-purple-deep hover:border-purple-deep shadow-[0_8px_24px_rgba(76,29,207,0.25)] hover:shadow-[0_12px_32px_rgba(76,29,207,0.35)] hover:-translate-y-0.5',
  secondary:
    'bg-white text-purple border-2 border-purple hover:bg-purple hover:text-white hover:-translate-y-0.5',
  outline:
    'bg-transparent text-purple border-2 border-purple hover:bg-purple hover:text-white hover:-translate-y-0.5',
  white:
    'bg-white text-purple border-2 border-white hover:bg-pink hover:border-pink hover:-translate-y-0.5',
  ghostPink:
    'bg-pink text-purple border-2 border-purple hover:bg-purple hover:text-pink hover:-translate-y-0.5',
}

export default function Button({
  children,
  variant = 'primary',
  href,
  to,
  className = '',
  type = 'button',
  onClick,
  ...rest
}) {
  const cls = `${base} ${variants[variant] || variants.primary} ${className}`
  const inner = (
    <span className="btn-swap">
      <span className="btn-label">{children}</span>
      <span className="btn-label-2" aria-hidden="true">
        {children}
      </span>
    </span>
  )

  if (to) {
    return (
      <Link to={to} className={cls} onClick={onClick} {...rest}>
        {inner}
      </Link>
    )
  }

  if (href) {
    const external = href.startsWith('http')
    return (
      <a
        href={href}
        className={cls}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
        onClick={onClick}
        {...rest}
      >
        {inner}
      </a>
    )
  }

  return (
    <button type={type} className={cls} onClick={onClick} {...rest}>
      {inner}
    </button>
  )
}
