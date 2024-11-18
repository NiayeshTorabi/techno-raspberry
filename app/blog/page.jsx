"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Blog = () => {
  return <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-1 flex flex-col gap-5 m-3"
    >
      <div className="container mx-auto px-1">
        {/* title */}
        <div className="flex justify-between border rounded-md px-3 items-center">
        <div className="font-bold text-accent">
          وبلاگ
        </div>
        <div>
          <p className="text-sm">جدیدترین مقالات روز تکنولوژی</p>
        </div>
        </div>
        {/* banner */}
        <div className="xl:flex xl:flex-row flex flex-col-reverse rounded-md items-center gap-5 my-5">
          <div className="xl:w-[30%] w-full xl:h-[20rem] h-full shadow-xl shadow-black/30 rounded-md p-3 border border-accent">
            <h2>دسته‌بندی مقالات</h2>
            <ul className="px-3">
              <a href="/technology">
              <li>تکنولوژی</li>
              </a>
            </ul>
          </div>
          <div className="xl:w-[70%] w-full xl:h-[20rem] h-[15rem] bg-black rounded-md">
            <picture>
            <source media="(min-width: 1200px)" srcset="/images/blog-technoraspberry.png"/>
            <img src="/images/blog-technoraspberry-sm.png" className="xl:h-[20rem] h-[15rem] w-full shadow-xl shadow-black/30  rounded-md object-cover w-full border-2 border-black" alt="" />
            </picture>
          </div>
        </div>
        {/* posts */}
        <h2 className="mt-20 text-center xl:text-justify">آخرین مقالات</h2>
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
        {/* social */}
        {/* <div>
          <img src="https://vanillaberry.ir/wp-content/uploads/2023/12/blog-banner-2-1-768x88.png" alt="" className="mt-5 w-full h-[80px] object-contain rounded-md" />
        </div> */}
      </div>
    </motion.section>
};

export default Blog;
