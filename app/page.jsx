import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return <section className="h-full">
      <div className="h-fit bg-black mb-10">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-1 xl:pb-14">
          {/* text */}
          <div className="text-center xl:text-right order-2 xl:order-none">
            <span className="text-xl">خدمات تخصصی دیجیتال مارکتینگ</span>
            <h1 className="h1 mb-9">
              رزبری تکنو <br />{" "}
              <span className="text-accent">خدمتی نو</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-black/80">
              ارائه دهنده خدمات نرم‌افزاری طراحی وب‌سایت، گرافیک و سخت‌افزاری
              اعم از هوشمندسازی خانه‌ها به صورت کاملاً تخصصی در سطح ایران
            </p>
            {/* btn & socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                className="uppercase flex items-center gap-2"
              >
                <a href="/project"><span>ثبت همکاری</span></a>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-7 h-7 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
};

export default Home;
