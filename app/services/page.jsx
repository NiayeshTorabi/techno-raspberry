"use client";

import { BsEye } from "react-icons/bs";
import Link from "next/link";

// const services = [
//   {
//     title: "طراحی سایت",
//     description: "قالب اختصاصی تلفیقی از سایت‌های پیشنهادی شما",
//     href: "",
//   },
//   {
//     title: "گرافیک",
//     description: "طراحی لوگو، امور گرافیکی به صورت تخصصی",
//     href: "",
//   },
//   {
//     title: "سخت افزار",
//     description: "هوشمندسازی خانه‌های شما با بروزترین تکنولوژي",
//     href: "",
//   },
// ];

import { motion } from "framer-motion";

const Services = () => {
  return <section className="justify-center py-5 content-center">
      <div className="px-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
        >
          {/* title */}
          <div className="container mx-auto">
          <div className="border rounded-md px-3 py-1 items-center mx-3 mb-3">
        <div className="font-bold text-base text-accent">
          خدمات
        </div>
        </div>
          </div>
        {/* data */}
        <div className="container mx-auto flex xl:flex-row flex-col-reverse w-[full]">
          <div className="text-center mt-16 px-3">
              <p className="font-bold text-xl leading-[2rem] mb-5 text-right">سلام دوست خوبم!</p>
              <p className="text-justify text-xl leading-[2rem] xl:leading-[3rem]">مجموعه تکنورزبری یک مجموعه حرفه‌ای با ارائه خدمات حرفه‌ای است</p>
              <p className="text-justify text-xl leading-[2rem] xl:leading-[3rem]">در ادامه می‌توانید خدمات ما را مشاهده کنید؛ برای جابه‌جایی بین اسلایدرها روی آنها کلیک کنید و آنها را انتخاب کرده، سپس می‌توانید با کلیک روی دکمه‌ی "مشاهده" که پایینِ هر بخش وجود دارد، نسبت به مشاهده جزئی‌تر آن خدمت نیز بپردازید؛ در صورت وجود هرگونه ابهام نیز از صفحه ارتباط با ما اقدام فرمایید.</p>
          </div>
        <img src="/images/services-technoraspberry.png" className="h-[300px] xl:h-[375px] w-[full] object-contain mix-blend-multiply" />
        </div>
        <p className="container mx-auto text-3xl text-center mt-20 font-bold text-accent xl:leading-[2rem] leading-[3rem]">اسلایدرها در زیر قابل مشاهده هستند !!</p>
          <div class="slider mt-5">
		<input type="radio" name="testimonial" id="t-1"/>
		<input type="radio" name="testimonial" id="t-2"/>
		<input type="radio" name="testimonial" id="t-3"/>
		<div class="testimonials xl:h-[80dvh] lg:h-[100vh] sm:h-[80vh] h-[50vh] m-0 p-0 pt-16">
			<label class="item xl:w-[35%] w-[70%] m-0 p-0" for="t-1">
        <img src="/images/services2.png" alt="" />
				<h2 className="xl:text-5xl text-3xl">سخت افزار</h2>
        <p className="xl:text-2xl text-xl mt-3">برای مشاهده کلیک کنید</p>
        <a className="xl:text-3xl text-2xl" href="/iot">مشاهده</a>
			</label>
			<label class="item xl:w-[35%] w-[70%] x-0 p-0" for="t-2">
        <img src="/images/services-graphic-technoraspberry.png" alt="" />
				<h2 className="xl:text-5xl text-3xl">گرافیک</h2>
        <p className="xl:text-2xl text-xl mt-3">برای مشاهده کلیک کنید</p>
        <a className="xl:text-3xl text-2xl" href="/graphics">مشاهده</a>
			</label>
			<label class="item xl:w-[35%] w-[70%] x-0 p-0" for="t-3">
        <img src="/images/services1.png" alt="" />
				<h2 className="xl:text-5xl text-3xl">سایت</h2>
        <p className="xl:text-2xl text-xl mt-3">برای مشاهده کلیک کنید</p>
        <a className="xl:text-3xl text-2xl" href="/site">مشاهده</a>
			</label>
		</div>
		{/* <div class="dots">
			<label for="t-1"></label>
			<label for="t-2"></label>
			<label for="t-3"></label>
		</div> */}
	    </div>
          {/* {services.map((service, index) => {
            return ( */}
                {/* start cosnt */}
                {/* <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group border p-5 rounded-md hover:border-accent duration-500"
              > */}
                {/* top */}
                {/* <div className="w-full flex justify-between items-center py-5">
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-black group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsEye className="text-primary text-3xl" />
                  </Link>
                </div> */}
                {/* title */}
                {/* <h2 className="text-[42px] font-bold leading-none text-black group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2> */}
                {/* description */}
                {/* <p className="text-black/60">{service.description}</p> */}
                {/* border */}
              {/* </div> */}
              {/* end const */}
            {/* );
          })} */}
        </motion.div>
      </div>
    </section>
};

export default Services;