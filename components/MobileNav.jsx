"use client";

import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "./ui/button";

const Links = [
  {
    name: "خانه",
    path: "/",
  },
  {
    name: "خدمات",
    path: "/services",
  },
  {
    name: "پورتفولیو",
    path: "/resume",
  },
  {
    name: "درباره ما",
    path: "/about",
  },
  {
    name: "ارتباط با ما",
    path: "/contact",
  },
  {
    name: "وبلاگ",
    path: "/blog",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-20 mb-10 text-2xl">
          <SheetClose asChild>
          <Link href="/">
            <h1>TechnoRaspberry
            </h1>
          </Link>
          </SheetClose>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center gap-8">
          {Links.map((link, index) => {
            return <SheetClose asChild key={index}>
                <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname &&
                  "text-accent border-b-2 border-accent"
                } text-xl capitalize hover:text-accent transition-all`}
                >
                {link.name}
                </Link>
              </SheetClose>
          })}
              <SheetClose asChild>
              <Link href="/project">
              <Button className="w-full">ثبت پروژه</Button>
              </Link>
              </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
