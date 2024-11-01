"use client";

import { motion } from "framer-motion";

const sitePortfolio = () => {
  return <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-1 flex flex-col gap-5 m-3"
    >
      <div className="container mx-auto flex gap-10 flex-col">
        {/* banner */}
        <img className="h-[300px] w-full rounded-xl object-cover shadow-xl shadow-black/40" src="https://www.cloudblue.com/wp-content/uploads/2024/06/what-is-the-internet-of-things-iot.png" alt="" />
        {/* data */}
        <h1 className="text-2xl">خدمات طراحی سایت تکنورزبری</h1>
        {/* types */}
        <div className="flex xl:flex-row flex-col justify-between gap-5">
          {/* wp */}
          <div className="border p-5 xl:w-[50%] w-[100%] rounded-md"><h2 className="flex gap-3 text-2xl">هم <strong className="text-accent">وردپرس</strong> داریم</h2>
          <div className="border border-black/20 mt-2"></div>
          <p className="text-justify mt-3">وب‌سایت شما در بستر یک سیستم مدیریت محتوا (CMS) با قابلیت شخصی‌سازی حرفه‌ای و هزینه‌ای به صرفه‌تر پیشنهادی برای اشخاص حقیقی و کاربرانی که به تازگی کسب و کار خود را راه‌اندازی کرده‌اند.</p>
          </div>
          {/* code-site */}
          <div className="border p-5 xl:w-[50%] w-[100%] rounded-md"><h2 className="flex gap-3 text-2xl">هم <strong className="text-accent">سایت کدنویسی</strong>!!</h2>
          <div className="border border-black/20 mt-2"></div>
          <p className="text-justify mt-3">فول کدنویسی؛ فرانت‌اند و بک‌اند خود را به ما بسپارید، قابلیت طراحی ۱۰۰٪ انعطاف پذیر، استفاده از برترین زبان‌های برنامه‌نویسی؛ مناسب برای سازمان‌ها، شرکت‌ها و کسب و کارهای باتجربه</p>
          </div>
        </div>
        {/* banner */}
        <img className="h-[300px] w-full rounded-xl object-cover shadow-xl shadow-black/40" src="https://www.cloudblue.com/wp-content/uploads/2024/06/what-is-the-internet-of-things-iot.png" alt="" />
        {/* portfolio */}
        <h2 className="text-2xl">نمونه‌کارهای ما</h2>
        <div className="grid xl:grid-cols-3 grid-cols-1 gap-5 place-items-center">
          {/* item1 */}
          <div className="flex flex-col w-full p-3 border rounded-md items-center align-center gap-5">
          <h3 className="font-bold text-2xl">خورشید وب</h3>
          <div className="xl:w-[290px] h-[290px] bg-black transition-all ease-in-out duration-3 portfolio2 bg-top hover:bg-bottom rounded-md">
          </div>
          </div>
          {/* item2 */}
          <div className="flex flex-col w-full p-3 border rounded-md items-center align-center gap-5">
          <h3 className="font-bold text-2xl">خورشید وب</h3>
          <div className="xl:w-[290px] h-[290px] bg-black transition-all ease-in-out duration-3 portfolio2 bg-top hover:bg-bottom rounded-md">
          </div>
          </div>
          {/* item3 */}
          <div className="flex flex-col w-full p-3 border rounded-md items-center align-center gap-5">
          <h3 className="font-bold text-2xl">خورشید وب</h3>
          <div className="xl:w-[290px] h-[290px] bg-black transition-all ease-in-out duration-3 portfolio2 bg-top hover:bg-bottom rounded-md">
          </div>
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

export default sitePortfolio;
