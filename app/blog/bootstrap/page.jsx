"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const bootstrap = () => {
  return <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-1 flex flex-col gap-5 m-3 container mx-auto"
    >
      {/* title */}
      <div className="flex justify-between border rounded-md px-3 items-center">
        <div className="font-bold text-accent">
        ویژگی‌های نسخه جدید بوت‌استرپ | V5
        </div>
        </div>
        {/* banner */}
      <div className="container mx-auto px-0">
      <img className="h-[300px] w-full rounded-xl object-cover shadow-xl shadow-black/40" src="/images/bootstrap-technoraspberry.jpg" alt="" />
      </div>
      {/* data */}
      <h2 className="text-accent text-5xl text-center">مقالات در دست بروزرسانی هستند</h2><p className="text-justify px-3">بوت استرپ 5 اینجاست ! همینقدر کافیست که بدانید بوت استرپ نسخه به نسخه مارو سوپرایز میکنه و همیشه سعی کرده در بهترین و استانداردترین حالت خود در دسترس طراحان وب عزیز قرار بگیرد و این پروژه بوت استرپ از همان روزهای نخست هم استقبال از این پروژه زیاد بوده و طوری که روز به روز این پروژه بیشتر مورد استقبال قرار میگیره و هم اکنون هم نسخه 5 به صورت آلفا برای تست عرضه شده که نشان گر این هست که تا مدتی دیگر شاهد نسخه پایدار این نسخه خواهیم بود،

اما سوالات اصلی اینجاست که امکانات بوت استرپ نسخه 5 چیست ؟ بوت استرپ 5 چقدر بهتر از نسخه 4 است ؟

تاریخچه بوت استرپ
در سال 2011 بوت استرپ بود که به دنیای طراحان وب وارد و از همان ابتدا هم به دلایل ویژگی های متمایز خود به نسبت رقبا مورد توجه بوده و در هر نسخه توسعه دهندگان Bootstrap سعی داشتند تا با امکانات و استانداردهای روز دنیا همگام شوند تا این سیر صعودی را حفظ و رضایت استفاده کنندگان خود را افزایش دهد که در این امر نیز موفق بوده اند.

هرچند که امروزه کتابخانه های زیاد دیگری نیز برای رقابت با بوت استرپ وجود دارد و همانطور که هیچ چیز کامل نیست در برخی موارد بوت استرپ ضعف هایی در برابر رقبای خود دارد که در نسخه 5 تا حد خیلی خوبی این ضعف ها را باید فراموش کنید که در ادامه با این موارد آشنا می شوید.

تغییرات بوت استرپ 5 چیست ؟
تغییرات در بوت استرپ بیشتر در سمت کمبودهای این فریم ورک طراحان وب به نسبت رقبای خود بوده است و صد در صد بهبود ها و ویژگی های جدیدی نیز داشته که سعی می کنیم به صورت کامل به تمامی این جزئیات بپردازیم و ممکن هست با انتشار نسخه های بعدی این پست نیز آپدیت شود.

خداحافظ جی کوئری Jquery
یکی از دلایلی که گفتم برخی رقبا عملکردهای خوبی در برخی بخش ها داشتند همین نیازمند بودن بوت استرپ به کتابخانه jQuery بود که در نسخه 5 در یک حرکت عالی و خوب بوت استرپ این کتابخانه را حذف و با اینکار میشه عملکرد سریعتری را از بوت استرپ 5 شاهد بود دست توسعه دهندگان بوت استرپ برای قابلیت های به روز تر و مدرن تر باز تر خواهد بود.

اما شاید برایتان جالب باشد که برخی نیز مخالف این عمل هستند و بوت استرپ قصد دارد یک نسخه به همراه Jquery برای نسخه 5 Bootstrap نیز برای توسعه دهندگان منتشر کند که دقیقا این عمل مشخص نیست.

پشتیبانی از مرورگر اینترنت اکسپلور دیگه بسه!
نسخه 10 و 11 مرورگرهای اینترنتی اینترنت اکسپلور که خود مایکروسافت نیز آن ها را کنار گذشته به پایان خود در فریم ورک بوت استرپ رسیده اند و در نسخه 5 برخلاف نسخه 4 بوت استرپ خبری از پشتیبانی از این دو مرورگر نخواهد بود و کمی از حجم کدها و محدودیت های پیش روی تیم توسعه دهندگان بوت استرپ برداشته می شود.

مهاجرت به Vanilla JS
بوت استرپ با استفاده جاوا اسکریپت خالص یا وانیلا JS مجهز و مهاجرت داشته است و همانطور که گفتم امکانات و ویژگی های مدرن تری را شاهد خواهیم بود.

بهبود Navbar و فرم ها
دو بخش Navbar و فرم ها در بوت استرپ 5 بهبودهایی داشتند که در بخش فرم ها این بهبودها بیشتر بوده و می توان آن را راضی کننده و دسترسی های بیشتری را نیز دریافت کرد.

نسخه جدید و کاملی از آیکن ها
کتابخانه جدید SVG آیکن بوت استرپ نیز نسخه آلفا و 1 خود را منتشر کرده است و در ظاهر اول کاملا راضی کننده به نظر می رسد و فکر میکنم تو یک سری از پروژه ها دیگه نیازی نباشه از کتابخانه هایی مثل FontAwesome استفاده کنیم. که شاهد حجم مناسب و کیفیت خوب و تنوع زیادی هستیم که حتما در ادامه بهتر و بزرگتر هم خواهد شد.

فونت سایز های ریسپانسیو و بهینه
در بوت استرپ بر طبق پروژه RFS یا همان ریسپانسیو فونت سایز عمل شده و دیگه خیلی از تغییر سایز ها به صورت اتوماتیک از سوی خود بوت استرپ اعمال میشه و شاید روش های سنتی ای که توسعه دهندگان باهاش کلنجار می رفتن را نیز منسوخ کنه و نیازی نباشه کوئری هایی در سی اس اس برای سایز های مختلف تعریف بشه و سرعت انجام پروژه را بیشتر از قبل کرد. چون یکی از همین دردسر ها سایز فونت ها بوده و هست.</p></motion.section>
};

export default bootstrap;
