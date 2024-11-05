"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Graphics = () => {
  return <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 flex flex-col gap-5 container mx-auto"
    >
      <div className="relative px-0">
      <img className="h-[300px] w-full rounded-xl object-cover shadow-xl shadow-black/40" src="/images/service3.png" alt="" />
      <Button
                variant="outline"
                className="uppercase flex items-center gap-2 absolute top-[5%] xl:right-[1%] right-[3%] text-primary border border-primary hover:bg-primary hover:text-accent"
              >
                <a href="/resume/graphics"><span>نمونه کارها</span></a>
              </Button>
      </div>
      <div className="container mx-auto p-8 text-justify bg-accent/10 rounded-md">
        <h1 className="text-2xl">با طراحی گرافیکی حرفه‌ای، کسب‌وکار خود را به تصویر بکشید
</h1>
        <br />
        <p>در دنیای امروز، طراحی گرافیک نقش بسیار مهمی در موفقیت هر کسب‌وکاری ایفا می‌کند.
</p>
      </div>
      <div className="container mx-auto p-8 text-justify bg-[#00FF9C]/20 rounded-md">
        <h2 className="text-2xl">یک طراحی گرافیکی جذاب و حرفه‌ای می‌تواند به شما کمک کند تا<span>:</span></h2>
        <br />
        <h3 className="font-bold">هویت بصری قوی برای برند خود ایجاد کنید<span>:</span></h3><p>با طراحی یک لوگو منحصر به فرد و استفاده از رنگ‌ها و فونت‌های مناسب، می‌توانید هویت بصری قوی و ماندگاری برای برند خود ایجاد کنید.</p>
        <br />
        <h3 className="font-bold">جذب مشتریان جدید<span>:</span></h3><p>طراحی‌های گرافیکی جذاب و خلاقانه می‌توانند توجه مشتریان بالقوه را جلب کرده و آن‌ها را به سمت محصولات یا خدمات شما هدایت کنند.</p>
        <br />
        <h3 className="font-bold">ارتباط مؤثر با مخاطبان<span>:</span></h3><p>با استفاده از طراحی گرافیکی، می‌توانید پیام خود را به صورت واضح و جذاب به مخاطبان منتقل کنید.</p>
        <br />
        <h3 className="font-bold">افزایش فروش<span>:</span></h3><p>طراحی‌های گرافیکی حرفه‌ای می‌توانند به شما کمک کنند تا محصولات یا خدمات خود را به صورت جذاب‌تری به نمایش بگذارید و در نتیجه فروش خود را افزایش دهید.</p>
      </div>
      <div className="container mx-auto p-8 text-justify bg-[#640D5F] rounded-md text-white">
        <h2 className="text-2xl">خدمات طراحی گرافیک ما شامل موارد زیر می‌شود</h2>
        <br />
        <h3 className="font-bold">طراحی لوگو<span>:</span></h3><p>طراحی لوگوهای منحصر به فرد و ماندگار که بیانگر هویت برند شما باشد.</p>
        <br />
        <h3 className="font-bold">طراحی کارت ویزیت<span>:</span></h3><p>طراحی کارت ویزیت‌های زیبا و حرفه‌ای که اولین برداشت مشتریان از کسب‌وکار شما را شکل می‌دهد.</p>
        <br />
        <h3 className="font-bold">طراحی پوستر و بنر<span>:</span></h3><p>طراحی پوستر و بنرهای تبلیغاتی جذاب برای معرفی محصولات و خدمات شما.</p>
        <br />
        <h3 className="font-bold">طراحی کاتالوگ و بروشور<span>:</span></h3><p>طراحی کاتالوگ و بروشورهای حرفه‌ای برای معرفی محصولات یا خدمات شما به صورت دقیق و جامع.</p>
        <br />
        <h3 className="font-bold">طراحی بسته‌بندی<span>:</span></h3><p>طراحی بسته‌بندی‌های جذاب و منحصر به فرد برای محصولات شما.</p>
        <br />
        <h3 className="font-bold">طراحی آیکون و گرافیک متحرک<span>:</span></h3><p>طراحی آیکون‌ها و گرافیک‌های متحرک برای استفاده در وب‌سایت، اپلیکیشن و شبکه‌های اجتماعی.</p>
        <br />
        <h3 className="font-bold">طراحی موشن گرافیک<span>:</span></h3><p>ایجاد ویدیوهای کوتاه و جذاب با استفاده از گرافیک متحرک برای معرفی محصولات یا خدمات شما.</p>
      </div>
      <div className="container mx-auto p-8 text-justify bg-black/10 rounded-md">
      <h2 className="text-2xl">چرا تکنورزبری را برای طراحی گرافیک خود انتخاب کنید؟</h2>
      <br />
      <h3 className="font-bold">تیم خلاق و حرفه‌ای<span>:</span></h3><p>تیم طراحی ما با ایده‌های نوآورانه و خلاقانه، طراحی‌های منحصر به فردی را برای شما خلق می‌کند.</p>
        <br />
        <h3 className="font-bold">توجه به جزئیات<span>:</span></h3><p>ما به کوچک‌ترین جزئیات طراحی اهمیت می‌دهیم تا بهترین نتیجه را برای شما به ارمغان آوریم.</p>
        <br />
        <h3 className="font-bold">استفاده از نرم‌افزارهای حرفه‌ای<span>:</span></h3><p>ما از آخرین نرم‌افزارهای طراحی گرافیک استفاده می‌کنیم تا طراحی‌های با کیفیت بالا برای شما ایجاد کنیم.</p>
        <br />
        <h3 className="font-bold">توجه به نیازهای مشتری<span>:</span></h3><p>ما با در نظر گرفتن نیازها و سلیقه‌های شما، طرح‌های مورد نظر شما را طراحی می‌کنیم.</p>
      </div>
      <div className="container mx-auto p-8 bg-[#00FF9C] rounded-md text-center">
        <h2 className="text-2xl">با ما همراه شوید تا برند خود را به بهترین شکل ممکن به نمایش بگذارید</h2>
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

export default Graphics;
