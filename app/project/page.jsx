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
            <form className="flex flex-col gap-6 p-10 bg-[#fafafa] rounded-xl">
              <h3 className="text-3xl text-accent font-bold">آماده همکاری با شما هستیم</h3>
              <p className="text-black/60">
                فُرم زیر را با دقت تکمیل فرمایید، کارشناسان ما پس از بررسی آن، به سرعت با شما ارتباط برقرار خواهند کرد.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="fullname" placeholder="نام و نام‌خانوادگی" />
                <Input type="phone" placeholder="شماره تلفن" />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="انتخاب خدمت..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>انتخاب خدمات تکنورزبری</SelectLabel>
                    <SelectItem value="est">طراحی سایت</SelectItem>
                    <SelectItem value="cst">گرافیک</SelectItem>
                    <SelectItem value="mst">IOT</SelectItem>
                    <SelectItem value="mst">مشاوره می‌خواهم.</SelectItem>
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
                ثبت
              </Button>
            </form>
        </div>
      </div>
    </motion.section>
};

export default Project;
