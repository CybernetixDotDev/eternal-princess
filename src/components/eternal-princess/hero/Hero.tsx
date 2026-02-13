import HeroBackground from "./HeroBackground";
import HeroContent, { type HeroContentProps } from "./HeroContent";

export type HeroProps = HeroContentProps & {
  imageSrc: string; // e.g. "/eternal/hero.jpg"
  imageAlt?: string;
  priorityImage?: boolean;
  className?: string;
};

export default function Hero({
  imageSrc,
  imageAlt = "Eternal Princess — Celestial Sanctuary",
  priorityImage = true,
  className = "",
  ...contentProps
}: HeroProps) {
  return (
    <section
      className={[
        "relative isolate overflow-hidden",
        "min-h-[78vh] md:min-h-[86vh]",
        "rounded-3xl md:rounded-[2.5rem]",
        "border border-white/10 bg-black/20",
        className,
      ].join(" ")}
      aria-label="Eternal Princess hero"
    >
      <HeroBackground
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        priority={priorityImage}
      />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-end px-6 pb-10 pt-24 md:px-10 md:pb-16 md:pt-28">
        <HeroContent {...contentProps} />
      </div>
    </section>
  );
}
