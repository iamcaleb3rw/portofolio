"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

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

  return (
    <div className="border bg-secondary/60 rounded-md p-1 border-b flex md:gap-10 w-[fit-content] justify-between">
      {links.map((item, index) => (
        <Link href={item.href} key={index}>
          <Button
            variant={selectedIndex === index ? "default" : "ghost"}
            onClick={() => setSelectedIndex(index)}
          >
            {item.label}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
