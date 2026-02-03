import Link from "next/link";

export function Logo({ variant = "lockup" }: { variant?: "mark" | "lockup" }) {
  // Placeholder logo. Replace with your final brand assets when ready:
  // - public/brand/favicon_32.png
  // - public/brand/trustedops_logo_horizontal_lockup_color@4x.png
  const src = variant === "mark" ? "/brand/favicon_32.png" : "/brand/trustedops_logo_horizontal_lockup_color@4x.png";

  return (
    <Link href="/" className="inline-flex items-center gap-3">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="TrustedOps" className="h-8 w-auto" />
    </Link>
  );
}
