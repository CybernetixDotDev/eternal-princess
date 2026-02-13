import Link from "next/link";

export type HeroCTA = {
  label: string;
  href: string;
};

export type HeroContentProps = {
  eyebrow?: string; // small line above heading
  title: string;
  subtitle?: string;
  primaryCta?: HeroCTA;
  secondaryCta?: HeroCTA;
};

export default function HeroContent({
  eyebrow = "A sanctuary for becoming",
  title,
  subtitle = "Come as you are. Stay as long as you need.",
  primaryCta = { label: "Enter the Garden 🌸", href: "/garden" },
  secondaryCta = { label: "Read my journey ✨", href: "/journey" },
}: HeroContentProps) {
  return (
    <div className="w-full max-w-2xl">
      <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur">
        <span className="h-2 w-2 rounded-full bg-white/80" />
        {eyebrow}
      </p>

      <h1 className="text-balance text-4xl font-semibold tracking-tight text-white md:text-6xl">
        {title}
      </h1>

      <p className="mt-5 text-pretty text-lg leading-relaxed text-white/85 md:text-xl">
        {subtitle}
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link
          href={primaryCta.href}
          className={[
            "inline-flex items-center justify-center",
            "rounded-full px-6 py-3",
            "bg-white text-black",
            "font-medium tracking-tight",
            "shadow-[0_10px_30px_rgba(255,255,255,0.15)]",
            "hover:bg-white/90 active:bg-white/80",
            "transition",
          ].join(" ")}
        >
          {primaryCta.label}
        </Link>

        <Link
          href={secondaryCta.href}
          className={[
            "inline-flex items-center justify-center",
            "rounded-full px-6 py-3",
            "border border-white/20 bg-white/5",
            "text-white/90 backdrop-blur",
            "hover:bg-white/10 active:bg-white/15",
            "transition",
          ].join(" ")}
        >
          {secondaryCta.label}
        </Link>
      </div>

      {/* Optional “trust cue” line */}
      <p className="mt-6 text-sm text-white/70">
        You don’t have to perform here. You’re safe.
      </p>
    </div>
  );
}
