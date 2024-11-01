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
  return <section className="min-h-[80vh] justify-center py-12 xl:py-0 content-center">
      <div className="mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
        >
          <div className="container mx-auto text-center my-10"><h1>خدمات تکنورزبری</h1><p>در زیر می‌توانید خدمات ما را مشاهده کنید</p></div>
          <div class="slider mb-10">
		<input type="radio" name="testimonial" id="t-1"/>
		<input type="radio" name="testimonial" id="t-2"/>
		<input type="radio" name="testimonial" id="t-3"/>
		<div class="testimonials xl:h-[360px] h-[310px]">
			<label class="item xl:w-[20%] w-[70%]" for="t-1">
        <img src="https://static01.nyt.com/images/2020/10/29/style/28MOON-01/oakImage-1603985177355-superJumbo.jpg" alt="" />
				<h2>سخت افزار</h2>
        <p>برای مشاهده کلیک کنید</p>
        <a href="/iot">مشاهده</a>
			</label>
			<label class="item xl:w-[20%] w-[70%]" for="t-2">
        <img src="https://static01.nyt.com/images/2020/10/29/style/28MOON-01/oakImage-1603985177355-superJumbo.jpg" alt="" />
				<h2>گرافیک</h2>
        <p>برای مشاهده کلیک کنید</p>
        <a href="/graphics">مشاهده</a>
			</label>
			<label class="item xl:w-[20%] w-[70%]" for="t-3">
        <img src="https://static01.nyt.com/images/2020/10/29/style/28MOON-01/oakImage-1603985177355-superJumbo.jpg" alt="" />
				<h2>سایت</h2>
        <p>برای مشاهده کلیک کنید</p>
        <a href="/site">مشاهده</a>
			</label>
		</div>
		<div class="dots">
			<label for="t-1"></label>
			<label for="t-2"></label>
			<label for="t-3"></label>
		</div>
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