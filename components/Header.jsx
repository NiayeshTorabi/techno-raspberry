import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav.jsx";

const Header = () => {
  // py-8 xl:py-12
  return <header dir="ltr" className="py-2">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-2xl">
            TechnoRaspberry
          </h1>
        </Link>
        {/* desktop nav & btn */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/project">
            <Button>ثبت پروژه</Button>
          </Link>
        </div>
        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
};

export default Header;