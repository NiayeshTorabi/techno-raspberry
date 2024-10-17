"use client";

import { BsArrowDownLeft } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "طراحی سایت",
    description: "قالب اختصاصی تلفیقی از سایت‌های پیشنهادی شما",
    href: "",
  },
  {
    num: "02",
    title: "گرافیک",
    description: "طراحی لوگو، امور گرافیکی به صورت تخصصی",
    href: "",
  },
  {
    num: "03",
    title: "IOT",
    description: "هوشمندسازی خانه‌های شما با بروزترین تکنولوژي",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return <section className="min-h-[80vh] justify-center py-12 xl:py-0 content-center">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="xl:flex gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center py-5">
                  <div className="text-5xl font-extrabold text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-black group-hover:bg-accent transition-all  duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownLeft className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-black group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-black/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-black/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
};

export default Services;