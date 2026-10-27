import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <Container className="flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between">
        <Logo />
        <div className="text-xs text-brand-navy/60">© {new Date().getFullYear()} TrustedOps. All rights reserved.</div>
      </Container>
    </footer>
  );
}
