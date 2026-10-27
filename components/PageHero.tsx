import Image from "next/image";
import { cn } from "@/lib/utils";
import { Container } from "@/components/Container";

type HeroImage = {
  src: string;
  alt: string;
  /** CSS object-position, to keep faces in frame as the crop changes */
  position?: string;
};

const fadeMask = "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 22%, #000 45%)";

export function PageHero({
  kicker,
  title,
  children,
  image,
  tall = false,
}: {
  /** Shown above the heading: a SectionEyebrow, or the home page's badge */
  kicker?: React.ReactNode;
  title: React.ReactNode;
  /** Intro copy and buttons, below the heading */
  children?: React.ReactNode;
  image?: HeroImage;
  /** The home page hero is taller than inner pages' */
  tall?: boolean;
}) {
  const photo = (sizes: string) =>
    image ? (
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        className="object-cover"
        style={{ objectPosition: image.position ?? "center" }}
        priority
      />
    ) : null;

  return (
    <section
      className={cn(
        "relative overflow-hidden",
        image && "lg:flex lg:items-center",
        image && (tall ? "lg:min-h-[620px]" : "lg:min-h-[480px]")
      )}
    >
      {/* Desktop: full-bleed photo running off the right edge of the screen. Its left
          edge tracks the content column (not the viewport), so on wide screens it
          widens to the right instead of drifting under the text. A mask fades its
          left side into the white behind the text. */}
      {image ? (
        <div
          className="absolute inset-y-0 right-0 hidden lg:block"
          style={{ left: "max(36%, calc(50% - 280px))", WebkitMaskImage: fadeMask, maskImage: fadeMask }}
        >
          {photo("64vw")}
        </div>
      ) : null}

      <Container className="relative py-14 lg:py-20">
        {/* Narrow beside a photo; wider for text-only heroes */}
        <div className={image ? "max-w-lg" : "max-w-3xl"}>
          {kicker}
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-brand-navy sm:text-5xl">{title}</h1>
          {children}
        </div>
      </Container>

      {/* Below lg: the photo sits under the text as a full-width strip, so it never
          competes with the copy */}
      {image ? <div className="relative h-64 sm:h-80 lg:hidden">{photo("100vw")}</div> : null}
    </section>
  );
}
