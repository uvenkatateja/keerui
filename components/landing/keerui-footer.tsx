import Image from "next/image";
import Link from "next/link";

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface KeerUIFooterProps {
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const KeerUIFooter = ({
  tagline = "Beautiful React components for modern web applications.",
  menuItems = [
    {
      title: "Product",
      links: [
        { text: "Components", url: "/components/data-table" },
        { text: "Documentation", url: "/docs/introduction" },
        { text: "Installation", url: "/docs/install-nextjs" },
        { text: "Tailwind Setup", url: "/docs/install-tailwindcss" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Introduction", url: "/docs/introduction" },
        { text: "Getting Started", url: "/docs/install-nextjs" },
        { text: "Components", url: "/components/data-table" },
      ],
    },
    {
      title: "Legal",
      links: [
        { text: "Privacy Policy", url: "/privacypolicy" },
        { text: "Terms of Service", url: "/termsofservice" },
      ],
    },
    {
      title: "Social",
      links: [
        { text: "GitHub", url: "https://github.com/uvenkatateja" },
        { text: "Twitter", url: "https://twitter.com/uvteja99" },
        { text: "LinkedIn", url: "https://www.linkedin.com/in/uvenkatateja" },
      ],
    },
  ],
  copyright = `© ${new Date().getFullYear()} KeerUI. All rights reserved. Made with ❤️ by venkatateja`,
  bottomLinks = [
    { text: "Terms and Conditions", url: "/termsofservice" },
    { text: "Privacy Policy", url: "/privacypolicy" },
  ],
}: KeerUIFooterProps) => {
  return (
    <section className="py-32 bg-black text-white">
      <div className="container mx-auto max-w-7xl px-8">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start">
                <Link href="/" className="flex items-center space-x-2">
                  <Image 
                    src="/logo.png" 
                    alt="KeerUI Logo" 
                    width={40} 
                    height={40} 
                    className="h-10 w-10"
                  />
                  <p className="text-xl font-semibold text-white">KeerUI</p>
                </Link>
              </div>
              <p className="mt-4 font-bold text-white/80">{tagline}</p>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold text-white">{section.title}</h3>
                <ul className="space-y-4 text-white/70">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-white transition-colors"
                    >
                      {link.url.startsWith('http') ? (
                        <a href={link.url} target="_blank" rel="noopener noreferrer">{link.text}</a>
                      ) : (
                        <Link href={link.url}>{link.text}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-24 flex flex-col justify-between gap-4 border-t border-white/20 pt-8 text-sm font-medium text-white/70 md:flex-row md:items-center">
            <p>{copyright}</p>
            <ul className="flex gap-4">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="underline hover:text-white transition-colors">
                  {link.url.startsWith('http') ? (
                    <a href={link.url} target="_blank" rel="noopener noreferrer">{link.text}</a>
                  ) : (
                    <Link href={link.url}>{link.text}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { KeerUIFooter };