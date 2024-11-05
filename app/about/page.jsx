"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsShield } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaCpanel,
} from "react-icons/fa";
import { DiPhotoshop } from "react-icons/di";
import { SiCanva } from "react-icons/si";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const skills = {
  title: "تکنولوژی‌های استفاده شده",
  description:
    "از چه فناوری‌هایی برای خدماتی که ارائه می‌دهیم استفاده می‌کنیم؟",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "اچ‌تی‌ام‌ال",
    },
    {
      icon: <FaCss3 />,
      name: "سی‌اس‌اس",
    },
    {
      icon: <FaJs />,
      name: "جاوا اسکریپت",
    },
    {
      icon: <FaReact />,
      name: "ریعکت",
    },
    {
      icon: <FaCpanel />,
      name: "سی‌پنل",
    },
    {
      icon: <FaWordpress />,
      name: "وردپرس",
    },
    {
      icon: <DiPhotoshop />,
      name: "فوتوشاپ",
    },
    {
      icon: <SiCanva />,
      name: "کنوا",
    },
  ],
};

const projects = [
  {
    category: "تکنورزبری؛ خدماتی نوین",
    title: "project 1",
    description:
      "مجموعه‌ای متشکل از افراد متخصص و باتجربه در زمینه‌های تکنولوژی روز دنیا، در کنار یکدیگر خدماتی نوین اعم از طراحی‌سایت جهت رشد کسب و کار شما، طراحی‌گرافیکی  (طراحی لوگو و...) و همچنین پروژه‌های سخت‌افزاری جهت تلفیق هرچه بیشتر زندگی شما با تکنولوژی که مساوی‌ست با راحتی شما را ارائه می‌دهد.",
    stack: [{ name: "طراحی‌سایت" }, { name: "طراحی و گرافیک" }, { name: "سخت‌‌افزار" }],
    image: "/images/about1.png",
    live: "/project",
    github: "/contact",
  },
  {
    category: "هدفی فراتر",
    title: "project 2",
    description:
      "تکنورزبری رویکردی آینده‌نگرانه‌تر دارد...",
    stack: [{ name: "ارتقای تکنولوژي سطح کشور" }],
    image: "/images/about2.png",
    live: "/project",
    github: "/contact",
  },
  {
    category: "پشتیبانی دائمی",
    title: "project 3",
    description:
      "قبل از تهیه، در حین و همچنین بعد از ارائه خدمات پشتیبانی داریم!",
    stack: [{ name: "۲۴/۷" }, { name: "تخصصی" }],
    image: "/images/about3.png",
    live: "/project",
    github: "/contact",
  },
];

