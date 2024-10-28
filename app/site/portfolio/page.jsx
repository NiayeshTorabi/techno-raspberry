"use client";

import { motion } from "framer-motion";

const sitePortfolio = () => {
  return <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 flex flex-col gap-5 m-3"
    >
      <div className="container mx-auto flex gap-10 flex-col">
        <img className="h-[300px] w-full rounded-xl object-cover shadow-xl shadow-black/40" src="https://www.cloudblue.com/wp-content/uploads/2024/06/what-is-the-internet-of-things-iot.png" alt="" />
        <h1 className="text-2xl">خدمات طراحی سایت تکنورزبری</h1>
        <div className="flex">
          <div>وردپرس</div>
          <div>کدنویسی</div>
        </div>
      </div>
    </motion.section>
};

export default sitePortfolio;
