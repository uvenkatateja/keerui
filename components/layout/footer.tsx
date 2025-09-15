"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Twitter,
} from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  const navigation = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Components',
      href: '/components/data-table',
    },
    {
      title: 'Docs',
      href: '/docs/introduction',
    },
  ];

  const company = [
    {
      title: 'Terms of Service',
      href: '/termsofservice',
    },
    {
      title: 'Privacy Policy',
      href: '/privacypolicy',
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="size-4" />,
      link: 'https://github.com/uvenkatateja',
    },
    {
      icon: <Linkedin className="size-4" />,
      link: 'https://www.linkedin.com/in/uvenkatateja',
    },
    {
      icon: <Twitter className="size-4" />,
      link: 'https://twitter.com/uvteja99',
    },
  ];

  return (
    <footer className="relative">
      <div className="mx-auto max-w-[95.8rem] border-x">
        <div className="bg-border absolute inset-x-0 h-px w-full" />
        <div className="grid grid-cols-6 gap-6 p-4 px-6">
          <div className="col-span-6 flex flex-col gap-5 md:col-span-4">
            <Link href="/" className="w-max flex items-center space-x-2">
              <Image 
                src="/logo.png" 
                alt="KeerUI Logo" 
                width={32} 
                height={32} 
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-black dark:text-white">
                KeerUI
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm font-mono text-sm text-balance">
              A comprehensive UI component library for modern web applications.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  className="hover:bg-accent rounded-md border p-1.5"
                  target="_blank"
                  href={item.link}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="col-span-3 w-full md:col-span-1">
            <span className="text-muted-foreground mb-1 text-xs">
              Navigation
            </span>
            <div className="flex flex-col gap-1">
              {navigation.map(({ href, title }, i) => (
                <Link
                  key={i}
                  className={`w-max py-1 text-sm duration-200 hover:underline`}
                  href={href}
                >
                  {title}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-3 w-full md:col-span-1">
            <span className="text-muted-foreground mb-1 text-xs">Legal</span>
            <div className="flex flex-col gap-1">
              {company.map(({ href, title }, i) => (
                <Link
                  key={i}
                  className={`w-max py-1 text-sm duration-200 hover:underline`}
                  href={href}
                >
                  {title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-border absolute inset-x-0 h-px w-full" />
        <div className="flex flex-col justify-between gap-2 pt-2 pb-5 px-6">
          <p className="text-muted-foreground text-center font-thin">
            © {year} KeerUI. All rights reserved. Made with ❤️ by{" "}
            <a
              href="https://www.linkedin.com/in/uvenkatateja"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              venkatateja
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;