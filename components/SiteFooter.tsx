import Link from "next/link";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <Container className="py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-3 text-sm text-brand-navy/70">
              TrustedOps — Better Talent Economics.
            </p>
            <p className="mt-3 text-sm text-brand-navy/60">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm md:grid-cols-3">
            <div className="space-y-3">
              <div className="font-semibold">Company</div>
              <ul className="space-y-2 text-brand-navy/70">
                <li><Link href="/how-it-works" className="hover:text-brand-navy">what we do</Link></li>
                <li><Link href="/services" className="hover:text-brand-navy">services & teams</Link></li>
                <li><Link href="/security" className="hover:text-brand-navy">Security & ops</Link></li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="font-semibold">Resources</div>
              <ul className="space-y-2 text-brand-navy/70">
                <li><Link href="/resources" className="hover:text-brand-navy">Articles</Link></li>
                <li><Link href="/contact" className="hover:text-brand-navy">Contact Us</Link></li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="font-semibold">Legal</div>
              <ul className="space-y-2 text-brand-navy/70">
                <li><span className="opacity-70">Privacy (TBD)</span></li>
                <li><span className="opacity-70">Terms (TBD)</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-black/5 pt-6 text-xs text-brand-navy/60 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} TrustedOps. All rights reserved.</div>
          <div>Built with Next.js + Tailwind.</div>
        </div>
      </Container>
    </footer>
  );
}
