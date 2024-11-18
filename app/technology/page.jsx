"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const technology = () => {
  return <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-1 flex flex-col gap-5 m-3 container mx-auto"
    >
      {/* title */}
      <div className="flex justify-between border rounded-md px-3 items-center">
        <div className="font-bold text-accent">
          دسته‌بندی تکنولوژی
        </div>
        </div>
        {/* banner */}
      <div className="container mx-auto px-0">
      <img className="h-[300px] w-full rounded-xl object-cover shadow-xl shadow-black/40" src="/images/Technology-technoraspberry.avif" alt="" />
      </div>
      {/* data */}
      <h2 className="text-accent text-5xl text-center">تکنولوژی</h2>
      <p className="px-3 text-center">در زیر می‌توانید دسته‌بندی مقالات تکنولوژی تکنورزبری را مشاهده کنید و برای مطالعه کامل آنها نیز روی دکمه مشاهده مقاله کلیک کنید.</p>
      <div className="grid xl:grid-cols-4 grid-cols-1 mt-5">
          <div className="border rounded-md text-center hover:shadow-md hover:shadow-accent hover:shadow-black/30 duration-500">
            <img src="/images/blog-website-technoraspberry.jpg" alt="" className="h-[185px] object-cover w-full rounded-t-md" />
            <div className="py-3"><h3>بهترین زبان‌های فرنت‌اند</h3><p className="text-black/50 text-sm text-justify px-3">یادگیری برنامه نویسی یکی از جالب ترین ها برای علاقه مندان به فناوری است. حتی در این دهه اخیر، برنامه نویسی در صدر فناوری هایی قرار گرفته که دنیای مدرن را...</p></div>
            <div className="m-3">
            <Button
                variant="outline"
                className="text-center w-full"
              >
                <a href="/blog/site"><span>مشاهده مقاله</span></a>
              </Button>
            </div>
          </div>
          <div className="border rounded-md text-center hover:shadow-md hover:shadow-accent hover:shadow-black/30 duration-500">
            <img src="/images/bootstrap-technoraspberry.jpg" alt="" className="h-[185px] object-cover w-full rounded-t-md" />
            <div className="py-3"><h3>ویژگی‌های نسخه جدید بوت‌استرپ | V5</h3><p className="text-black/50 text-sm text-justify px-3">وت استرپ 5 اینجاست ! همینقدر کافیست که بدانید بوت استرپ نسخه به نسخه مارو سوپرایز میکنه و همیشه سعی کرده در بهترین و استانداردترین حالت خود...</p></div>
            <div className="m-3">
            <Button
                variant="outline"
                className="text-center w-full"
              >
                <a href="/blog/bootstrap"><span>مشاهده مقاله</span></a>
              </Button>
            </div>
          </div>
          <div className="border rounded-md text-center hover:shadow-md hover:shadow-accent hover:shadow-black/30 duration-500">
            <img src="/images/react-vs-next-technoraspberry.png" alt="" className="h-[185px] object-cover w-full rounded-t-md" />
            <div className="py-3"><h3>ReactJs یا NextJs</h3><p className="text-black/50 text-sm text-justify px-3">در دنیای برنامه نویسی وب فریمورک ها و کتابخانه های مختلفی وجود دارند که به برنامه نویسان کمک میکنند تا برنامه های وب پویا و عالی ایجاد کنند .که از مهم ترین...</p></div>
            <div className="m-3">
            <Button
                variant="outline"
                className="text-center w-full"
              >
                <a href="/blog/reactvsnext"><span>مشاهده مقاله</span></a>
              </Button>
            </div>
          </div>
        </div>
      </motion.section>
};

export default technology;
