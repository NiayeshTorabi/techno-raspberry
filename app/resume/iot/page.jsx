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
        پورتفولیو / نرم‌افزار
        </div>
        </div>
        {/* data */}
      <div className="container mx-auto flex gap-10 flex-col">
        {/* banner */}
        <img className="h-[300px] w-full rounded-xl object-cover shadow-xl shadow-black/40" src="/images/service5.png" alt="" />
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
