"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const sitePortfolio = () => {
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
        <img className="h-[300px] w-full rounded-xl object-cover shadow-xl shadow-black/40" src="/images/service1.png" alt="" />
        {/* data */}
        <h1 className="text-2xl">خدمات طراحی سایت تکنورزبری</h1>
        {/* types */}
        <div className="flex xl:flex-row flex-col justify-between gap-5">
          {/* wp */}
          <div className="border p-5 xl:w-[50%] w-[100%] rounded-md"><h2 className="flex gap-3 text-2xl">تکنولوژی <strong className="text-accent">وردپرس</strong></h2>
          <div className="border border-black/20 mt-2"></div>
          <p className="text-justify mt-3">وب‌سایت شما در بستر یک سیستم مدیریت محتوا (CMS) با قابلیت شخصی‌سازی حرفه‌ای و هزینه‌ای به صرفه‌تر پیشنهادی برای اشخاص حقیقی و کاربرانی که به تازگی کسب و کار خود را راه‌اندازی کرده‌اند.</p>
          </div>
          {/* code-site */}
          <div className="border p-5 xl:w-[50%] w-[100%] rounded-md"><h2 className="flex gap-3 text-2xl"><strong className="text-accent">کدنویسی</strong>حرفه‌ای</h2>
          <div className="border border-black/20 mt-2"></div>
          <p className="text-justify mt-3">فول کدنویسی؛ فرانت‌اند و بک‌اند خود را به ما بسپارید، قابلیت طراحی ۱۰۰٪ انعطاف پذیر، استفاده از برترین زبان‌های برنامه‌نویسی؛ مناسب برای سازمان‌ها، شرکت‌ها و کسب و کارهای باتجربه</p>
          </div>
        </div>
        {/* banner */}
        <img className="h-[300px] w-full rounded-xl object-cover shadow-xl shadow-black/40" src="/images/service3.png" alt="" />
        {/* portfolio */}
        <h2 className="text-2xl">نمونه‌کارهای ما</h2>
        <div className="grid xl:grid-cols-5 grid-cols-2 xl:gap-5 gap-1 place-items-center hi">
          {/* item1 */}
          <div className="flex flex-col w-full p-3 border rounded-md items-center align-center gap-5">
          <h3 className="font-bold xl:text-2xl text-base">خورشید وب</h3>
          <div className="xl:w-[200px] w-[150px] xl:h-[250px] h-[180px] bg-black transition-all ease-in-out duration-3 portfolio1 bg-top hover:bg-bottom rounded-md">
          </div>
          </div>
          {/* item2 */}
          <div className="flex flex-col w-full p-3 border rounded-md items-center align-center gap-5">
          <h3 className="font-bold xl:text-2xl text-base">وانیلابری</h3>
          <div className="xl:w-[200px] w-[150px] xl:h-[250px] h-[180px] bg-black transition-all ease-in-out duration-3 portfolio2 bg-top hover:bg-bottom rounded-md">
          </div>
          </div>
          {/* item3 */}
          <div className="flex flex-col w-full p-3 border rounded-md items-center align-center gap-5">
          <h3 className="font-bold xl:text-2xl text-base">سیکاس</h3>
          <div className="xl:w-[200px] w-[150px] xl:h-[250px] h-[180px] bg-black transition-all ease-in-out duration-3 portfolio3 bg-top hover:bg-bottom rounded-md">
          </div>
          </div>
          {/* item4 */}
          <div className="flex flex-col w-full p-3 border rounded-md items-center align-center gap-5">
          <h3 className="font-bold xl:text-2xl text-base">ماریان</h3>
          <div className="xl:w-[200px] w-[150px] xl:h-[250px] h-[180px] bg-black transition-all ease-in-out duration-3 portfolio4 bg-top hover:bg-bottom rounded-md">
          </div>
          </div>
          {/* item5 */}
          <div className="flex flex-col w-full p-3 border rounded-md items-center align-center gap-5">
          <h3 className="font-bold xl:text-2xl text-base">منگو اسکارف</h3>
          <div className="xl:w-[200px] w-[150px] xl:h-[250px] h-[180px] bg-black transition-all ease-in-out duration-3 portfolio5 bg-top hover:bg-bottom rounded-md">
          </div>
          </div>
          {/* item6 */}
          <div className="flex flex-col w-full p-3 border rounded-md items-center align-center gap-5">
          <h3 className="font-bold xl:text-2xl text-base">کسری مگنت</h3>
          <div className="xl:w-[200px] w-[150px] xl:h-[250px] h-[180px] bg-black transition-all ease-in-out duration-3 portfolio6 bg-top hover:bg-bottom rounded-md">
          </div>
          </div>
          {/* item7 */}
          <div className="flex flex-col w-full p-3 border rounded-md items-center align-center gap-5">
          <h3 className="font-bold xl:text-2xl text-base">هیدرولیک برادران</h3>
          <div className="xl:w-[200px] w-[150px] xl:h-[250px] h-[180px] bg-black transition-all ease-in-out duration-3 portfolio7 bg-top hover:bg-bottom rounded-md">
          </div>
          </div>
          {/* item8 */}
          <div className="flex flex-col w-full p-3 border rounded-md items-center align-center gap-5">
          <h3 className="font-bold xl:text-2xl text-base">خورشید فود</h3>
          <div className="xl:w-[200px] w-[150px] xl:h-[250px] h-[180px] bg-black transition-all ease-in-out duration-3 portfolio8 bg-top hover:bg-bottom rounded-md">
          </div>
          </div>
          {/* item9 */}
          <div className="flex flex-col w-full p-3 border rounded-md items-center align-center gap-5">
          <h3 className="font-bold xl:text-2xl text-base">اپول شاپ</h3>
          <div className="xl:w-[200px] w-[150px] xl:h-[250px] h-[180px] bg-black transition-all ease-in-out duration-3 portfolio9 bg-top hover:bg-bottom rounded-md">
          </div>
          </div>
          {/* item10 */}
          <div className="flex flex-col w-full p-3 border rounded-md items-center align-center gap-5">
          <h3 className="font-bold xl:text-2xl text-base">آلین کافه</h3>
          <div className="xl:w-[200px] w-[150px] xl:h-[250px] h-[180px] bg-black transition-all ease-in-out duration-3 portfolio10 bg-top hover:bg-bottom rounded-md">
          </div>
          </div>
        </div>
        {/* features */}
        <p className="text-2xl">فقط طراحی؟</p>
        <div className="border rounded-md p-5 text-justify">
          <p className="text-justify xl:text-2xl text-xl xl:leading-[3rem] leading-[2.5rem]">
            علاوه بر طراحی، سایت شمارو مثل موشک پرسرعت می‌کنیم و از ریشه اون رو بهینه می‌کنیم؛ یک سئوی اولیه براتون انجام می‌شه تا اگر در آینده قصد سئوی تخصصی سایتتون (که اتفاقاً سئوی تخصصی هم ارائه می‌دیم) رو داشتید، به راحتی بتونید اون رو از سر بگیرید و وقتتون صرف کارهای اولیه اون نشه!
          </p>
          <p className="text-justify xl:text-2xl text-xl xl:leading-[3rem] leading-[2.5rem]">خالی از لطف نیست به این نکته هم اشاره داشته باشیم که تمامی طراحی‌هایی که براتون انجام میشه صفر تا صد اختصاصی هستند، از کارهای گرافیکی (مثل دیزاین بنر، وکتور و...) که داخل سایتتون قرار داده می‌شه بگیرید تا طراحی سکشن به سکشن صفحات سایتتون؛ پس دیگه نیازی نیست نگران کپی بودن سایتتون از سایت دیگه باشید!</p>
        </div>
      </div>
      <div className="container mx-auto p-8 bg-[#00FF9C] rounded-md text-center">
        <h2 className="text-2xl">با ما همراه شوید تا برند خود را به بهترین شکل ممکن به نمایش بگذارید</h2>
        <br />
        <div className="flex gap-3 xl:flex-row flex-col justify-center">
        <Button
                variant="outline"
                className="text-accent border-accent hover:bg-accent hover:text-white"
              >
                <a href="/resume/iot"><span>پورتفولیوی سخت‌افزار</span></a>
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

export default sitePortfolio;
