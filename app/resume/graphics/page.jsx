"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const graphicsPortfolio = () => {
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
        پورتفولیو / گرافیک
        </div>
        </div>
        {/* data */}
      <div className="container mx-auto flex gap-10 flex-col">
        {/* banner */}
        <img className="h-[300px] w-full rounded-xl object-cover shadow-xl shadow-black/40" src="/images/service4.png" alt="" />
        <p className="text-justify xl:text-2xl text-xl xl:leading-[3rem] leading-[2.5rem] px-3">در این صفحه به تصویر کشیدن نمونه‌کارهای تکنورزبری در حوزه تخصصی گرافیک پرداخته‌ایم و شما عزیزان می‌توانید توسط فهرستی که در ادامه قرار داده شده است، با کلیک بر روی بخش مورد نظر خود، به آن قسمت بروید و دسترسی آسان‌تری برای مشاهده نمونه‌کارها داشته باشید.</p>
        <div className="border p-5 rounded-md">
        <h2>فهرست مطالب</h2>
        <ul>
          <a href="#logo"><li>لوگو</li></a>
          <a href="#banner"><li>بنر</li></a>
          <a href="#visit-card"><li>کارت ویزیت</li></a>
          <a href="#poster"><li>پوستر</li></a>
          <a href="#ad"><li>ویدئوهای تبلیغاتی</li></a>
          <a href="#catalog"><li>کاتالوگ</li></a>
          <a href="#magazine"><li>مجله</li></a>
        </ul>
        </div>
        {/* logo */}
        <h2 className="py-3 border-t rounded-md mt-16 text-accent text-2xl" id="logo">لوگو</h2>
        <div className="grid xl:grid-cols-5 grid-cols-3 xl:gap-5 gap-1">
          {/* item1 */}
          <div>
            <img src="/images/logo1-portfolio-technoraspberry.png" alt="" className="border rounded-md h-[100px] xl:h-[200px] w-full" />
          </div>
          {/* item2 */}
          <div>
            <img src="/images/logo2-portfolio-technoraspberry.jpeg" alt="" className="border rounded-md h-[100px] xl:h-[200px] w-full" />
          </div>
          {/* item3 */}
          <div>
            <img src="/images/logo3-portfolio-technoraspberry.jpeg" alt="" className="border rounded-md h-[100px] xl:h-[200px] w-full" />
          </div>
          {/* item4 */}
          <div>
            <img src="/images/logo4-portfolio-technoraspberry.jpeg" alt="" className="border rounded-md h-[100px] xl:h-[200px] w-full" />
          </div>
          {/* item5 */}
          <div>
            <img src="/images/logo5-portfolio-technoraspberry.jpeg" alt="" className="border rounded-md h-[100px] xl:h-[200px] w-full" />
          </div>
          {/* item6 */}
          <div>
            <img src="/images/logo6-portfolio-technoraspberry.jpeg" alt="" className="border rounded-md h-[100px] xl:h-[200px] w-full" />
          </div>
          {/* item7 */}
          <div>
            <img src="/images/logo7-portfolio-technoraspberry.jpeg" alt="" className="border rounded-md h-[100px] xl:h-[200px] w-full" />
          </div>
          {/* item8 */}
          <div>
            <img src="/images/logo8-portfolio-technoraspberry.jpeg" alt="" className="border rounded-md h-[100px] xl:h-[200px] w-full" />
          </div>
          {/* item9 */}
          <div>
            <img src="/images/logo.png" alt="" className="border rounded-md h-[100px] xl:h-[200px] w-full" />
          </div>
        </div>
        {/* banner */}
        <h2 className="py-3 border-t rounded-md mt-16 text-accent text-2xl" id="banner">بنر</h2>
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-5">
          {/* item1 */}
          <div>
            <img src="/images/banner1-technoraspberry.jpeg" alt="" className="border rounded-md h-[180px] xl:h-[300px] w-full" />
          </div>
          {/* item2 */}
          <div>
            <img src="/images/banner2-technoraspberry.jpeg" alt="" className="border rounded-md h-[180px] xl:h-[300px] w-full" />
          </div>
        </div>
        {/* visit-card */}
        <h2 className="py-3 border-t rounded-md mt-16 text-accent text-2xl" id="visit-card">کارت ویزیت</h2>
        <div className="grid xl:grid-cols-2 grid-cols-1 xl:gap-5 gap-1">
          {/* item1 */}
          <Button
                variant="outline"
                className="uppercase flex items-center gap-2"
              >
                <a href="/files/visit-card1-technoraspberry.pdf" target="_blank"><span>مشاهده کارت ویزیت شماره 1</span></a>
              </Button>
          {/* item2 */}
          <Button
                variant="outline"
                className="uppercase flex items-center gap-2"
              >
                <a href="/files/visit-card2-technoraspberry.pdf" target="_blank"><span>مشاهده کارت ویزیت شماره 2</span></a>
              </Button>
        </div>
        {/* poster */}
        <h2 className="py-3 border-t rounded-md mt-16 text-accent text-2xl" id="poster">پوستر</h2>
        <div className="grid xl:grid-cols-5 grid-cols-2 xl:gap-5 gap-1">
          {/* item1 */}
          <div className="border rounded-md">
            <a href="/images/poster1-technoraspberry.jpeg" target="_blank">
            <img src="/images/poster1-technoraspberry.jpeg" alt="" className="rounded-md xl:h-[300px] h-[250px] w-full" />
            </a>
          </div>
          {/* item2 */}
          <div className="border rounded-md">
            <a href="/images/poster2-technoraspberry.jpeg" target="_blank">
            <img src="/images/poster2-technoraspberry.jpeg" alt="" className="rounded-md xl:h-[300px] h-[250px] w-full" />
            </a>
          </div>
          {/* item3 */}
          <div className="border rounded-md">
            <a href="/images/poster3-technoraspberry.jpeg" target="_blank">
            <img src="/images/poster3-technoraspberry.jpeg" alt="" className="rounded-md xl:h-[300px] h-[250px] w-full" />
            </a>
          </div>
          {/* item4 */}
          <div className="border rounded-md">
            <a href="/images/poster4-technoraspberry.jpeg" target="_blank">
            <img src="/images/poster4-technoraspberry.jpeg" alt="" className="rounded-md xl:h-[300px] h-[250px] w-full" />
            </a>
          </div>
          {/* item5 */}
          <div className="border rounded-md">
            <a href="/images/poster5-technoraspberry.jpeg" target="_blank">
            <img src="/images/poster5-technoraspberry.jpeg" alt="" className="rounded-md xl:h-[300px] h-[250px] w-full" />
            </a>
          </div>
          {/* item6 */}
          <div className="border rounded-md">
            <a href="/images/poster6-technoraspberry.jpeg" target="_blank">
            <img src="/images/poster6-technoraspberry.jpeg" alt="" className="rounded-md xl:h-[300px] h-[250px] w-full" />
            </a>
          </div>
          {/* item7 */}
          <div className="border rounded-md">
            <a href="/images/poster7-technoraspberry.jpeg" target="_blank">
            <img src="/images/poster7-technoraspberry.jpeg" alt="" className="rounded-md xl:h-[300px] h-[250px] w-full" />
            </a>
          </div>
          {/* item8 */}
          <div className="border rounded-md">
            <a href="/images/poster8-technoraspberry.jpeg" target="_blank">
            <img src="/images/poster8-technoraspberry.jpeg" alt="" className="rounded-md xl:h-[300px] h-[250px] w-full" />
            </a>
          </div>
          {/* item9 */}
          <div className="border rounded-md">
            <a href="/images/poster9-technoraspberry.jpeg" target="_blank">
            <img src="/images/poster9-technoraspberry.jpeg" alt="" className="rounded-md xl:h-[300px] h-[250px] w-full" />
            </a>
          </div>
          {/* item10 */}
          <div className="border rounded-md">
            <a href="/images/poster10-technoraspberry.jpeg" target="_blank">
            <img src="/images/poster10-technoraspberry.jpeg" alt="" className="rounded-md xl:h-[300px] h-[250px] w-full" />
            </a>
          </div>
        </div>
        {/* ad video */}
        <h2 className="py-3 border-t rounded-md mt-16 text-accent text-2xl" id="ad">ویدئوهای تبلیغاتی</h2>
        <div className="grid xl:grid-cols-4 grid-cols-2 xl:gap-5 gap-1">
          {/* item1 */}
            <video className="xl:w-[270px] xl:h-[490px] w-[163px] h-[296px] rounded-md" controls>
              <source src="/videos/graphics-ads1-technoraspberry.MP4" type="video/mp4" />
            </video>
          {/* item2 */}
            <video className="xl:w-[270px] xl:h-[490px] w-[163px] h-[296px] rounded-md" controls>
              <source src="/videos/graphics-ads2-technoraspberry.MP4" type="video/mp4" />
            </video>
          {/* item3 */}
            <video className="xl:w-[270px] xl:h-[490px] w-[163px] h-[296px] rounded-md" controls>
              <source src="/videos/graphics-ads3-technoraspberry.MP4" type="video/mp4" />
            </video>
          {/* item4 */}
            <video className="xl:w-[270px] xl:h-[490px] w-[163px] h-[296px] rounded-md" controls>
              <source src="/videos/graphics-ads4-technoraspberry.MP4" type="video/mp4" />
            </video>
        </div>
        {/* catalog */}
        <h2 className="py-3 border-t rounded-md mt-16 text-accent text-2xl" id="catalog">کاتالوگ</h2>
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-5">
          {/* item1 */}
              <Button
                variant="outline"
                className="uppercase flex items-center gap-2"
              >
                <a href="/files/catalog1-technoraspberry.pdf" target="_blank"><span>مشاهده کاتالوگ شماره 1</span></a>
              </Button>
          {/* item2 */}
          <Button
                variant="outline"
                className="uppercase flex items-center gap-2"
              >
                <a href="/files/catalog2-technoraspberry.pdf" target="_blank"><span>مشاهده کاتالوگ شماره 2</span></a>
              </Button>
        </div>
        {/* magazine */}
        <h2 className="py-3 border-t rounded-md mt-16 text-accent text-2xl" id="magazine">مجله</h2>
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-5">
          {/* item1 */}
              <Button
                variant="outline"
                className="uppercase flex items-center gap-2"
              >
                <a href="/files/magazine1-technoraspberry.pdf" target="_blank"><span>مشاهده مجله</span></a>
              </Button>
        </div>
        {/* features */}
        <p className="text-4xl mt-20 font-bold">فقط گرافیک؟</p>
        <div className="border rounded-md p-3 text-justify">
          <p className="text-justify xl:text-2xl text-xl xl:leading-[3rem] leading-[2.5rem]">
            علاوه بر گرافیک، به ۲ خدمت دیگر تکنورزبری، یعنی سخت‌افزار و نرم‌افزار هم سری بزنید، مطمئن باشید پشیمان نمی‌شوید! 
            پورتفولیوی ما همواره درحال بروزرسانی و آپدیت شدن هست، به محض اینکه پروژه‌ای به اتمام رسانده می‌شود، با کسب رضایت از کارفرما، نمونه کارها را در وب‌سایت و دیگر شبکه‌های اجتماعی خود قرار می‌دهیم.
          </p>
        </div>
      </div>
    </motion.section>
};

export default graphicsPortfolio;
