"use client";

import { Button } from "@/components/ui/button";

import { motion } from "framer-motion";

const Project = () => {
  return <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 container mx-auto"
    >
      <div className="xl:h-[80vh] h-[60vh] flex flex-col justify-center xl:gap-8 gap-1 text-center">
        <img src="/images/check-technoraspberry.png" className="w-full h-[360px] object-contain" alt="" />
        <h1 className="xl:text-5xl text-2xl text-accent leading-[3rem]">فرم شما با موفقیت ارسال شد</h1>
        <p className="xl:text-3xl text-xl">کارشناسان ما به زودی با شما ارتباط خواهند گرفت</p>
        <Button
                variant="outline"
                className="uppercase flex items-center gap-2"
              >
                <a href="/"><span>برگشت به خانه</span></a>
              </Button>
      </div>
    </motion.section>
};

export default Project;
