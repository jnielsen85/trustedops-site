import Link from "next/link";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/", label: "Home"},
  { href: "/how-it-works", label: "How it works" },
  { href: "/services", label: "Services & Roles" },
  { href: "/security", label: "Security & ops" },
  { href: "/resources", label: "Resources" },
];

export function SiteHeader({ className }: { className?: string }) {
  return (
    <header className={cn("sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur", className)}>
      <Container className="flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-brand-navy/80 hover:text-brand-navy"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-brand-teal px-4 py-2 text-sm font-semibold text-white shadow-soft hover:opacity-95"
          >
            Book a call
          </Link>
        </nav>

        <Link
          href="/contact"
          className="md:hidden rounded-full bg-brand-teal px-4 py-2 text-sm font-semibold text-white shadow-soft hover:opacity-95"
        >
          Book a call
        </Link>
      </Container>
    </header>
  );
}
