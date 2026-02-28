import Link from "next/link";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "What we do" },
  { href: "/resources", label: "Resources" },
];

const roleCategories = [
  { href: "/services/accounting-finance", label: "Accounting & Finance" },
  { href: "/services/construction-services", label: "Construction Services" },
  { href: "/services/creative-marketing", label: "Creative & Marketing" },
  { href: "/services/admin-back-office", label: "Admin & Back Office" },
  { href: "/services/real-estate", label: "Real Estate Support" },
  { href: "/services/it-tech", label: "IT & Tech" },
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

          {/* Roles dropdown */}
          <div className="group relative">
            <button
              type="button"
              className="flex cursor-default items-center gap-1 text-sm font-medium text-brand-navy/80 hover:text-brand-navy"
            >
              Roles
              <svg
                className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {/* pt-3 bridges the gap between button and panel to maintain hover */}
            <div className="pointer-events-none absolute -left-4 top-full z-50 pt-3 opacity-0 transition-opacity duration-150 group-hover:pointer-events-auto group-hover:opacity-100">
              <div className="min-w-[220px] rounded-xl border border-black/10 bg-white py-1.5 shadow-xl">
                {roleCategories.map((cat) => (
                  <Link
                    key={cat.href}
                    href={cat.href}
                    className="block px-4 py-2 text-sm text-brand-navy/70 hover:bg-brand-teal/5 hover:text-brand-navy"
                  >
                    {cat.label}
                  </Link>
                ))}
                <div className="mx-3 my-1 border-t border-black/10" />
                <Link
                  href="/services"
                  className="block px-4 py-2 text-sm font-medium text-brand-navy/60 hover:bg-brand-teal/5 hover:text-brand-navy"
                >
                  All Roles →
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="rounded-full bg-brand-teal px-4 py-2 text-sm font-semibold text-white shadow-soft hover:opacity-95"
          >
            Contact Us
          </Link>
        </nav>

        <Link
          href="/contact"
          className="md:hidden rounded-full bg-brand-teal px-4 py-2 text-sm font-semibold text-white shadow-soft hover:opacity-95"
        >
          Contact Us
        </Link>
      </Container>
    </header>
  );
}
