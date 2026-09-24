import { supporters } from '../data/content'

export default function LogoStrip() {
  const row = [...supporters, ...supporters]

  return (
    <section
      aria-label="Supporters"
      className="border-y-2 border-purple bg-white py-5 overflow-hidden"
    >
      <div className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
        {row.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="whitespace-nowrap text-[15px] font-semibold capitalize tracking-tight text-purple"
          >
            {name}
            <span className="ml-10 text-purple/40">·</span>
          </span>
        ))}
      </div>
    </section>
  )
}
