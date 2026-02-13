import Image from "next/image";

type Props = {
  imageSrc: string;
  imageAlt: string;
  priority?: boolean;
};

export default function HeroBackground({ imageSrc, imageAlt, priority }: Props) {
  return (
    <>
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Soft “safety” overlays (no harsh contrast) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-black/25 to-black/10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />

      {/* Gentle glow / bloom (cosmic + garden) */}
      <div className="pointer-events-none absolute -left-24 top-10 -z-10 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 -z-10 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      {/* Subtle grain to make it feel “cinematic” and reduce banding */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.18] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='220' height='220' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E\")",
        }}
      />
    </>
  );
}
