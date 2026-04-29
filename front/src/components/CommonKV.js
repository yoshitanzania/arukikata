'use client'
export default function CommonKV({
  title,
  subtitle,
  label = "Karibuu TZ",
}) {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200 bg-white">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:px-10 sm:py-32">
        
        {/* huge background text */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 select-none text-[120px] font-extrabold tracking-tight text-zinc-100 sm:text-[180px]"
        >
          {title}
        </div>

        <div className="relative max-w-2xl">
          <p className="text-xs font-medium tracking-[0.3em] text-zinc-500 uppercase">
            {label}
          </p>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-6 text-base leading-relaxed text-zinc-600">
              {subtitle}
            </p>
          )}

          {/* accent line */}
          <div className="mt-10 flex items-center gap-4">
            <div className="h-px w-12 bg-zinc-900" />
            <div className="h-px flex-1 bg-zinc-200" />
          </div>
        </div>
      </div>

      {/* subtle gradient bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-zinc-50" />
    </section>
  );
}