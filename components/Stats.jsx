"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 1,
    text: "سال تجربه مفید",
  },
  {
    num: 9,
    text: "پروژه تکمیل شده",
  },
  {
    num: 7,
    text: "سایت طراحی شده",
  },
  {
    num: 2,
    text: "خانه هوشمند شده",
  },
];

const Stats = () => {
  return <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="gap-8 max-w-[90vw] mx-auto xl:max-w-none grid grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 14 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-black/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
};

export default Stats;
