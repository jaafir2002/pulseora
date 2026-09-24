import { Reveal } from './Reveal'

export default function SectionHeader({
  title,
  subtitle,
  eyebrow,
  actions,
  align = 'between',
  light = false,
  id,
}) {
  const alignCls =
    align === 'center'
      ? 'flex-col items-center text-center gap-6'
      : 'flex-col md:flex-row md:items-end md:justify-between gap-6'

  return (
    <Reveal className={`flex ${alignCls} mb-10 md:mb-14`} id={id}>
      <div className={align === 'center' ? 'max-w-2xl' : 'max-w-xl'}>
        {eyebrow && (
          <p
            className={`mb-3 text-[13px] font-semibold uppercase tracking-[-0.05em] ${
              light ? 'text-pink/80' : 'text-purple/70'
            }`}
          >
            {eyebrow}
          </p>
        )}
        <h2
          className={`font-display text-[36px] md:text-[48px] leading-[1.1] ${
            light ? 'text-white' : 'text-purple'
          }`}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`mt-4 text-[15px] leading-[1.6] ${
              light ? 'text-white/75' : 'text-purple/70'
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
      {actions && <div className="flex flex-wrap gap-3">{actions}</div>}
    </Reveal>
  )
}
