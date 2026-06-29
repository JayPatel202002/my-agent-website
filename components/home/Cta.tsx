function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8H13M13 8L9 4M13 8L9 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Cta() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-[#0a0a0a] px-6 py-16 text-center sm:px-12 sm:py-20">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,255,0,0.08)_0%,transparent_70%)]"
            aria-hidden="true"
          />
          <div className="relative">
            <h2 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to ship faster?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-muted sm:text-lg">
              Join 12,400+ teams building on Testcore. Start free, scale when you&apos;re
              ready.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-8 py-3.5 text-sm font-semibold text-black transition-opacity hover:opacity-90"
              >
                Start Building
                <ArrowRightIcon />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-md border border-border px-8 py-3.5 text-sm font-medium text-white transition-colors hover:border-accent/40"
              >
                Talk to Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
