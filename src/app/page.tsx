import { Hero } from "@/components/eternal-princess/hero";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-6 md:px-6">
      <Hero
        imageSrc="/eternal/princess3.jpg"
        title="Welcome, Beautiful Soul ✨"
        subtitle="A soft place to breathe, become, and belong."
        primaryCta={{ label: "Enter the Garden 🌸", href: "/garden" }}
        secondaryCta={{ label: "Read my journey ✨", href: "/journey" }}
      />
    </main>
  );
}
