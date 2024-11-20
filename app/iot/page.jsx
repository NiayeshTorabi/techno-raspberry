"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Iot = () => {
  return <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 flex flex-col gap-5 container mx-auto"
    >
      <div className="relative  px-0">
      <img className="h-[300px] w-full rounded-xl object-cover shadow-xl shadow-black/40" src="/images/service5.png" alt="" />
      <Button
                variant="outline"
                className="uppercase flex items-center gap-2 absolute top-[5%] xl:right-[1%] right-[3%] text-primary border border-primary hover:bg-primary hover:text-accent"
              >
                <a href="/resume/graphics"><span>نمونه کارها</span></a>
              </Button>
      </div>
      <div className=" p-5 text-justify bg-accent/10 rounded-md">
        <h1 className="text-xl text-accent">تلفیق سخت‌افزار و نرم‌افزار، زندگی راحت‌تر و ایمن‌تر</h1>
        <br />
        <p>امروزه با فرمول "نرم‌افزار+سخت‌افزار" می‌توانیم دیوایس‌هایی داشته باشیم تا زندگی راحت‌تری را تجربه کنیم؛
        <br />
        <p>فرمول بالا را می‌توانیم مساوی با "هوشمندسازی" قرار دهیم</p>
        
</p>
<p className="font-bold">هوشمندسازی = آینده و زندگی ایمن‌تر</p>
      </div>
      <div className="flex xl:flex-row flex-col-reverse">
      <div className="p-8 text-justify bg-[#00FF9C]/20 rounded-md xl:w-[60%] w-[100%]">
        <h2 className="text-xl">علم سخت‌افزار همیشه به معنی استفاده ۱۰۰٪ از سخت‌افزار نیست</h2>
        <br />
        <p className="font-bold text-justify xl:text-xl xl:leading-[2.5rem] leading-[2.5rem]">بله، اشتباه تایپی در کار نیست!</p>
        <p className="text-justify xl:leading-[2.5rem] leading-[2.5rem]">ما این علم را با نرم‌افزار تلفیق کرده و با افتخار به هدف کارمان یعنی فراهم‌کردن "زندگی راحت‌تر" برای شما دست پیدا می‌کنیم.</p>
        <p className="text-justify xl:leading-[2.5rem] leading-[2.5rem]">تمامی خدمات ما در حوزه سخت‌افزار IoT را می‌توانید در این صفحه مشاهده کنید؛ همچنین جهت کسب اطلاعات بیشتر در رابطه با پروژه‌هایی که تا به این لحظه انجام داده‌ایم می توانید سری به صفحه‌ی پورتفولیو بزنید و نمونه‌کارهای تکنورزبری را چک کنید.</p>
        <p className="text-justify xl:leading-[2.5rem] leading-[2.5rem]">همچنین در صورت وجود هر گونه ابهام می‌توانید بلافاصله آن را با کارشناسان ما در میان گذاشته و مشاوره رایگان نیز دریافت کنید! بدین منظور می‌توانید از صفحه‌ی ارتباط با ما اقدام کنید.</p>
        {/* <br />
        <h3 className="font-bold">دمای خانه را کنترل کنید<span>:</span></h3><p>سیستم گرمایش و سرمایش خانه را به صورت هوشمند تنظیم کنید تا در هر فصلی از سال، دمای دلخواه خود را داشته باشید.</p>
        <br />
        <h3 className="font-bold">امنیت خانه را افزایش دهید<span>:</span></h3><p>با نصب دوربین‌های مداربسته هوشمند، سنسورهای حرکت و سیستم‌های کنترل دسترسی، از امنیت خانه خود اطمینان حاصل کنید.</p>
        <br />
        <h3 className="font-bold">مصرف انرژی را کاهش دهید<span>:</span></h3><p>با استفاده از سیستم‌های هوشمند، می‌توانید مصرف انرژی در خانه خود را بهینه کنید و در هزینه‌های خود صرفه‌جویی کنید.</p>
        <br />
        <h3 className="font-bold">صوتی و تصویری را کنترل کنید<span>:</span></h3><p>موسیقی مورد علاقه خود را پخش کنید، تلویزیون را روشن و خاموش کنید و حتی با دستیارهای صوتی با خانه خود تعامل کنید.</p> */}
      </div>
      <img src="/images/iot-question.jpg" alt="" className="xl:w-[40%] w-[100%]" />
      </div>
      <img className="h-[300px] w-full rounded-xl object-cover shadow-xl shadow-black/40" src="/images/IOT-technoraspberry.jpg" alt="" />
      {/* <div className=" p-8 text-justify bg-[#640D5F] rounded-md text-white">
        <h2 className="text-2xl">چرا تکنورزبری را برای هوشمندسازی خانه خود انتخاب کنید؟
</h2>
        <br />
        <h3 className="font-bold">تیم متخصص<span>:</span></h3><p>تیم ما از متخصصان مجرب و با تجربه در زمینه هوشمندسازی خانه تشکیل شده است.</p>
        <br />
        <h3 className="font-bold">تجهیزات باکیفیت<span>:</span></h3><p>ما از بهترین و باکیفیت‌ترین تجهیزات هوشمند استفاده می‌کنیم تا به شما بهترین تجربه را ارائه دهیم.</p>
        <br />
        <h3 className="font-bold">نصب حرفه‌ای<span>:</span></h3><p>تیم نصب ما با دقت و ظرافت، سیستم هوشمندسازی را در خانه شما نصب می‌کند.</p>
        <br />
        <h3 className="font-bold">پشتیبانی پس از فروش<span>:</span></h3><p>ما حتی پس از نصب سیستم، به شما پشتیبانی ارائه می‌دهیم تا هرگونه مشکلی را برطرف کنیم.</p>
      </div> */}
      <div className=" p-8 text-justify bg-[#dbcdf0]/50 rounded-md">
      <h2 className="text-2xl text-accent">خدمات هوشمندسازی خانه ما شامل موارد زیر می‌شود</h2>
      <br />
      <div className="grid xl:grid-cols-2 grid-cols-1">
      <h3 className="font-bold">نصب و راه‌اندازی سیستم‌های هوشمند<span>:</span></h3><p>نصب و پیکربندی انواع تجهیزات هوشمند مانند لامپ‌های هوشمند و ...</p>
        <h3 className="font-bold">اتوماسیون خانه<span>:</span></h3><p>ایجاد سناریوهای خودکار برای کنترل دستگاه‌های مختلف خانه</p>
        <h3 className="font-bold">کنترل از راه دور<span>:</span></h3><p>کنترل خانه خود از هر نقطه دنیا با استفاده از تلفن همراه یا تبلت</p>
        <h3 className="font-bold">امنیت هوشمند<span>:</span></h3><p>نصب سیستم‌های امنیتی هوشمند مانند دوربین مداربسته، دزدگیر و سنسورهای حرکت</p>
        <h3 className="font-bold">صوتی و تصویری هوشمند<span>:</span></h3><p>یکپارچه‌سازی سیستم صوتی و تصویری خانه با سیستم هوشمند</p>
        <h3 className="font-bold">حمل و نقل هوشمند<span>:</span></h3><p>با تکنورزبری قرار نیست از تکنولوژي حمل و نقل هوشمند عقب بمانید</p>
      </div>
      </div>
      {/* <div className=" p-8 text-justify bg-[#FEEC37]/20 rounded-md">
      <h2 className="text-2xl">مزایای هوشمندسازی خانه</h2>
      <br />
      <h3 className="font-bold">راحتی و آسایش<span>:</span></h3><p>با یک لمس، می‌توانید تمام دستگاه‌های خانه خود را کنترل کنید.</p>
        <br />
        <h3 className="font-bold">افزایش امنیت<span>:</span></h3><p>سیستم‌های هوشمند از خانه شما در برابر سرقت و حوادث محافظت می‌کنند.</p>
        <br />
        <h3 className="font-bold">کاهش مصرف انرژی<span>:</span></h3><p>با هوشمندسازی خانه، می‌توانید در هزینه‌های انرژی خود صرفه‌جویی کنید.</p>
        <br />
        <h3 className="font-bold">افزایش ارزش ملک<span>:</span></h3><p>هوشمندسازی خانه، ارزش ملک شما را افزایش می‌دهد.</p>
      </div> */}
      <div className="container mx-auto p-8 bg-[#00FF9C] rounded-md text-center">
        <h2 className="text-2xl">برای کسب اطلاعات بیشتر و مشاوره رایگان، با ما تماس بگیرید</h2>
        <br />
        <Button
                variant="outline"
                className="text-black border-black hover:bg-white hover:text-black"
              >
                <a href="/contact"><span>ارتباط با ما</span></a>
        </Button>
      </div>
    </motion.section>
};

export default Iot;
