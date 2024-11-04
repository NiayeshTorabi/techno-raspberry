import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return <section className="h-full">
      <div className="h-fit bg-accent mb-10">
        <picture className="hey1">
          <source media="(min-width: 1200px)" srcset="/images/home-main.png"/>
          <source media="(min-width: 768px)" srcset="/images/home-main-lg.png"/>
          <img src="/images/home-main-ssm.png" className="xl:h-[92.8vh] h-[87dvh]" alt="" />
        </picture>
      </div>
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-1 xl:pb-14">
          {/* text */}
          <div className="text-center xl:text-right order-2 xl:order-none">
            <h1 className="h1 mb-3">
              تکنو رزبری <br />{" "}
              <span className="text-accent text-3xl sm:text-5xl">خدمتی نو</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-black/80 xl:text-2xl text-2xl leading-[3.5rem] xl:leading-[3rem] text-justify">
            تکنورزبری ارائه دهنده خدماتی نوین؛ نرم‌افزاری، سخت‌افزاری و طراحی گرافیکی در سطح ایران و بین‌الملل
            </p>
            {/* btn & socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                className="uppercase flex items-center gap-2"
              >
                <a href="/project"><span>ثبت پروژه</span></a>
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
