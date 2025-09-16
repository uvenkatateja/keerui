import React from "react";
import { Themetoggle } from "@/components/ui/ThemeToggle";
import Link from "next/link";
import { navItems } from "@/contants";
import { GithubLink, TwitterLink } from "../ui/SocialButtons";
import Image from "next/image";
import NavbarDrawer from "./navbar-drawer";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/5 shadow-lg shadow-neutral-400/5 backdrop-blur-lg dark:bg-neutral-800/5 dark:shadow-neutral-700/5">
      <div className="mx-auto max-w-[95.8rem] border-x px-2 md:pl-8 md:pr-5">
        <div className="flex h-[3.5rem] items-center justify-between">
          <div className="flex items-center space-x-12">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="KeerUI Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-xl font-bold">KeerUI</span>
            </Link>

            <div className="hidden items-center space-x-6 lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item.name + item.href}
                  href={item.href}
                  className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden items-center space-x-2 lg:flex">
            <div className="flex items-center gap-0.5">
              <GithubLink />
              <TwitterLink />
              <Themetoggle />
            </div>
          </div>
          <div className="flex items-center space-x-1 lg:hidden">
            <Themetoggle />
            <NavbarDrawer />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;