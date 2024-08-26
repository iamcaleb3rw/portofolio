import React from "react";
import Image from "next/image";
import CalcadeBanner from "@/public/calcade.png";
import StudyTimeBanner from "@/public/studytime.png";
import NyamataBanner from "@/public/nyamata.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const projects = [
  {
    Label: "Calcade | Startup Landing Page",
    imgUrl: CalcadeBanner,
    description:
      "Built with nextJS, TailwindCSS, and shadn/ui with both light and dark modes",
    href: "https://calcade.vercel.app",
  },
  {
    Label: "studyTime | E-library platform",
    imgUrl: StudyTimeBanner,
    description:
      "Built with HTML5, CSS3, and Vanilla JS; Allows users to access science books.",
    href: "https://iamcaleb3rw.github.io/studytime",
  },
  {
    Label: "Nyamata HS | High School website",
    imgUrl: NyamataBanner,
    description:
      "Built with ReactJS, Shadcn/ui, and TailwindCSS. Widens school's internet presence to attract students.",
    href: "https://nyamatahs.vercel.app",
  },
];

const Projectui = () => {
  return projects.map((project, index) => (
    <div
      key={index}
      className="border p-3 mt-4 flex flex-col lg:flex-row gap-4 rounded-2xl hover:bg-secondary/50 transition-[all_10s]"
    >
      <Image
        src={project.imgUrl}
        alt="banner"
        className="w-full md:w-80 border rounded-xl"
      />
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold">{project.Label}</h1>
        <p className="text-muted-foreground">{project.description}</p>
        <Link href={project.href} target="_blank">
          <Button className="w-full dark:bg-purple-600 dark: text-white">
            Live preview
          </Button>
        </Link>
      </div>
    </div>
  ));
};

export default Projectui;
