"use client";

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
        {/* data */}
        <h2 className="py-3 border-t rounded-md mt-16 text-accent text-2xl">محیط مسکونی با IoT</h2>
        <p className="text-justify xl:text-2xl text-xl xl:leading-[3rem] leading-[2.5rem]">پورتفولیوی سخت‌افزار را با پروژه جذاب محیط مسکونی بااینترنت اشیاء آغاز می‌کنیم؛ در ادامه می‌توانید تصاویر این پروژه حرفه‌ای را مشاهده کنید.</p>
        {/* boxes */}
        <div className="grid xl:grid-cols-4 grid-cols-2">
          <div>
          <h3 className="portfolio-text1 duration-3 transition-all">پروژه یک</h3>
          <img src="/images/Portfolio-IoT-technoraspberry1.jpeg" className="xl:w-[285px] xl:h-[285px] !w-[285px] h-[285px] rounded-md" alt="" />
          </div>
        </div>
        {/* features */}
        <p className="text-2xl">فقط طراحی؟</p>
        <div className="border rounded-md p-5 text-justify">
          <p>
            علاوه بر طراحی، سایت شمارو مثل موشک پرسرعت می‌کنیم و از ریشه اون رو بهینه می‌کنیم؛ یک سئوی اولیه براتون انجام می‌شه تا اگر در آینده قصد سئوی تخصصی سایتتون (که اتفاقاً سئوی تخصصی هم ارائه می‌دیم) رو داشتید، به راحتی بتونید اون رو از سر بگیرید و وقتتون صرف کارهای اولیه اون نشه!
          </p>
          <p>خالی از لطف نیست به این نکته هم اشاره داشته باشیم که تمامی طراحی‌هایی که براتون انجام میشه صفر تا صد اختصاصی هستند، از کارهای گرافیکی (مثل دیزاین بنر، وکتور و...) که داخل سایتتون قرار داده می‌شه بگیرید تا طراحی سکشن به سکشن صفحات سایتتون؛ پس دیگه نیازی نیست نگران کپی بودن سایتتون از سایت دیگه باشید!</p>
        </div>
      </div>
    </motion.section>
};

export default iotPortfolio;
