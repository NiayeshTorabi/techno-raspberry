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
      <img className="h-[300px] w-full rounded-xl object-cover shadow-xl shadow-black/40" src="https://www.cloudblue.com/wp-content/uploads/2024/06/what-is-the-internet-of-things-iot.png" alt="" />
      <Button
                variant="outline"
                className="uppercase flex items-center gap-2 absolute top-[5%] xl:right-[1%] right-[3%] text-primary"
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
        <p className="font-bold">بله، اشتباه تایپی در کار نیست!</p><p>ما این علم را با نرم‌افزار تلفیق کرده و با افتخار به هدف کارمان یعنی فراهم‌کردن "زندگی راحت‌تر" برای شما دست پیدا می‌کنیم.</p>
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
      <div>
        <div className="flex items-center imagine">
          <img src="/images/iot-imagine.jpg" alt="" className="w-[10%]" />
          <p className="font-bold text-2xl">تصور کن...</p>
        </div>

        <div></div>
      </div>
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
      <h3 className="font-bold">نصب و راه‌اندازی سیستم‌های هوشمند<span>:</span></h3><p>نصب و پیکربندی انواع تجهیزات هوشمند مانند ترموستات هوشمند، لامپ‌های هوشمند، پریزهای هوشمند و ...</p>
        <br />
        <h3 className="font-bold">اتوماسیون خانه<span>:</span></h3><p>ایجاد سناریوهای خودکار برای کنترل دستگاه‌های مختلف خانه</p>
        <br />
        <h3 className="font-bold">کنترل از راه دور<span>:</span></h3><p>کنترل خانه خود از هر نقطه دنیا با استفاده از تلفن همراه یا تبلت</p>
        <br />
        <h3 className="font-bold">امنیت هوشمند<span>:</span></h3><p>نصب سیستم‌های امنیتی هوشمند مانند دوربین مداربسته، دزدگیر و سنسورهای حرکت</p>
        <br />
        <h3 className="font-bold">صوتی و تصویری هوشمند<span>:</span></h3><p>یکپارچه‌سازی سیستم صوتی و تصویری خانه با سیستم هوشمند</p>
        <br />
        <h3 className="font-bold">حمل و نقل هوشمند<span>:</span></h3><p>با تکنورزبری قرار نیست از تکنولوژي حمل و نقل هوشمند عقب بمانید</p>
        <br />
        <h3 className="font-bold">پایش گاز<span>:</span></h3><p>دیگر نگران نشتی گاز نباشید؛ برای این مورد هم راه‌حل داریم</p>
      </div>
      <p className="font-bold">از چه تکنولوژی‌هایی استفاده می‌کنیم؟</p>

      <div className=" px-0 grid xl:grid-cols-6 grid-cols-2 gap-3 place-items-center mt-5">
        {/* item1 */}
        <div className="group xl:h-60 xl:w-60 h-40 w-40 [perspective:1000px]">
          <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0">
              <img className="h-full w-full rounded-xl border-4 border-primary object-cover shadow-xl shadow-black/30" src="https://static01.nyt.com/images/2020/10/29/style/28MOON-01/oakImage-1603985177355-superJumbo.jpg" alt="" />
            </div>
            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-5 text-center text-primary [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <h1 className="text-2xl font-bold text-accent">ESP32</h1>
                <p>ماژول تخصصی</p>
              </div>
            </div>
          </div>
        </div>
        {/* item2 */}
        <div className="group xl:h-60 xl:w-60 h-40 w-40 [perspective:1000px]">
          <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0">
              <img className="h-full w-full rounded-xl border-4 border-primary object-cover shadow-xl shadow-black/30" src="https://static01.nyt.com/images/2020/10/29/style/28MOON-01/oakImage-1603985177355-superJumbo.jpg" alt="" />
            </div>
            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-5 text-center text-primary [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <h1 className="text-2xl font-bold text-accent">Security</h1>
                <p>حرف اول</p>
              </div>
            </div>
          </div>
        </div>
        {/* item3 */}
        <div className="group xl:h-60 xl:w-60 h-40 w-40 [perspective:1000px]">
          <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0">
              <img className="h-full w-full rounded-xl border-4 border-primary object-cover shadow-xl shadow-black/30" src="https://static01.nyt.com/images/2020/10/29/style/28MOON-01/oakImage-1603985177355-superJumbo.jpg" alt="" />
            </div>
            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-5 text-center text-primary [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <h1 className="text-2xl font-bold text-accent">HTML</h1>
                <p>ساختار عالی</p>
              </div>
            </div>
          </div>
        </div>
        {/* item4 */}
        <div className="group xl:h-60 xl:w-60 h-40 w-40 [perspective:1000px]">
          <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0">
              <img className="h-full w-full rounded-xl border-4 border-primary object-cover shadow-xl shadow-black/30" src="https://static01.nyt.com/images/2020/10/29/style/28MOON-01/oakImage-1603985177355-superJumbo.jpg" alt="" />
            </div>
            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-5 text-center text-primary [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <h1 className="text-2xl font-bold text-accent">CSS</h1>
                <p>دیزاین بصری</p>
              </div>
            </div>
          </div>
        </div>
        {/* item5 */}
        <div className="group xl:h-60 xl:w-60 h-40 w-40 [perspective:1000px]">
          <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0">
              <img className="h-full w-full rounded-xl border-4 border-primary object-cover shadow-xl shadow-black/30" src="https://static01.nyt.com/images/2020/10/29/style/28MOON-01/oakImage-1603985177355-superJumbo.jpg" alt="" />
            </div>
            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-5 text-center text-primary [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <h1 className="text-2xl font-bold text-accent">JAVA</h1>
                <p>بهترین زبان</p>
              </div>
            </div>
          </div>
        </div>
        {/* item6 */}
        <div className="group xl:h-60 xl:w-60 h-40 w-40 [perspective:1000px]">
          <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0">
              <img className="h-full w-full rounded-xl border-4 border-primary object-cover shadow-xl shadow-black/30" src="https://static01.nyt.com/images/2020/10/29/style/28MOON-01/oakImage-1603985177355-superJumbo.jpg" alt="" />
            </div>
            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-5 text-center text-primary [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <h1 className="text-2xl font-bold text-accent">Number 1</h1>
                <p>درجه‌يک بازار</p>
              </div>
            </div>
          </div>
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
      <div className=" p-8 border border-[#00FF9C] rounded-md text-center mt-10">
        <h2 className="text-2xl">چرا تکنورزبری؟</h2>
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
        <Button
                variant="outline"
                className="text-black border-black hover:bg-[#00FF9C] hover:text-black"
              >
                <a href="/contact"><span>مشاهده نمونه‌کارهای بیشتر</span></a>
        </Button>
      </div>
      <div className=" p-8 border border-[#00FF9C] rounded-md text-center">
        <h2 className="text-2xl">برای کسب اطلاعات بیشتر و مشاوره رایگان، با ما تماس بگیرید</h2>
        <p className="mt-3">نمونه‌کار بعدی تکنورزبری می‌تواند پروژه شما باشد</p>
        <br />
        <Button
                variant="outline"
                className="text-black border-black hover:bg-white hover:text-black mt-5"
              >
                <a href="/contact"><span>ارتباط با ما</span></a>
        </Button>
      </div>
      
    </motion.section>
};

export default Iot;
