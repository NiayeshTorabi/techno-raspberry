"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaInstagram } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "شماره‌تلفن",
    description: "۰۹۱۲۰۳۸۳۹۲۹",
  },
  {
    icon: <FaEnvelope />,
    title: "ایمیل",
    description: "info@technoraspberry.ir",
  },
  {
    icon: <FaInstagram />,
    title: "اینستاگرام",
    description: "@",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  return <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-3"
    >
      <div className="container mx-auto flex flex-col gap-8">
         {/* title */}
         <div className="border rounded-md px-3 py-1 items-center">
        <div className="font-bold text-base text-accent">
        ارتباط با ما
        </div>
        </div>
        {/* data */}
        {/* <img className="h-[300px] xl:h-[375px] w-full object-contain" src="/images/contact-technoraspberry.jpg" alt="" /> */}
        <div className="flex xl:flex-row flex-col-reverse justify-between items-center">
          <div className="text-center"><p className="font-bold text-xl leading-[2rem] mb-5 text-right">پروژه خود را به ما بسپارید!</p><p className="text-justify text-xl leading-[2rem] xl:leading-[3rem] px-3 xl:ml-5 ml-0">در این صفحه با استفاده از فرم زیر می‌توانید پروژه خود را در حوزه‌های سایت، طراحی گرافیک و یا سخت‌افزار به ما بسپارید؛ همچنین اگر برای اولین بار است که با ما آشنا شده‌اید و قصد کسب اطلاعات بیشتری را قبل از ثبت پروژه دارید، می‌توانید از طریق صفحه خدمات، خدمات تکنورزبری را به صورت کامل و جامع مشاهده کرده و همچنین از طریق صفحه‌ی پورتفولیو، نسبت به مشاهده نمونه‌کارهای ما در تمامی حوزه‌ها اقدام فرمایید، کارشناسان ما نیز در صفحه ارتباط با ما، همواره آماده ارائه پشتیبانی به شما هستند.</p></div>
        <img src="/images/project-technoraspberry.png" className="w-[300px] xl:h-[375px] w-full object-contain mb-10 mix-blend-multiply" />
        </div>
        {/* box */}
        <div className="hey3">
        <p className="text-xl leading-[3rem] font-bold">روی پشتیبانی تکنورزبری حساب کنید!</p>
        <div className="mb-10 text-justify text-xl leading-[2rem]">
          <p>پشتیبانان تکنورزبری در هر ساعتی از شبانه روز به صورت ۲۴/۷ آماده خدمت رسانی به شما هستند؛ در زیر می‌توانید بخش‌های راه‌های ارتباطی با ما را مشاهده فرمایید که بسته به نیاز خود می‌توانید یکی از آنها را انتخاب کرده و ارتباط خود را با تکنورزبری برقرار کنید؛ همچنین در صورت تمایل می‌توانید از طریق فرمی که در پایین همین صفحه قرار داده شده است سوال خود را ثبت فرمایید تا نسبت به پاسخگویی آن سریعاً اقدام کنیم.</p>
        </div>
        </div>
        {/* info */}
        <div className="flex flex-col items-center p-3 mb-8 bg-accent/10 rounded-md s lg:rounded-full">
            <ul className="flex flex-col lg:flex-row gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#fafafa] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-black/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        <div className="flex flex-col  gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-3 p-3 bg-[#fafafa] rounded-xl">
            <img className="h-[300px] xl:h-[275px] w-full object-contain mix-blend-multiply" src="/images/support-technoraspberry.jpg" alt="" />
              <h3 className="text-3xl text-accent leading-[3rem] text-justify">پشتیبانان ما مشتاق پاسخ به سوالاتتان هستند</h3>
              <p className="text-black/60 text-justify text-xl leading-[2.3rem]">
                پس دریغ نکنید! 
                همین حالا آن را در فرم زیر مطرح کنید تا پشتیبانان ما به سرعت به آن پاسخ دهند! (پشتیبانی تکنو رزبری ۲۴/۷ در خدمت شماست)
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="fullname" placeholder="نام و نام‌خانوادگی" />
                <Input type="phone" placeholder="شماره تلفن" />
              </div>
              {/* select */}
              <Select required>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="موضوع سوال خود را انتخاب کنید" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>موضوع سوال</SelectLabel>
                    <SelectItem value="est">طراحی سایت</SelectItem>
                    <SelectItem value="cst">گرافیک</SelectItem>
                    <SelectItem value="mst">IOT</SelectItem>
                    <SelectItem value="oth">دیگر موارد</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="پیام خود را اینجا بنویسید."
              />
              {/* btn */}
              <Button size="md" className="max-w-40">
                ارسال
              </Button>
            </form>
          </div>
          
        </div>
      </div>
    </motion.section>
};

export default Contact;
