"use client";

import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

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
    name: "رزومه",
    path: "/resume",
  },
  {
    name: "درباره ما",
    path: "/about",
  },
  {
    name: "راه‌های ارتباطی",
    path: "/contact",
  },
  {
    name: "ثبت پروژه",
    path: "/project",
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
          <Link href="/">
            <h1 className="text-3xl font-semibold">TechnoRaspberry
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center gap-8">
          {Links.map((link, index) => {
            return (
              <SheetClose asChild>
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
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