const About = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center pt-5 xl:px-0"
    >
      <div className="container mx-auto">
        {/* title */}
        <div className="border rounded-md px-3 py-1 items-center mx-3 mb-3">
        <div className="font-bold text-base text-accent">
        درباره ما
        </div>
        </div>
        {/* data */}
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* project category */}
              <h2 className="xl:text-3xl text-2xl group-hover:text-accent transition-all duration-500 capitalize mt-10">
                {project.category}
              </h2>
              {/* project description */}
              <p className="text-black/60 text-justify text-xl leading-[2rem]">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && "،"}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-black/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-black/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-black text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>ثبت پروژه</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-black/5 flex justify-center items-center group">
                        <BsShield className="text-black text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>پشتیبانی</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-520px]"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[350px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-white/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover rounded-xl border border-black"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-1 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none p-1"
                btnStyles="border border-white bg-accent hover:bg-accent-hover text-primary text-[22px] w-[45px] h-[45px] flex justify-center items-center transition-all rounded-full"
              />
            </Swiper>
          </div>
        </div>
      </div>
      
              <div className="flex flex-col gap-[30px] xl:mt-[24vh] mt-[15vh] container mx-auto">
                <div className="flex flex-col gap-[30px] text-center xl:text-right">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="text-black/60 max-auto xl:mx-0 text-xl leading-[2.3rem]">
                    {skills.description}
                  </p>
                </div>
                <ul
                  dir="rtl"
                  className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 xl:gap-[30px]"
                >
                  {skills.skillList.map((skill, index) => {
                    return <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#fafafa] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                  })}
                </ul>
              </div>

            <div className="c1 border-y py-5 pb-16">
              <div className="containerr">
              <h2 className="bg-gradient-to-r bg-clip-text text-transparent 
            from-accent to-[#fff]
            animate-text">تیم ما</h2>
              <div className="box xl:w-[200px] xl:h-[200px] w-[180px] h-[180px]" data-color="clr1">
                  <div className="imgBx">
                    <img src="https://citygol.com/wp-content/uploads/2023/06/Purple-theme-birthday-flower-box-1.jpg" alt=""/>
                  </div>
                  <div className="glass">
                    <h3>نیایش ترابی<br /><span>بنیانگزار و مدیریت تکنورزبری</span></h3>
                    <ul>
                      <a href="#">لینک</a>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="containerr gap-8 grid-cols-2 sm:grid-cols-3 justify-items-center">
                <div className="box xl:w-[200px] xl:h-[200px] w-[180px] h-[180px]" data-color="clr2">
                  <div className="imgBx">
                    <img src="https://static01.nyt.com/images/2020/10/29/style/28MOON-01/oakImage-1603985177355-superJumbo.jpg" alt=""/>
                  </div>
                  <div className="glass">
                    <h3>نام و نام‌خانوادگی<br /><span>مدیر فروش</span></h3>
                    <ul>
                      <a href="#">لینک</a>
                    </ul>
                  </div>
                </div>
                <div className="box xl:w-[200px] xl:h-[200px] w-[180px] h-[180px]" data-color="clr2">
                  <div className="imgBx">
                    <img src="https://static01.nyt.com/images/2020/10/29/style/28MOON-01/oakImage-1603985177355-superJumbo.jpg" alt=""/>
                  </div>
                  <div className="glass">
                    <h3>نام و نام‌خانوادگی<br /><span>مدیر دیجیتال مارکتینگ</span></h3>
                    <ul>
                      <a href="#">لینک</a>
                    </ul>
                  </div>
                </div>
                <div className="box xl:w-[200px] xl:h-[200px] w-[180px] h-[180px]" data-color="clr2">
                  <div className="imgBx">
                    <img src="https://static01.nyt.com/images/2020/10/29/style/28MOON-01/oakImage-1603985177355-superJumbo.jpg" alt=""/>
                  </div>
                  <div className="glass">
                    <h3>نام و نام‌خانوادگی<br /><span>مدیر فنی</span></h3>
                    <ul>
                      <a href="#">لینک</a>
                    </ul>
                  </div>
                </div>
                <div className="box xl:w-[200px] xl:h-[200px] w-[180px] h-[180px]" data-color="clr2">
                  <div className="imgBx">
                    <img src="https://static01.nyt.com/images/2020/10/29/style/28MOON-01/oakImage-1603985177355-superJumbo.jpg" alt=""/>
                  </div>
                  <div className="glass">
                    <h3>نام و نام‌خانوادگی<br /><span>مدیر روابط عمومی</span></h3>
                    <ul>
                      <a href="#">لینک</a>
                    </ul>
                  </div>
                </div>
                <div className="box xl:w-[200px] xl:h-[200px] w-[180px] h-[180px]" data-color="clr2">
                  <div className="imgBx">
                    <img src="https://static01.nyt.com/images/2020/10/29/style/28MOON-01/oakImage-1603985177355-superJumbo.jpg" alt=""/>
                  </div>
                  <div className="glass">
                    <h3>نام و نام‌خانوادگی<br /><span>مدیر پشتیبانی</span></h3>
                    <ul>
                      <a href="#">لینک</a>
                    </ul>
                  </div>
                </div>
                <div className="box xl:w-[200px] xl:h-[200px] w-[180px] h-[180px]" data-color="clr2">
                  <div className="imgBx">
                    <img src="https://static01.nyt.com/images/2020/10/29/style/28MOON-01/oakImage-1603985177355-superJumbo.jpg" alt=""/>
                  </div>
                  <div className="glass">
                    <h3>نام و نام‌خانوادگی<br /><span>مدیر خدمات پس از فروش</span></h3>
                    <ul>
                      <a href="#">لینک</a>
                    </ul>
                  </div>
                </div>
              </div>    
            </div>
            <div className="container mx-auto my-16 mb-28">
            <form className="flex flex-col gap-6 p-5 bg-[#fafafa] rounded-xl">
              <img className="h-[300px] xl:h-[375px] w-full object-contain mix-blend-multiply" src="/images/work-with-technoraspberry.jpg" alt="" />
              <h3 className="text-4xl text-accent font-semibold">همکاری با ما</h3>
              <p className="text-black/60 text-justify text-xl leading-[2.3rem]">فُرم زیر را با دقت تکمیل فرمایید؛ کارشناسان ما پس از بررسی، با شما ارتباط برقرار خواهند کرد.              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="fullname" placeholder="نام و نام‌خانوادگی" required />
                <Input type="phone" placeholder="شماره تلفن" required />
              </div>
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="در رابطه با مهارت‌(های) خود چند بند توضیح دهید."
                required
              />
              {/* btn */}
              <Button size="md" className="max-w-40">
                ثبت درخواست
              </Button>
            </form>
            </div>
            
    </motion.section>
};

export default About;