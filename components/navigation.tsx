"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navigation = () => {
  let [selectedIndex, setSelectedIndex] = useState(0);
  const links = [
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Stack",
      href: "/stack",
    },
    {
      label: "Templates",
      href: "/templates",
    },
    {
      label: "Articles",
      href: "/articles",
    },
  ];

  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

  const pathname = usePathname();
  return (
    <div className="border bg-secondary/60 rounded-md p-1 border-b flex md:gap-10 max-w-fit justify-between overflow-scroll md:overflow-hidden">
      {links.map((item, index) => (
        <Link href={item.href} key={index}>
          <div
            className={cn(
              "px-4 py-3",
              pathname.includes(item.href)
                ? "bg-foreground text-secondary rounded-sm"
                : null
            )}
          >
            {item.label}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
