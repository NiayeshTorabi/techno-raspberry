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

import { motion } from "framer-motion";

const Project = () => {
  return <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-[30px]">
          {/* form */}
          {/* title */}
          <div className="border rounded-md px-3 py-1 items-center mx-3">
        <div className="font-bold text-base text-accent">
          ثبت پروژه
        </div>
        </div>
        {/* data */}
        <div className="flex xl:flex-row flex-col-reverse justify-between items-center">
          <div className="text-center"><p className="font-bold text-xl leading-[2rem] mb-5 text-right">پروژه خود را به ما بسپارید!</p><p className="text-justify text-xl leading-[2rem] xl:leading-[3rem] px-3 xl:ml-5 ml-0">در ادامه با استفاده از فرم زیر می‌توانید پروژه خود را در حوزه‌های سایت، طراحی گرافیک و یا سخت‌افزار به ما بسپارید؛ همچنین اگر برای اولین بار است که با ما آشنا شده‌اید و قصد کسب اطلاعات بیشتری را قبل از ثبت پروژه دارید، می‌توانید از طریق صفحه خدمات، خدمات تکنورزبری را به صورت کامل و جامع مشاهده کرده و همچنین از طریق صفحه‌ی پورتفولیو، نسبت به مشاهده نمونه‌کارهای ما در تمامی حوزه‌ها اقدام فرمایید، کارشناسان ما نیز در صفحه ارتباط با ما، همواره آماده ارائه پشتیبانی به شما هستند.</p></div>
        <img src="/images/project-technoraspberry.png" className="w-[300px] xl:h-[375px] w-full object-contain mb-10 mix-blend-multiply" />
        </div>
        <p className="container mx-auto text-3xl text-center mt-20 font-bold text-accent xl:leading-[2rem] leading-[3rem]">فرم ثبت پروژه در ادامه قابل مشاهده است !!</p>
        {/* form */}
            <form
            className="flex flex-col gap-6 p-10 bg-[#fafafa] rounded-xl" action="https://formsubmit.co/info@technoraspberry.ir" method="POST"
            >
              <input type="hidden" name="_captcha" value="false"></input>
     <input type="hidden" name="_next" value="https://technoraspberry.vercel.app/thanks/"></input>
              <input type="hidden" name="project" value="project-form" />
              <h3 className="xl:text-2xl text-xl text-accent font-bold">با خیال راحت پروژتو به ما بسپار</h3>
              <p className="text-black/60">
                فُرم زیر را با دقت تکمیل فرمایید، کارشناسان ما پس از بررسی آن، به سرعت با شما ارتباط برقرار خواهند کرد.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="name" id="name" placeholder="نام و نام‌خانوادگی" required/>
                <Input type="phone" name="phone" id="phone" placeholder="شماره تماس (مثال: ۰۹۱۲۳۴۵۶۷۸۹)" required/>
              </div>
              {/* select */}
              <Select required>
                <SelectTrigger className="w-full">
                  <SelectValue name="select" id="select" placeholder="انتخاب خدمت..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel name="select title">انتخاب خدمات تکنورزبری</SelectLabel>
                    <SelectItem value="est">طراحی سایت</SelectItem>
                    <SelectItem value="cst">گرافیک</SelectItem>
                    <SelectItem value="mst">سخت افزار</SelectItem>
                    <SelectItem value="oth">مشاوره می‌خواهم.</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                name="message"
                id="message"
                className="h-[200px]"
                placeholder="پیام خود را اینجا بنویسید."
                required
              />
              {/* btn */}
              <Button type="submit" size="md" className="max-w-40">
                ثبت
              </Button>
            </form>
        </div>
      </div>
    </motion.section>
};

export default Project;
