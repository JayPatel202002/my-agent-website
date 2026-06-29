import Image from "next/image";

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

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-6 sm:gap-8">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/40 px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            <span className="text-xs font-medium uppercase tracking-wider text-accent">
              New: Beta is available
            </span>
          </div>

          <h1 className="text-4xl font-black uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="block text-white">Build fast.</span>
            <span className="block text-accent">Ship faster.</span>
          </h1>

          <p className="max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            Testcore is the infrastructure platform for teams who refuse to choose
            between speed and reliability. Deploy globally, scale automatically, and
            measure everything.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
            >
              Start Building
              <ArrowRightIcon />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-accent"
            >
              View Documentation
              <ArrowRightIcon />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="overflow-hidden rounded-xl border border-border/60 shadow-[0_0_60px_rgba(212,255,0,0.08)]">
            <Image
              src="/hero-dashboard.png"
              alt="Testcore dashboard showing analytics charts and deployment terminal"
              width={800}
              height={600}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
