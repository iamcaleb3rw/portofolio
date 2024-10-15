import Meteors from "@/components/magicui/meteors";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import thumbNail from "@/public/highschool.jpg";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { Lock } from "lucide-react";

const Articles = () => {
  const { userId }: { userId: string | null } = auth();
  return (
    <div className="border p-3 mt-4 flex flex-col lg:flex-row gap-4 rounded-2xl hover:bg-secondary/50 transition-[all_10s]">
      <Image
        src={thumbNail}
        alt="banner"
        className="w-full md:w-80 border rounded-xl"
      />
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold">
          The People Who Defined My High School Years
        </h1>
        <p className="text-muted-foreground">
          High school friendships can change you in unexpected ways. In this
          article, I reflect on a few who left a mark on me—whether they
          realized it or not.
        </p>
        {userId ? (
          <Link href={"/articles/content"} className="border">
            <Button className="w-full">Read article</Button>
          </Link>
        ) : (
          <Link href={"/sign-in"} className="w-full">
            <Button className="w-full flex gap-2 items-center">
              <Lock className="h-4 w-4" />
              Unlock article
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Articles;
