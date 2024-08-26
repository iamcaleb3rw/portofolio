import React from "react";
import { ModeToggle } from "./toggleMode";
import logoImage from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { AnimatedSubscribeButton } from "./magicui/animated-subscribe-button";
import {
  CheckIcon,
  ChevronRightIcon,
  Download,
  Eye,
  Icon,
  Instagram,
  Menu,
  Twitter,
  Mail,
  Linkedin,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

function Navbar() {
  const socials = [
    {
      href: "https://instagram.com/iamcaleb3rw",
      icon: Instagram,
      label: "Instagram",
    },
    {
      href: "https://www.linkedin.com/in/caleb-ishimwe-ganza-021076261/",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "https://x.com/ishimwe_caleb",
      icon: Twitter,
      label: "Twitter",
    },
    {
      href: "https://instagram.com/iamcaleb3rw",
      icon: Mail,
      label: "Email",
    },
  ];
  return (
    <div className="border-b flex justify-between items-center py-2 px-6 sticky top-0 bg-primary-foreground/70 backdrop-blur-sm z-50">
      <div className="flex gap-2 items-center">
        <Image src={logoImage} alt="logo" className="w-12" />
        <div className="text-xl font-bold  hidden sm:flex">
          Caleb <span className="text-muted-foreground/40">/dev</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {/* <Button className='hidden sm:block'>Newsletter</Button> */}
        <Link
          href="/CV.pdf"
          target="_blank"
          download
          className="hidden sm:block"
        >
          <Button variant="outline" className="flex gap-1 items-center">
            <p>Download CV</p>
            <Download size={18} />
          </Button>
        </Link>
        <ModeToggle />
        <div className="sm:hidden">
          <Sheet>
            <SheetTrigger>
              <div className="border p-[7px] rounded-md hover:bg-primary-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </div>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>What are you looking for?</SheetTitle>
                <SheetDescription>
                  Browse my socials, download my CV or subscribe to my
                  newsletter
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-3 mt-4">
                {/* <Button className="w-full">Subscribe to newsletter</Button> */}
                <Button variant="outline" className="w-full">
                  Download my CV
                </Button>
              </div>
              <div className="grid grid-cols-4 gap-2 mt-5">
                {socials.map((item, index) => {
                  return (
                    <TooltipProvider key={index}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link href={item.href} target="_blank">
                            <div className="border p-3 flex items-center justify-center rounded-lg hover:bg-primary-foreground cursor-pointer">
                              <item.icon />
                            </div>
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{item.label}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
