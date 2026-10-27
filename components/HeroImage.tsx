import Image from "next/image";

export function HeroImage() {
  return (
    <Image
      src="/brand/twophworking.jpg"
      alt="Two people working together at a desk"
      fill
      className="object-cover"
      style={{ objectPosition: "center 8%" }}
      priority
    />
  );
}
