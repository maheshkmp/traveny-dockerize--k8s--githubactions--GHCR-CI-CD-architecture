import Link from "next/link";
import { SparklesIcon } from "lucide-react";

type FooterLink = { label: string; href: string };

const links: { company: FooterLink[]; legal: FooterLink[] } = {
  company: [],
  legal: [],
};

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <span className="font-heading font-bold text-lg">
                SaaS Boilerplate
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              A solid foundation for your next big idea.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12">
            <div>
              <p className="mb-3 text-sm font-semibold">Company</p>
              <ul className="space-y-2">
                {links.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 text-sm font-semibold">Legal</p>
              <ul className="space-y-2">
                {links.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} SaaS Boilerplate. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
