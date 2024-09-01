import Meteors from "@/components/magicui/meteors";
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import templateImg from "@/public/templ.png";
import Image from "next/image";

const Tools = () => {
  return (
    <div className="border p-3 mt-4 flex flex-col lg:flex-row gap-4 rounded-2xl hover:bg-secondary/50 transition-[all_10s]">
      <Image
        src={templateImg}
        alt="banner"
        className="w-full md:w-80 border rounded-xl"
      />
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold">AI SaaS template</h1>
        <p className="text-muted-foreground">
          Tech themed websited. Suitable for SaaS startups. Contact me to
          acquire the template
        </p>
        <Link href="https://aitemplate.vercel.app" target="_blank">
          <Button className="w-full dark:bg-purple-600 dark: text-white">
            Live preview
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Tools;
