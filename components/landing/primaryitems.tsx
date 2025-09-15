"use client";
import React from "react";
import { eliteItems, introItems, primaryItems } from "@/contants";
import Anchor from "../ui/anchor-single";

const PrimaryItems = () => {
  const sortedPrimaryItems = [...primaryItems].sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  const sortedEliteItems = [...eliteItems].sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  return (
    <div className="flex flex-col gap-6 pr-6">
      <div className="flex flex-col gap-1">
        <div className="px-3 py-2 text-[0.8rem] font-normal uppercase tracking-widest text-muted-foreground/70">
          Getting Started
        </div>
        <div className="grid gap-1">
          {introItems.map((item) => (
            <Anchor key={item.name + item.href} href={item.href}>
              {item.name}
            </Anchor>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="px-3 py-2 text-[0.8rem] font-normal uppercase tracking-widest text-muted-foreground/70">
          Featured Components
        </div>

        <div className="grid gap-1">
          {sortedEliteItems.map((item) => (
            <Anchor key={item.name + item.href} href={item.href}>
              {item.name}
            </Anchor>
          ))}
        </div>
      </div>
      {primaryItems.length > 0 && (
        <div className="flex flex-col gap-1">
          <div className="px-3 py-2 text-[0.8rem] font-normal uppercase tracking-widest text-muted-foreground/70">
            Basic Components
          </div>

          <div className="grid gap-1">
            {sortedPrimaryItems.map((item) => (
              <Anchor key={item.name + item.href} href={item.href}>
                {item.name}
              </Anchor>
            ))}
            <div className="mt-4 cursor-default pl-3 text-xs text-neutral-400">
              New drops incoming...
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrimaryItems;