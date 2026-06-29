const stats = [
  { value: "42M+", label: "API calls/day" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "< 80ms", label: "Median latency" },
  { value: "12,400+", label: "Active users" },
];

export default function Stats() {
  return (
    <section className="border-y border-border">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-border sm:grid-cols-4 sm:divide-y-0">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center px-4 py-10 text-center sm:py-12"
          >
            <span className="font-mono text-2xl font-bold text-accent sm:text-3xl lg:text-4xl">
              {stat.value}
            </span>
            <span className="mt-2 text-xs text-muted sm:text-sm">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
