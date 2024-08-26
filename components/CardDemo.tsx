import { Clock, Link2, MapPin, Send } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import profile from "@/public/profile.png";
import calcadeLogo from "@/public/iconlogo.png";
import Image from "next/image";
import BlurIn from "./magicui/blur-in";
import WordPullUp from "./magicui/word-pull-up";

function CardDemo() {
  const languages = [
    {
      label: "HTML5",
      background: "bg-orange-400/80",
      width: "w-[60%]",
    },
    {
      label: "CSS3",
      background: "bg-blue-300",
      width: "w-[30%]",
    },
    {
      label: "JavaScript",
      background: "bg-yellow-300",
      width: "min-w-[30%]",
    },
    {
      label: "ReactJS",
      background: "bg-blue-300",
      width: "w-[60%]",
    },
    {
      label: "NextJS",
      background: "bg-green-300",
      width: "min-w-[20%]",
    },
    {
      label: "TailwindCSS",
      background: "bg-blue-300",
      width: "min-w-[30%]",
    },
    {
      label: "SCSS",
      background: "bg-pink-300",
      width: "w-[30%]",
    },
    {
      label: "Typescipt",
      background: "bg-blue-300",
      width: "min-w-[70%]",
    },
  ];
  return (
    <Card className="w-full md:max-w-[30vw] p-5">
      <div className="text-center flex items-center flex-col gap-3 py-3">
        <div className="relative">
          <BlurIn
            word={
              <Image
                src={profile}
                alt="profile Image"
                width={120}
                className="z-10"
              />
            }
          />
          <div className="absolute -bottom-2 backdrop-blur-xl bg-green-300/40 rounded-lg p-1 left-[25%]">
            <p className="text-xs font-semibold text-green-600">AVAILABLE</p>
          </div>
        </div>
        <div className="text-3xl font-bold mt-3 tracking-tight">
          <WordPullUp words="Caleb Ganza" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <Button className="w-full rounded-xl text-md gap-3">
            Get in touch
            <Send size={16} />
          </Button>
          <div className="flex items-center">
            <p className="text-muted-foreground">
              ⚡ Literally responds in 24hrs
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <h1 className="text-primary/90 text-sm"> ● LANGUAGES AND FRAMEWORKS</h1>
        <div className="flex flex-wrap gap-1 items-center">
          {languages.map((item, index) => (
            <div
              key={index}
              className={`${item.width} flex items-center justify-center rounded-full px-2 py-[1px] border dark:bg-secondary/70 dark:hover:bg-secondary hover:bg-secondary cursor-pointer backdrop-blur-sm`}
            >
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-3">
        <h1 className="text-sm text-primary/90"> ● ABOUT</h1>
        <p className="text-muted-foreground">
          Hi there 👋, I am Caleb a front-end engineer with 4 years of
          experience. I build professional, high performance websites with
          perfect SEO practices.
          <br />
        </p>
        <div>
          <div className="flex gap-1">
            <MapPin size={20} className="text-muted-foreground font-thin" />
            <p>Kigali, Rwanda</p>
          </div>
          <div className="flex gap-1">
            <Clock size={20} className="text-muted-foreground font-thin" />
            <p>(GMT+2) Central African Time(CAT)</p>
          </div>
          <div className="flex gap-1">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-muted-foreground"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>
            </div>
            <p>English & Français</p>
          </div>
        </div>
        <div className="mt-5 flex items-center gap-2 border-t py-3">
          <Image src={calcadeLogo} alt="calcade" className="w-10" />
          <div>
            <div>
              <p>
                Founder at <strong>Calcade Solutions Inc.</strong>
              </p>
              <Link
                href="https://calcade.vercel.app"
                className="flex gap-1 items-center underline"
              >
                <Link2 size={16} />
                calcade.vercel.app
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default CardDemo;
