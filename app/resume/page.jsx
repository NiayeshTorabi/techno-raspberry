"use client";

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

// about data
const about = {
  title: "IOT",
  description:
    "مطابق با بروزترین تکنولوژي‌های دنیا، استفاده از قدرت اینترنت اشیا، سخت‌افزاری قدرتمند، همگی با یک هدف کلی و جامع افزایش امنیت خانه‌های شما",
  info: [
    {
      fieldName: "IOT",
      fieldValue: "تکنولوژي",
    },
    {
      fieldName: "IOT",
      fieldValue: "تکنولوژي",
    },
    {
      fieldName: "IOT",
      fieldValue: "تکنولوژي",
    },
    {
      fieldName: "IOT",
      fieldValue: "تکنولوژي",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "طراحی سایت",
  description:
    "تمامی نمونه‌کار ها، قالب‌های اختصاصی هستند که با توجه به تصوری که کارفرما از رویکرد کلی سایت خود داشته، چندین سایت را به عنوان مرجع قرار داده و با تلفیق آنها جهت جلوگیری از تقلید، وب‌سایتشان را طراحی کرده‌ایم",
  items: [
    {
      company: "وانیلابری",
      position: "فروشگاه لوازم قنادی",
      duration: "سئو +",
    },
    {
      company: "رزبری‌هوم",
      position: "فروشگاه لوازم خانگی",
      duration: "(سئو در دست انجام)",
    },
    {
      company: "ماریان",
      position: "فروشگاه لوازم آرایشی و بهداشتی",
      duration: "سئو +",
    },
    {
      company: "کسری مگنت",
      position: "فروشگاه مگنت",
      duration: "طراحی",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "گرافیک",
  description:
    "طرح ایده و طراحی لوگو، ارائه چندین طرح به کارفرما جهت مشخص‌تر شدن سلیقه وی هم‌راستا با تمرکز بر حوزه کسب و کار",
  items: [
    {
      institution: "وانیلابری",
      degree: "مینیمال",
      duration: "لوگو",
    },
    {
      institution: "رزبری‌هوم",
      degree: "جزئیات+",
      duration: "لوگو",
    },
    {
      institution: "پروژه",
      degree: "متن",
      duration: "موشن",
    },
    {
      institution: "پروژه",
      degree: "جشنواره",
      duration: "پوستر",
    },
  ],
};

// skills data
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

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col flex-col-reverse xl:flex-row gap-[60px]"
        >
          

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-right">
                <h3 className="text-4xl font-bold xl:text-right">
                  {experience.title}
                </h3>
                <p className="text-black/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return <li
                          key={index}
                          className="bg-[#fafafa] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-end gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-right">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <p className="text-black/60">{item.company}</p>
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          </div>
                        </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-right">
                <h3 className="text-4xl font-bold xl:text-right">
                  {education.title}
                </h3>
                <p className="text-black/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return <li
                          key={index}
                          className="bg-[#fafafa] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-end gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-right">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <p className="text-black/60">{item.institution}</p>
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          </div>
                        </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-right">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="text-black/60 max-auto xl:mx-0">
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
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-right"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="text-black/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return <li
                        key={index}
                        className="flex items-center justify-center xl:justify-end gap-4"
                      >
                        <span className="text-black/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
          {/* tabs */}
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">سایت‌های طراحی شده</TabsTrigger>
            <TabsTrigger value="education">
              پروژه‌های گرافیکی انجام شده
            </TabsTrigger>
            <TabsTrigger value="about">
              خانه‌هایی که هوشمندشان کردیم
            </TabsTrigger>
            <TabsTrigger value="skills">تکنولوژی‌ها</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </motion.div>
};

export default Resume;
