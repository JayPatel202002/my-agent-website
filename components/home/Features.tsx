const features = [
  {
    title: "Global Deploy",
    description:
      "Push to 42 regions in seconds with zero-config infrastructure that scales with your traffic.",
  },
  {
    title: "Real-time Analytics",
    description:
      "Monitor every request, trace latency bottlenecks, and visualize performance in live dashboards.",
  },
  {
    title: "Auto Scaling",
    description:
      "Handle traffic spikes automatically with intelligent load balancing and resource allocation.",
  },
  {
    title: "Edge Network",
    description:
      "Serve content from the nearest edge node for sub-80ms response times worldwide.",
  },
  {
    title: "API Gateway",
    description:
      "Unified entry point with rate limiting, authentication, and request routing built in.",
  },
  {
    title: "Monitoring",
    description:
      "Proactive alerts, uptime tracking, and incident response tools to keep you online 24/7.",
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mb-12 max-w-2xl sm:mb-16">
        <p className="mb-4 text-xs font-medium uppercase tracking-widest text-accent">
          Powerful tools
        </p>
        <h2 className="text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          Every tool your team needs
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          From deployment to monitoring, Testcore gives you a complete infrastructure
          stack without the complexity.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="group rounded-xl border border-border bg-[#0a0a0a] p-6 transition-colors hover:border-accent/30 sm:p-8"
          >
            <div className="mb-4 h-10 w-10 rounded-lg border border-border bg-black transition-colors group-hover:border-accent/40">
              <div className="flex h-full items-center justify-center">
                <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              </div>
            </div>
            <h3 className="mb-2 text-lg font-bold text-white">{feature.title}</h3>
            <p className="text-sm leading-relaxed text-muted">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
