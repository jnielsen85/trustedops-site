"use client";

import Image from "next/image";
import { useFlags } from "launchdarkly-react-client-sdk";

export function HeroImage() {
  const { heroImage } = useFlags();

  return heroImage ? (
    <Image
      src="/brand/pang.jpeg"
      alt="Two people working together at a desk"
      fill
      className="object-contain"
      style={{ objectPosition: "right center" }}
      priority
    />
  ) : (
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
