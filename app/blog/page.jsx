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
          وبلاگ تکنورزبری
        </div>
        <div>
          <p className="text-sm">جدیدترین مقالات روز تکنولوژی</p>
        </div>
        </div>
        {/* banner */}
        <div className="xl:flex xl:flex-row flex flex-col-reverse rounded-md items-center gap-5 my-5">
          <div className="xl:w-[30%] w-full xl:h-[40rem] h-full shadow-xl shadow-black/30 rounded-md p-3 border border-accent">
            <h2>دسته‌بندی مقالات</h2>
            <ul className="px-3">
              <li>عمومی</li>
              <li>سایت</li>
              <li>طراحی و گرافیک</li>
            </ul>
          </div>
          <div className="xl:w-[70%] w-full xl:h-[40rem] h-[30rem] bg-black rounded-md">
            <img src="https://www.cloudblue.com/wp-content/uploads/2024/06/what-is-the-internet-of-things-iot.png" className="xl:h-[40rem] h-[30rem] w-full shadow-xl shadow-black/30  rounded-md object-cover border-2 border-black" alt="" />
          </div>
        </div>
        {/* posts */}
        <h2 className="mt-20">آخرین مقالات</h2>
        <div className="grid xl:grid-cols-4 grid-cols-1 mt-5">
          <div className="border rounded-md text-center hover:shadow-md hover:shadow-accent hover:shadow-black/30 duration-500">
            <img src="https://www.cloudblue.com/wp-content/uploads/2024/06/what-is-the-internet-of-things-iot.png" alt="" className="h-[185px] object-cover rounded-t-md" />
            <div className="py-3"><h3>عنوان نوشته (سایت)</h3><p className="text-black/50 text-sm">چکیده‌ای کوتاه از نوشته</p></div>
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
            <img src="https://www.cloudblue.com/wp-content/uploads/2024/06/what-is-the-internet-of-things-iot.png" alt="" className="h-[185px] object-cover rounded-t-md" />
            <div className="py-3"><h3>عنوان نوشته (سایت)</h3><p className="text-black/50 text-sm">چکیده‌ای کوتاه از نوشته</p></div>
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
            <img src="https://www.cloudblue.com/wp-content/uploads/2024/06/what-is-the-internet-of-things-iot.png" alt="" className="h-[185px] object-cover rounded-t-md" />
            <div className="py-3"><h3>عنوان نوشته (سایت)</h3><p className="text-black/50 text-sm">چکیده‌ای کوتاه از نوشته</p></div>
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
            <img src="https://www.cloudblue.com/wp-content/uploads/2024/06/what-is-the-internet-of-things-iot.png" alt="" className="h-[185px] object-cover rounded-t-md" />
            <div className="py-3"><h3>عنوان نوشته (سایت)</h3><p className="text-black/50 text-sm">چکیده‌ای کوتاه از نوشته</p></div>
            <div className="m-3">
            <Button
                variant="outline"
                className="text-center w-full"
              >
                <a href="/blog/site"><span>مشاهده مقاله</span></a>
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
