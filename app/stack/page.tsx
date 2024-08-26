import React from "react";

import jsLogo from "@/public/js.png";
import tailwindLogo from "@/public/tailwind (2).svg";
import reactLogo from "@/public/react.png";
import nextLogo from "@/public/nextjs.svg";
import graphqlLogo from "@/public/graphql.png";
import typeScriptLogo from "@/public/typescript.png";
import vscodeLogo from "@/public/vscode.png";
import chromeLogo from "@/public/chrome.png";
import spotifyLogo from "@/public/spotify.png";
import notionLogo from "@/public/notion.png";
import firebaseLogo from "@/public/firebase.png";
import chatgptLogo from "@/public/chatgpt.png";

import Image from "next/image";

const tools = [
  {
    name: "Frontend dev",
    imgUrl: reactLogo,
  },
  {
    name: "Sever Side Rendering",
    imgUrl: nextLogo,
  },
  {
    name: "Styling",
    imgUrl: tailwindLogo,
  },
  {
    name: "Foundation",
    imgUrl: jsLogo,
  },
  {
    name: "Type Safety",
    imgUrl: typeScriptLogo,
  },
  {
    name: "Querying",
    imgUrl: graphqlLogo,
  },
  {
    name: "Code Editor",
    imgUrl: vscodeLogo,
  },
  {
    name: "Browser",
    imgUrl: chromeLogo,
  },
  {
    name: "Productivity",
    imgUrl: notionLogo,
  },
  {
    name: "Authentication",
    imgUrl: firebaseLogo,
  },
  {
    name: "AI prompting",
    imgUrl: chatgptLogo,
  },
  {
    name: "Music",
    imgUrl: spotifyLogo,
  },
];

const Stack = () => {
  return (
    <div className="mt-4 flex flex-col gap-3">
      <div className="border p-4 rounded-xl">
        <h1 className="text-xl font-semibold tracking-tight">
          Languages, tools & frameworks
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
          {tools.map((item, id) => (
            <div
              key={id}
              className="border p-2 rounded-lg shadow-sm flex flex-col items-center justify-center"
            >
              <Image src={item.imgUrl} alt="logo" width={40} />
              <h1 className="">{item.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stack;
