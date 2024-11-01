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
  title: "سخت افزار",
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
      className="min-h-[80vh] mb-10"
    >
      <div className="container mx-auto text-justify mt-3">
        <h1>نمونه کارهای تکنورزبری</h1>
      <h2>تکنورزبری<sup className="text-accent">خدمتی نوین</sup></h2>
      <p>
      تکنورزبری یک مجموعه ساده نیست؛ جایی است که نوآوری با خلاقیت می‌آمیزد تا بتوانیم با ترکیب دانش فنی و خلاقیت هنری، راهکارهای نوآورانه‌ای برای کسب‌وکارهای شما ارائه دهیم. از طراحی وب‌سایت‌های زیبا و کارآمد گرفته تا خلق هویت بصری منحصربه‌فرد و حتی پروژه‌های سخت‌افزاری برای داشتن زندگی راحت‌تر، ما در کنار شما هستیم تا به اهداف تجاری‌تان دست پیدا کنید.
      </p>
      <br />
      <h2 className="mt-5">چرا تکنورزبری را انتخاب کنید؟</h2>
      <div className="container mx-auto px-0 grid xl:grid-cols-6 grid-cols-2 gap-3 place-items-center mt-8">
        {/* item1 */}
        <div className="group xl:h-60 xl:w-60 h-40 w-40 [perspective:1000px]">
          <div className="relative h-full w-full rounded-full shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0">
              <img className="h-full w-full rounded-full border-4 border-primary object-cover shadow-xl shadow-black/30" src="https://static01.nyt.com/images/2020/10/29/style/28MOON-01/oakImage-1603985177355-superJumbo.jpg" alt="" />
            </div>
            <div className="absolute inset-0 h-full w-full rounded-full bg-black/80 px-5 text-center text-primary [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <h1 className="text-2xl font-bold text-accent">ESP32</h1>
                <p>ماژول تخصصی</p>
              </div>
            </div>
          </div>
        </div>
        {/* item2 */}
        <div className="group xl:h-60 xl:w-60 h-40 w-40 [perspective:1000px]">
          <div className="relative h-full w-full rounded-full shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0">
              <img className="h-full w-full rounded-full border-4 border-primary object-cover shadow-xl shadow-black/30" src="https://static01.nyt.com/images/2020/10/29/style/28MOON-01/oakImage-1603985177355-superJumbo.jpg" alt="" />
            </div>
            <div className="absolute inset-0 h-full w-full rounded-full bg-black/80 px-5 text-center text-primary [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <h1 className="text-2xl font-bold text-accent">Security</h1>
                <p>حرف اول</p>
              </div>
            </div>
          </div>
        </div>
        {/* item3 */}
        <div className="group xl:h-60 xl:w-60 h-40 w-40 [perspective:1000px]">
          <div className="relative h-full w-full rounded-full shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0">
              <img className="h-full w-full rounded-full border-4 border-primary object-cover shadow-xl shadow-black/30" src="https://static01.nyt.com/images/2020/10/29/style/28MOON-01/oakImage-1603985177355-superJumbo.jpg" alt="" />
            </div>
            <div className="absolute inset-0 h-full w-full rounded-full bg-black/80 px-5 text-center text-primary [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <h1 className="text-2xl font-bold text-accent">HTML</h1>
                <p>ساختار عالی</p>
              </div>
            </div>
          </div>
        </div>
        {/* item4 */}
        <div className="group xl:h-60 xl:w-60 h-40 w-40 [perspective:1000px]">
          <div className="relative h-full w-full rounded-full shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0">
              <img className="h-full w-full rounded-full border-4 border-primary object-cover shadow-xl shadow-black/30" src="https://static01.nyt.com/images/2020/10/29/style/28MOON-01/oakImage-1603985177355-superJumbo.jpg" alt="" />
            </div>
            <div className="absolute inset-0 h-full w-full rounded-full bg-black/80 px-5 text-center text-primary [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <h1 className="text-2xl font-bold text-accent">CSS</h1>
                <p>دیزاین بصری</p>
              </div>
            </div>
          </div>
        </div>
        {/* item5 */}
        <div className="group xl:h-60 xl:w-60 h-40 w-40 [perspective:1000px]">
          <div className="relative h-full w-full rounded-full shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0">
              <img className="h-full w-full rounded-full border-4 border-primary object-cover shadow-xl shadow-black/30" src="https://static01.nyt.com/images/2020/10/29/style/28MOON-01/oakImage-1603985177355-superJumbo.jpg" alt="" />
            </div>
            <div className="absolute inset-0 h-full w-full rounded-full bg-black/80 px-5 text-center text-primary [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <h1 className="text-2xl font-bold text-accent">JAVA</h1>
                <p>بهترین زبان</p>
              </div>
            </div>
          </div>
        </div>
        {/* item6 */}
        <div className="group xl:h-60 xl:w-60 h-40 w-40 [perspective:1000px]">
          <div className="relative h-full w-full rounded-full shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0">
              <img className="h-full w-full rounded-full border-4 border-primary object-cover shadow-xl shadow-black/30" src="https://static01.nyt.com/images/2020/10/29/style/28MOON-01/oakImage-1603985177355-superJumbo.jpg" alt="" />
            </div>
            <div className="absolute inset-0 h-full w-full rounded-full bg-black/80 px-5 text-center text-primary [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <h1 className="text-2xl font-bold text-accent">Number 1</h1>
                <p>درجه‌يک بازار</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col flex-col-reverse xl:flex-row gap-[60px]"
        > */}
          

          {/* content */}
          {/* <div className="min-h-[70vh] w-full"> */}
            {/* experience */}
            {/* <TabsContent value="experience" className="w-full">
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
                          <div className="flex items-center gap-3"> */}
                            {/* dot */}
                            {/* <p className="text-black/60">{item.company}</p>
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          </div>
                        </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent> */}

            {/* education */}
            {/* <TabsContent value="education" className="w-full">
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
                          <div className="flex items-center gap-3"> */}
                            {/* dot */}
                            {/* <p className="text-black/60">{item.institution}</p>
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          </div>
                        </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent> */}
            {/* skills */}
            {/* <TabsContent value="skills" className="w-full h-full">
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
            </TabsContent> */}
            {/* about */}
            {/* <TabsContent
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
          </div> */}
          {/* tabs */}
          {/* <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
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
      </div> */}
      <div className="container mx-auto mt-16">
      <h2 className="text-2xl mb-5">خدمات تکنورزبری</h2>
      </div>

      <div className="flex justify-evenly group container mx-auto">
        <a href="/resume/site" className="w-[33%] border rounded-xl hover:border-accent duration-500">
          <img src="https://static01.nyt.com/images/2020/10/29/style/28MOON-01/oakImage-1603985177355-superJumbo.jpg" alt="" className="rounded-t-xl"/>
          <div className="w-full flex justify-center py-1 xl:py-5">نرم‌افزار</div></a>

          <a href="/resume/graphics" className="w-[33%] border rounded-xl hover:border-accent duration-500">
          <img src="https://static01.nyt.com/images/2020/10/29/style/28MOON-01/oakImage-1603985177355-superJumbo.jpg" alt="" className="rounded-t-xl"/>
          <div className="w-full flex justify-center py-1 xl:py-5">گرافیک</div></a>

          <a href="/resume/iot" className="w-[33%] border rounded-xl hover:border-accent duration-500">
          <img src="https://static01.nyt.com/images/2020/10/29/style/28MOON-01/oakImage-1603985177355-superJumbo.jpg" alt="" className="rounded-t-xl"/>
          <div className="w-full flex justify-center py-1 xl:py-5">سخت‌افزار</div></a>
      </div>
    </motion.div>
};

export default Resume;
