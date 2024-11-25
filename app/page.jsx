import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return <section className="h-full">
      <div className="h-fit bg-accent">
        <picture className="hey1">
          <source media="(min-width: 1200px)" srcset="/images/home-main.png"/>
          <source media="(min-width: 768px)" srcset="/images/home-main-lg.png"/>
          <img src="/images/main.svg" className="xl:h-[92.8vh] h-[88vh]" alt="" />
        </picture>
      </div>
      <div className="container mx-auto h-full">
        <div className="flex flex-col-reverse xl:flex-row items-center justify-between xl:pb-10">
          {/* text */}
          <div className="text-center xl:text-right order-2 xl:order-none xl:ml-10 ml-0">
            <h1 className="h1 main-title">
            تکنورزبری<sup className='text-accent text-[3rem] xl:text-[5rem] main-title'> خدمتی نو</sup>
            </h1>
            <p className="text-black/80 xl:text-2xl text-xl leading-[3.5rem] xl:leading-[3rem] text-justify px-3">
            تکنورزبری ارائه دهنده خدماتی نوین؛ نرم‌افزاری، سخت‌افزاری و طراحی گرافیکی در سطح ایران و بین‌الملل با استفاده از بروزترین تکنولوژی و ترکیب آن با پشتیبانی تخصصی؛ آماده خدمت‌رسانی در سطوح با استانداردهای بالا
            </p>
            {/* btn & socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8 mt-10">
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
          <div className="order-1 xl:order-none mb-8 xl:mb-0 xl:mt-16 xl:ml-16">
            <Photo />
          </div>
        </div>
      </div>
      <Stats  />
    </section>
};

export default Home;
