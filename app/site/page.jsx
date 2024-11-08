"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Site = () => {
  return <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 flex flex-col gap-5 container mx-auto"
    >
      {/* title */}
      <div className="border rounded-md px-3 py-1 items-center mx-3 mb-3">
        <div className="font-bold text-base text-accent">
        خدمات / سایت
        </div>
        </div>
        {/* data */}
      <div className="relative px-0">
      <img className="h-[300px] w-full rounded-xl object-cover shadow-xl shadow-black/40" src="/images/service1.png" alt="" />
      <Button
                variant="outline"
                className="uppercase flex items-center gap-2 absolute top-[5%] xl:right-[1%] right-[3%] text-primary border border-primary hover:bg-primary hover:text-accent"
              >
                <a href="/resume/site"><span>نمونه کارها</span></a>
              </Button>
      </div>
      <div className="container mx-auto p-8 text-justify bg-accent/10 rounded-md">
        <h1 className="text-2xl leading-[2.5rem] xl:leading-[3rem]">طراحی وب‌سایت حرفه‌ای؛ راهی برای موفقیت آنلاین کسب‌وکار شما</h1>
      </div>
      {/* without-box */}
      <div className="container mx-auto text-justify">
        <p className="text-justify text-xl leading-[2rem] xl:leading-[3rem]">در دنیای دیجیتال امروز، داشتن یک وب‌سایت حرفه‌ای و جذاب، امری ضروری برای موفقیت هر کسب‌وکاری است. وب‌سایت شما، ویترین آنلاین کسب‌وکار شماست و اولین چیزی است که مشتریان شما با آن مواجه می‌شوند.</p>
      </div>
      {/* other */}
      <div className="container mx-auto xl:p-8 py-0 text-justify bg-[#00FF9C]/20 rounded-md">
        <div className="flex xl:flex-row flex-col xl:gap-8 gap-0">
          {/* img */}
          <img src="/images/service-site-technoraspberry.png" alt="" />
          {/* text */}
          <div>
          <h2 className="text-2xl text-center leading-[3rem] xl:mt-0 mt-[-3rem]">یک وب‌سایت خوب می‌تواند به شما کمک کند تا<span>:</span></h2>
        <br />
        <h3 className="font-bold">برند خود را تقویت کنید<span>:</span></h3><p>با طراحی یک وب‌سایت با هویت بصری قوی، می‌توانید برند خود را در ذهن مخاطبان ماندگار کنید.</p>
        <br />
        <h3 className="font-bold">مشتریان جدید جذب کنید<span>:</span></h3><p>یک وب‌سایت جذاب و کاربرپسند، می‌تواند مشتریان بالقوه را به مشتریان بالفعل تبدیل کند.</p>
        <br />
        <h3 className="font-bold">فروش خود را افزایش دهید<span>:</span></h3><p>با ارائه محصولات و خدمات خود به صورت آنلاین، می‌توانید به راحتی فروش خود را افزایش دهید.</p>
        <br />
        <h3 className="font-bold">با مشتریان خود ارتباط برقرار کنید<span>:</span></h3><p>یک وب‌سایت تعاملی به شما امکان می‌دهد تا با مشتریان خود ارتباط برقرار کرده و بازخورد آن‌ها را دریافت کنید.</p>
          </div>
        </div>
      </div>
      {/* icons */}
      <div className="grid grid-cols-4 gap-3 xl:gap-0 xl:grid-cols-8 align-items place-items-center my-10">
        <div><img src="/images/technoraspberry-icons1.png" alt="" /></div>
        <div><img src="/images/technoraspberry-icons2.png" alt="" /></div>
        <div><img src="/images/technoraspberry-icons3.png" alt="" /></div>
        <div><img src="/images/technoraspberry-icons4.png" alt="" /></div>
        <div><img src="/images/technoraspberry-icons5.png" alt="" /></div>
        <div><img src="/images/technoraspberry-icons6.png" alt="" /></div>
        <div><img src="/images/technoraspberry-icons7.png" alt="" /></div>
        <div><img src="/images/technoraspberry-icons8.png" alt="" /></div>
      </div>
      {/* other */}
      <div className="container mx-auto xl:p-8 py-0 text-justify">
        <div className="flex xl:flex-row flex-col xl:gap-3 gap-8">
          {/* text */}
          <div>
          <h2 className="text-2xl leading-[2.5rem] xl:leading-[3rem] text-accent text-center xl:text-justify">چرا تکنورزبری را برای طراحی وب‌سایت خود انتخاب کنید؟</h2>
          <img src="/images/services-site-technoraspberry.png" alt="" className="xl:mt-0 mt-8 mr-5" />
          </div>
        {/* img */}
        <div className="border rounded-md mt-0 xl:mt-10 p-3">
        <h3 className="font-bold">تیم حرفه‌ای و خلاق<span>:</span></h3><p>تیم طراحی ما با سال‌ها تجربه و دانش فنی، وب‌سایت‌هایی را طراحی می‌کند که هم زیبا هستند و هم کارآمد.</p>
        <h3 className="font-bold">توجه به جزئیات<span>:</span></h3><p>ما به کوچک‌ترین جزئیات طراحی وب‌سایت اهمیت می‌دهیم تا بهترین تجربه کاربری را برای بازدیدکنندگان شما فراهم کنیم.</p>
        <h3 className="font-bold">تکنولوژی‌های روز دنیا<span>:</span></h3><p>ما از آخرین تکنولوژی‌های طراحی وب استفاده می‌کنیم تا وب‌سایت شما همواره به روز و مدرن باشد.</p>
        <h3 className="font-bold">بهینه‌سازی برای موتورهای جستجو (SEO)<span>:</span></h3><p>ما وب‌سایت شما را به گونه‌ای طراحی می‌کنیم که در نتایج جستجوی گوگل در رتبه‌های برتر قرار گیرد.</p>
        <h3 className="font-bold">طراحی واکنش‌گرا<span>:</span></h3><p>وب‌سایت‌های طراحی شده توسط ما در تمام دستگاه‌ها (کامپیوتر، تبلت، موبایل) به خوبی نمایش داده می‌شوند.</p>
        <h3 className="font-bold">طراحی واکنش‌گرا<span>:</span></h3><p>پشتیبانی پس از فروش: ما حتی پس از تحویل پروژه نیز در کنار شما هستیم و به شما پشتیبانی ارائه می‌دهیم.</p>
        </div>
        </div>
      </div>
      {/* other */}
      <div className="container mx-auto p-8 text-justify bg-black/10 rounded-md">
      <h2 className="text-2xl mb-5 gap leading-[2.5rem] xl:leading-[3rem] text-accent text-center xl:text-justify">خدمات طراحی وب ما شامل موارد زیر می‌شود</h2>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
      <div><h3 className="font-bold">طراحی وب‌سایت‌های اختصاصی<span>:</span></h3><p>طراحی وب‌سایت‌های سفارشی‌سازی شده بر اساس نیازهای خاص کسب‌وکار شما.</p></div>
        <div><h3 className="font-bold">طراحی فروشگاه آنلاین<span>:</span></h3><p>ایجاد فروشگاه‌های آنلاین حرفه‌ای و کارآمد برای فروش محصولات و خدمات شما.</p></div>
        <div><h3 className="font-bold">طراحی وب‌سایت‌های چندزبانه<span>:</span></h3><p>طراحی وب‌سایت‌هایی که به چندین زبان قابل دسترسی باشند.</p></div>
        <div><h3 className="font-bold">بهینه‌سازی وب‌سایت برای موتورهای جستجو (SEO)<span>:</span></h3><p>بهبود رتبه وب‌سایت شما در نتایج جستجوی گوگل.</p></div>
        <div><h3 className="font-bold">طراحی رابط کاربری (UI) و تجربه کاربری (UX)<span>:</span></h3><p>ایجاد یک تجربه کاربری لذت‌بخش برای بازدیدکنندگان وب‌سایت شما.</p></div>
      </div>
      </div>
      <img src="/images/Roadmap-technoraspberry-webdesign.png" alt="" />
      <div className="container mx-auto p-8 text-justify bg-[#FEEC37]/20 rounded-md">
      <h2 className="text-2xl mb-5 gap leading-[2.5rem] xl:leading-[3rem] text-accent text-center xl:text-justify">مراحل طراحی وب‌سایت</h2>
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-3">
        <div>
      <h3 className="font-bold">تحلیل نیازها<span>:</span></h3><p>در این مرحله، ما نیازها و اهداف شما را به طور کامل بررسی می‌کنیم.</p>
        </div>
        <div>
        <h3 className="font-bold">طراحی طرح اولیه<span>:</span></h3><p>پس از تحلیل نیازها، طرح اولیه وب‌سایت را برای شما طراحی می‌کنیم.</p>
        </div>
        <div>
        <h3 className="font-bold">توسعه وب‌سایت<span>:</span></h3><p>در این مرحله، وب‌سایت شما با استفاده از آخرین تکنولوژی‌ها ساخته می‌شود.</p>
        </div>
        <div>
        <h3 className="font-bold">آزمایش و رفع اشکال<span>:</span></h3><p>قبل از تحویل، وب‌سایت شما به طور کامل آزمایش می‌شود تا از عملکرد صحیح آن اطمینان حاصل شود.</p>
        </div>
        <div>
        <h3 className="font-bold">تحویل و پشتیبانی<span>:</span></h3><p>پس از تحویل، ما به شما پشتیبانی ارائه می‌دهیم تا هرگونه مشکلی را برطرف کنیم.</p>
        </div>
      </div>
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

export default Site;
