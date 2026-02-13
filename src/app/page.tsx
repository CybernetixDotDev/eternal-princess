import { Hero } from "@/components/eternal-princess/hero";

export default function HomePage() {
  return (
    <main className="space-y-24 md:space-y-32">
      <Hero
        imageSrc="/eternal/princess3.png"
        title="Welcome, Beautiful Soul ✨"
        subtitle="A soft place to breathe, become, and belong."
        primaryCta={{ label: "Enter the Garden 🌸", href: "/garden" }}
        secondaryCta={{ label: "Read my journey ✨", href: "/journey" }}
      />

      {/* Placeholder sections (keep what we did before, if you want) */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          You don’t have to perform here.
        </h2>
        <p className="text-plum/70 text-lg leading-relaxed">
          Eternal Princess is a sanctuary for softness, courage, and truth.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        {[
          { title: "🌸 Sanctuary", text: "A space to rest without judgment." },
          { title: "✨ Becoming", text: "Permission to explore gently." },
          { title: "🌌 Expression", text: "Story, spirit, and beauty." },
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:bg-white/10"
          >
            <h3 className="text-xl font-medium mb-4">{item.title}</h3>
            <p className="text-white/70">{item.text}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
