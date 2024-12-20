"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const blogSite = () => {
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
          وبلاگ / بهترین زبان‌های فرانت‌اند
        </div>
        </div>
        {/* banner */}
      <div className="container mx-auto px-0">
      <img className="h-[300px] w-full rounded-xl object-cover shadow-xl shadow-black/40" src="/images/blog-website-technoraspberry.jpg" alt="" />
      </div>
      {/* data */}
      <h2 className="text-accent text-4xl text-center my-8">بهترین زبان‌های فرنت‌اند</h2>
      <p className="text-justify px-3">
      ۱۰ زبان برتر برنامه نویسی برای توسعه وب
توسعه وب چند قسمت دارد: سمت کاربر (فرانت-اند یا Front-End)، سمت سرور (بک-اند یا Back-End) و توسعه کامل در هر دو سمت (Full-stack). در اینجا بهترین زبان های برنامه نویسی را بررسی می کنیم تا بتوانید تصمیم بگیرید و برنامه نویسی در زمینه توسعه وب را شروع کنید.

زبان هایی که بررسی می کنیم، شامل:

JavaScript
HTML و CSS
TypeScript
Python
Node JS
ASP.NET
Java
Ruby
MEAN (Stack)
MERN (Stack)
بهترین زبان ها برای توسعه فرانت-اند
توسعه فرانت-اند، برنامه نویسی سمت کاربر است. در اصل شامل همه عناصر ظاهری است که در صفحه وب مشاهده می کنید. این قسمت جایی است که کاربر با پیمایش و مرور صفحات، به طور مستقیم با وب در تعامل است. اگر فرد خلاقی هستید یا به کار طراحی علاقه مندید اینجا برایتان بهتر است. خب بیایید زبان های برنامه نویسی توسعه فرانت-اند را مرور کنیم:

JavaScript
اول از همه اینکه جاوا اسکریپت (JavaScript) هیچ ربطی به جاوا ندارد. زبان های متفاوتی هستند که برای اهداف مختلفی استفاده می شوند.

چه توسعه دهنده سمت کاربر و چه توسعه دهنده سمت سرور در وب و یا حتی توسعه دهنده موبایل باشید، جاوا اسکریپت کمک زیادی خواهد کرد. این زبان با یکپارچه سازی API و تجربه کاربری سریع و تعاملی اش در سمت کاربر به شما کمک می کند تا یک وب سایت پویا و واکنشگرا بسازید. علاوه بر این جاوا اسکریپت سال ها است که بسیار محبوب بوده و این منجر به ساخت یک جامعه بزرگ و فوق العاده از توسعه دهندگان آن شده است، با ارتباط و پیوستن به این جامعه، می توانید مسائل خود را حل کنید و حتی ایده های جدید بسازید.

بر خلاف چیزی که الان فکر می کنید، جاوا اسکریپت کامل نیست و معایبی هم دارد. اما مطمئن باشید همه زبان ها حتما ضعف هایی دارند و این برای همه است. جایگزین بهتری برای این زبان پیدا نمی کنید و در حال حاضر از زیرساخت های اصلی اینترنت است. همه اینها جاوا اسکریپت را به زبانی تبدیل کرده که باید سفر هیجان انگیز خود در توسعه وب را از اینجا شروع کنید.

HTML و CSS
آشنا به نظر می رسند؟ همینطوره. چون اینها زبان های قدیمی خیلی خوبی هستند که هنوز هم در توسعه وب استفاده می شوند. دقیقا از ابتدای کار می توانید همراه با جاوا اسکریپت، HTML و CSS صفحات وب جذاب و پویایی بسازید. علاوه بر این یادگیری HTML میتونه کاملاً جالب و با لذت همراه باشد. اگر به دنبال زبان های محبوبی هستید که خلاقیت شما را تحریک کنند آن HTML و CSS است. با استفاده از HTML می توانید رابط کاربری برنامه های وب و موبایل را طراحی کنید. اگر مبتدی هستید، اینها زبان های برنامه نویسی پایه برای شروع برنامه نویسی وب می باشند.

TypeScript
تایپ اسکریپت (TypeScript) همان جاوا اسکریپت است که بزرگتر شده است. تفاوت اصلی اینه که جاوا اسکریپت نیازی به کامپایل ندارد ولی تایپ اسکریپت کامپایل می شود. متوجه نشدید؟ خب نگران نباشید. تایپ اسکریپت یک مجموعه بزرگ از جاوا اسکریپت است که به شدت در کدنویسی سخت گیر است و قبل از اجرا، تمامی کدها بررسی می شوند، در واقع یک تمیزکننده کد فراهم می کند. تایپ اسکریپت، جاوا اسکریپت را کامپایل و تبدیل می کند بنابراین تسلط روی جاوا اسکریپت برای موفقیت در تایپ اسکریپت کافی است.

تایپ اسکریپت یک زبان برنامه نویسی توسعه وب متن باز است که توسط مایکروسافت نگهداری و پشتیبانی می شود و همچنین یک زبان برنامه نویسی شی گرا می باشد. در دسترس بودن رابط و پشتیبانی از ماژول ها، تایپ اسکریپت را به یک زبان برنامه نویسی محبوب برای توسعه وب تبدیل کرده است. کدهای جاوا اسکریپت به عنوان کدهای تایپ اسکریپت هم اجرا می شوند. تصمیم گرفتیم این زبان را هم در لیست قرار دهیم و پیشنهاد می کنیم آن را به مجموعه خود اضافه کنید.

