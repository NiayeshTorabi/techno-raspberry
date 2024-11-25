"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const iotPortfolio = () => {
  return <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="flex flex-col my-5 container mx-auto"
    >
      {/* title */}
      <div className="border rounded-md px-3 py-1 items-center mx-3 mb-3">
        <div className="font-bold text-base text-accent">
        پورتفولیو / سخت‌افزار
        </div>
        </div>
        {/* data */}
      <div className="container mx-auto flex gap-10 flex-col">
        {/* banner */}
        <img className="h-[300px] w-full rounded-xl object-cover shadow-xl shadow-black/40" src="/images/service5.png" alt="" />
        {/* intro */}
          <div className="flex xl:flex-row flex-col justify-between">
          <div className="xl:ml-10 ml-0">
            <h2 className="py-3 border-t rounded-md xl:mt-16 mt-5 text-accent text-2xl">با افتخار، از بزرگترین نمونه‌کارهایمان</h2>
            <p className="font-bold text-justify xl:text-2xl text-xl xl:leading-[3rem] leading-[2.5rem]">خانه هوشمند !!</p>
            <p className="text-justify xl:text-xl text-md xl:leading-[3rem] leading-[2.5rem]">خانه‌ای با قابلیت‌های استثنائی؛ از قبیل چک دمای خانه، رطوبت خود خانه به همراه رطوبت گلخانه‌ی این مکان مسکونی؛ اضافه کردن آپشن روشن و خاموش کردن فن؛ کنترل کامل روی درب ورود و خروج و...</p>
            <p className="text-justify xl:text-xl text-md xl:leading-[3rem] leading-[2.5rem]">در ادامه می‌توانید ویدئویی را جهت معرفی این پروژه مشاهده کرده و اطلاعات بیشتری را در این رابطه کسب کنید</p>
          </div>
          <video src="/videos/IoT-NiayeshTorabi.mp4" alt="" className="border rounded-md xl:h-[500px] h-full xl:mt-0 mt-5" controls />
          </div>
        {/* data */}
        <h2 className="py-3 border-t rounded-md xl:mt-16 mt-8 text-accent text-2xl">هدف ما از این پروژه</h2>
        <p className="text-justify xl:text-xl text-md xl:leading-[3rem] leading-[2.5rem]">هدف اصلی تکنورزبری استفاده از بهترین وسیله‌ها در جهت خلق بهترین نسخه از هوشمندسازی خانه‌هاست...</p>
        <div className="flex flex-col gap-1">
        <img src="/images/iot-home-technoraspberry.webp" alt="" className="border rounded-md w-full h-[280px] object-cover" />
        <div className="grid xl:grid-cols-3 grid-cols-1 gap-1">
          <img src="/images/IoT-TechnoRaspberry1.jpeg" alt="" className="border rounded-md w-[377px] h-[279px]"/>
          <img src="/images/IoT-TechnoRaspberry2.jpeg" alt="" className="border rounded-md w-[377px] h-[279px]"/>
          <img src="/images/IoT-TechnoRaspberry3.jpeg" alt="" className="border rounded-md w-[377px] h-[279px]"/>
        </div>
        </div>
        {/* boxes */}
        <div className="container mx-auto p-8 text-justify bg-accent/10 rounded-md">
        <h2 className="text-2xl leading-[2.5rem] xl:leading-[3rem] mb-5">اگر دوست دارید بیشتر درمورد علم IoT بدونید، فایل زیر رو مطالعه کنید</h2>
        <Button
                variant="outline"
                className="uppercase flex items-center gap-2 w-full"
              >
                <a href="#" target="_blank"><span>فایل IoT</span></a>
              </Button>
      </div>
        {/* other */}
        <div className="grid xl:grid-cols-4 grid-cols-2 gap-3">
          {/* item1 */}
          <div>
          <h3 className="portfolio-text1 duration-3 transition-all text-center">پارکینگ هوشمند</h3>
          <img src="/images/Portfolio-IoT-technoraspberry4.jpeg" className="xl:w-[285px] xl:h-[285px] rounded-md" alt="" />
          </div>
          {/* item2 */}
          <div>
          <h3 className="portfolio-text1 duration-3 transition-all text-center">معدن هوشمند</h3>
          <img src="/images/Portfolio-IoT-technoraspberry1.jpeg" className="xl:w-[285px] xl:h-[285px] rounded-md" alt="" />
          </div>
          {/* item3 */}
          <div>
          <h3 className="portfolio-text1 duration-3 transition-all text-center">گلخونه هوشمند</h3>
          <img src="/images/Portfolio-IoT-technoraspberry2.jpeg" className="xl:w-[285px] xl:h-[285px] rounded-md" alt="" />
          </div>
          {/* item4 */}
          <div>
          <h3 className="portfolio-text1 duration-3 transition-all text-center">RFID</h3>
          <img src="/images/Portfolio-IoT-technoraspberry3.jpeg" className="xl:w-[285px] xl:h-[285px] rounded-md" alt="" />
          </div>
        </div>
        {/* features */}
        <p className="text-4xl mt-20 font-bold text-accent">اطلاعات بیشتر؟</p>
        <div className="border rounded-md p-3 text-justify flex flex-col gap-5">
          <p className="text-justify xl:text-2xl text-xl xl:leading-[3rem] leading-[2.5rem]">همیشه اطلاعات بیشتر داریم! برای کسب دیتای کامل‌تر درباره مطالب بالا، می‌تونید فایلی که در پایین پیوست شده رو مطالعه داشته باشید.
          </p>
          <Button
                variant="outline"
                className="uppercase flex items-center gap-2"
              >
                <a href="#" target="_blank"><span>اطلاعات بیشتر</span></a>
              </Button>
        </div>
      </div>
      <div className="container mx-auto p-8 bg-[#00FF9C] rounded-md text-center mt-5">
        <h2 className="text-2xl">با ما همراه شوید تا برند خود را به بهترین شکل ممکن به نمایش بگذارید</h2>
        <br />
        <div className="flex gap-3 xl:flex-row flex-col justify-center">
        <Button
                variant="outline"
                className="text-accent border-accent hover:bg-accent hover:text-white"
              >
                <a href="/resume/site"><span>پورتفولیوی نرم‌افزار</span></a>
        </Button>
        <Button
                variant="outline"
                className="text-black border-black hover:bg-white hover:text-black"
              >
                <a href="/contact"><span>ارتباط با ما</span></a>
        </Button>
        <Button
                variant="outline"
                className="text-accent border-accent hover:bg-accent hover:text-white"
              >
                <a href="/resume/graphics"><span>پورتفولیوی گرافیک</span></a>
        </Button>
        </div>
      </div>
    </motion.section>
};

export default iotPortfolio;
