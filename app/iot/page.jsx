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
      className="py-6 flex flex-col gap-5 m-3"
    >
      <div className="container mx-auto p-8 text-justify bg-accent/10 rounded-md">
        <h1 className="text-2xl">هوشمندسازی خانه؛ آینده زندگی راحت‌تر و ایمن‌تر</h1>
        <br />
        <p>خانه هوشمند شما، دنیای جدیدی از راحتی و امنیت را برایتان به ارمغان می‌آورد. با هوشمندسازی خانه، می‌توانید تمام دستگاه‌ها و سیستم‌های خانه خود را از طریق یک اپلیکیشن موبایل یا تبلت کنترل کنید.
</p>
      </div>
      <div className="container mx-auto p-8 text-justify bg-[#00FF9C]/20 rounded-md">
        <h2 className="text-2xl">تصور کنید که با یک لمس، می‌توانید<span>:</span></h2>
        <br />
        <h3 className="font-bold">روشنایی‌ها را تنظیم کنید<span>:</span></h3><p>شدت نور را کم و زیاد کنید، رنگ نور را تغییر دهید و حتی با یک برنامه از پیش تعیین شده، نورپردازی خانه را به طور خودکار تنظیم کنید.</p>
        <br />
        <h3 className="font-bold">دمای خانه را کنترل کنید<span>:</span></h3><p>سیستم گرمایش و سرمایش خانه را به صورت هوشمند تنظیم کنید تا در هر فصلی از سال، دمای دلخواه خود را داشته باشید.</p>
        <br />
        <h3 className="font-bold">امنیت خانه را افزایش دهید<span>:</span></h3><p>با نصب دوربین‌های مداربسته هوشمند، سنسورهای حرکت و سیستم‌های کنترل دسترسی، از امنیت خانه خود اطمینان حاصل کنید.</p>
        <br />
        <h3 className="font-bold">مصرف انرژی را کاهش دهید<span>:</span></h3><p>با استفاده از سیستم‌های هوشمند، می‌توانید مصرف انرژی در خانه خود را بهینه کنید و در هزینه‌های خود صرفه‌جویی کنید.</p>
        <br />
        <h3 className="font-bold">صوتی و تصویری را کنترل کنید<span>:</span></h3><p>موسیقی مورد علاقه خود را پخش کنید، تلویزیون را روشن و خاموش کنید و حتی با دستیارهای صوتی با خانه خود تعامل کنید.</p>
      </div>
      <div className="container mx-auto p-8 text-justify bg-[#640D5F] rounded-md text-white">
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
      </div>
      <div className="container mx-auto p-8 text-justify bg-black/10 rounded-md">
      <h2 className="text-2xl">خدمات هوشمندسازی خانه ما شامل موارد زیر می‌شود</h2>
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
      </div>
      <div className="container mx-auto p-8 text-justify bg-[#FEEC37]/20 rounded-md">
      <h2 className="text-2xl">مزایای هوشمندسازی خانه</h2>
      <br />
      <h3 className="font-bold">راحتی و آسایش<span>:</span></h3><p>با یک لمس، می‌توانید تمام دستگاه‌های خانه خود را کنترل کنید.</p>
        <br />
        <h3 className="font-bold">افزایش امنیت<span>:</span></h3><p>سیستم‌های هوشمند از خانه شما در برابر سرقت و حوادث محافظت می‌کنند.</p>
        <br />
        <h3 className="font-bold">کاهش مصرف انرژی<span>:</span></h3><p>با هوشمندسازی خانه، می‌توانید در هزینه‌های انرژی خود صرفه‌جویی کنید.</p>
        <br />
        <h3 className="font-bold">افزایش ارزش ملک<span>:</span></h3><p>هوشمندسازی خانه، ارزش ملک شما را افزایش می‌دهد.</p>
      </div>
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