بهترین زبان های برنامه نویسی برای توسعه بک-اند
توسعه و برنامه نویسی بک-اند وب جایی است که همه کارها و عملیات ها انجام می شوند. تمرکز توسعه بک-اند روی قسمت ظاهری و زیبایی وب نیست بلکه در عوض با منطق کار و بانک اطلاعاتی ارتباط دارد. ولی با این وجود باید بدانید که سمت کاربر چگونه کار می کند حتی اگر به شناخت عمیقی از آن نیاز نباشد. چراکه توسعه سمت کاربر با بانک های اطلاعاتی سمت سرور باید با هم سازگار باشند. در اینجا بهترین زبان های برنامه نویسی سمت سروری که باید بشناسید را مرور می کنیم.

Python
در دنیای امروز پایتون (Python) زبانی است که در بین تعدد زبان های برنامه نویسی موجود بیشتر موردتوجه است. به حدی که در سال ۲۰۱۶ بیشتر از هر زبان دیگه ای مورد استفاده قرار گرفت و زبان JAVA بی رقیب و بلامنازع را در آن سال شکست داد و تا الان همچنان تسلط خودش را در دنیای برنامه نویسی حفظ کرده و ادامه داده است.

موفقیت پایتون در این زمان کوتاه، قابلیت ها و توانایی های آن را نشان می دهد. خوانایی، کارآیی و یادگیری راحت تر در موفقیت پایتون تأثیر فوق العاده ای داشته است. گرچه پایتون با برنامه های یادگیری ماشین و علوم داده سازگار است اما توسعه وب نیز سکویی برای موفقیت و پیشرفت پایتون می باشد.

توجه به عوامل فریمورک هایی مانند Django و Flask، پایتون را به یک ابزار محبوب برای بسیاری از توسعه دهندگان وب تبدیل کرده است. Django به جای روش های متداول MVC از MVT استفاده می کند. در نهایت نام های بزرگی مانندDropbox ، PayPal ، eBay و Reddit از برنامه نویسی پایتون در هسته خود استفاده می کنند.

Node JS
یادتونه گفتیم که جاوا اسکریپت همه جا وجود دارد؟ Node JS محیط یا فریمورکی است که امکان اجرای جاوا اسکریپت را در سمت سرور فراهم می کند. این زبان توسعه وب محبوب از همان موتور جاوا اسکریپت استفاده می کند، موتوری از گوگل کروم به نام V8 با کتابخانه های گسترده.

به بیان ساده تر Node JS به کاربران کمک می کند تا کد جاوا اسکریپت را در خارج از مرورگر وب AKA سرور اجرا کنند. بنابراین اگر در جاوا اسکریپت حرفه ای باشید پس یادگیری Node JS چیز جدیدی نیست. زنده باد جاوا اسکریپت!

ASP.NET
ASP.NET زبان برنامه نویسی سمت سرور و تنها زبان محبوب توسعه وب در این لیست است که رایگان نیست. ASP.NET در اصل فریمورکی است که به شما در ساخت یک برنامه وب کمک می کند. یکی از بهترین زبان های برنامه نویسی توسعه وب است و قابلیت های مختلفی مانند منطق سمت سرور، اعتبار سنجی، تعامل با بانک اطلاعاتی، جلسه و مدیریت امنیتی را ارائه می دهد. کد C#، این زبان محبوب را کاراتر و خوانایی آن را آسان تر می کند.

نکته قابل توجه برای تسلط به ASP.NET این است که توسعه دهندگان آن باید از فیلدهای مختلف از جمله C# ، SQL، CSS، JS، HTML شناخت داشته باشند. ممکنه بسیار سخت به نظر برسد اما این زبان توسط مایکروسافت همراه با کتابخانه های فوق العاده توسعه یافته است و ویژوال استودیو IDE آن را پشتیبانی می کند که با استفاده از آن می توانید برنامه های وب .NET حرفه ای بسازید.

Java
“یک بار بنویس، همه جا اجرا کن.” این شعار معروفی است که هر برنامه نویس جاوا آن را می شناسد. در برنامه های سطح بالا، سایت های پر ترافیک، برنامه های اندروید و خیلی قسمت های دیگه از جاوا استفاده می شود. برنامه نویسی جاوا از پشتیبانی فوق العاده ای برای توسعه سمت سرور برنامه های وب برخوردار است. علاوه بر این ماشین مجازی جاوا به عنوان یک محیط اجرا به عنوان نگهدارنده وب عمل می کند و این ماشین در انتهای سرور برنامه وب قرار دارد.

دقیقا مانند اپلت ها، فریمورک های وب جاوا نیز براساس چند servlet می باشند. به همراه منابع صفحه هایJavaServer ، servletها و کلاس ها می توانید یک برنامه کامل وب جاوا را توسعه دهید. برنامه های کاربردی وب در جاوا شامل Struts ، Spring MVC و GWT می باشند.

Ruby
Ruby on Rails یک فریمورک توسعه برنامه های وب بر اساس زبان برنامه نویسی شی گرای روبی (Ruby) می باشد، مشابه Python Django. روبی به عنوان یک زبان برنامه نویسی توسعه وب نسبتاً جدید، چیزهای زیادی ارائه می دهد.

روبی بین افراد مبتدی بسیارمحبوب است و این مهمترین مزیت این زبان است. حجم کدنویسی آن به میزان قابل توجهی کمتر است و خوانایی آن هم در همه جای کد حفظ می شود. علاوه بر این برای یادگیری یک زبان نیاز به یک جامعه پویا و مشتاق دارید که زبان محبوب روبی در اینجا می درخشد.

وب سایت هایی مانند GitHub، Hulu، Twitch، Basecamp، SoundCloud همه از Ruby on Rails استفاده می کنند. بنابراین می توانید روبی را به عنوان یک زبان برنامه نویسی برای ایجاد یک حرفه در توسعه وب یاد بگیرید.
    </p></motion.section>
};

export default blogSite;
