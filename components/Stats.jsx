"use client";

import CountUp from "react-countup";

// const stats = [
//   {
//     num: 1,
//     text: "سال تجربه مفید",
//   },
//   {
//     num: 60,
//     text: "پروژه موفق",
//   },
//   {
//     num: 45,
//     text: "طرح گرافیکی",
//   },
//   {
//     num: 10,
//     text: "سایت",
//   },
//   {
//     num: 5,
//     text: "پروژه سخت افزاری",
//   },
// ];

const Stats = () => {
  return <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-4 grid-cols-2 justify-items-center gap-4">
          {/* col1 */}
          <div className="flex align-center items-center"><CountUp
                  end={45}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl"
                /><p>پروژه موفق</p></div>
          {/* col2 */}
          <div className="flex align-center items-center"><CountUp
                  end={30}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl"
                /><p>طرح‌های گرافیکی</p></div>
          {/* col3 */}
          <div className="flex align-center items-center"><CountUp
                  end={10}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl"
                /><p>طراحی سایت</p></div>
          {/* col4 */}
          <div className="flex align-center items-center"><CountUp
                  end={5}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl"
                /><p>پروژه سخت‌افزاری</p></div>
          {/* end */}
        </div>

        {/* <div className="gap-8 grid grid-cols-2 xl:grid-cols-5">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl"
                />
                <p
                  className={`${
                    item.text.length < 14 ? "max-w-[100px]" : "max-w-[150px]"
                  } text-black/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div> */}
      </div>
    </section>
};

export default Stats;
