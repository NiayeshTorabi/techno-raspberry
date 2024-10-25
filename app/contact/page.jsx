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

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "شماره‌تلفن",
    description: "۰۹۱۲۳۴۵۶۷۸۹",
  },
  {
    icon: <FaEnvelope />,
    title: "ایمیل",
    description: "test@test.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "واتس‌اپ",
    description: "۰۹۱۲۳۴۵۶۷۸۹",
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
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="mb-10 mt-8 text-justify">
          <p>پشتیبانان تکنورزبری در هر ساعتی از شبانه روز به صورت ۲۴/۷ آماده خدمت رسانی به شما هستند؛ در زیر می‌توانید بخش‌های راه‌های ارتباطی با ما را مشاهده فرمایید که بسته به نیاز خود می‌توانید یکی از آنها را انتخاب کرده و ارتباط خود را با تکنورزبری برقرار کنید.</p>
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
            <form className="flex flex-col gap-6 p-10 bg-[#fafafa] rounded-xl">
              <h3 className="text-4xl text-accent">سوالی دارید؟</h3>
              <p className="text-black/60">
                همین حالا آن را در فرم زیر مطرح کنید تا پشتیبانان ما به سرعت به آن پاسخ دهند! (پشتیبانی تکنو رزبری ۲۴/۷ در خدمت شماست)
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="fullname" placeholder="نام و نام‌خانوادگی" />
                <Input type="phone" placeholder="شماره تلفن" />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="موضوع سوال خود را انتخاب کنید" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>موضوع سوال</SelectLabel>
                    <SelectItem value="est">طراحی سایت</SelectItem>
                    <SelectItem value="cst">گرافیک</SelectItem>
                    <SelectItem value="mst">IOT</SelectItem>
                    <SelectItem value="mst">دیگر موارد</SelectItem>
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
