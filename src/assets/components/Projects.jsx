import LineTitle from "./LineTitle";

const projects = [
  {
    title: "خانه کارگر استان یزد",
    desc: "مدیریت اعضا، خدمات و پرداخت‌ها",
    tech: "React • Laravel",
    img: "/Images/kargar.PNG",
  },
  {
    title: "بندر فایل",
    desc: "مدیریت مشاوران و مشتریان در شهر بندرعباس",
    tech: "React • Laravel",
    img: "/Images/bandar.PNG",
  },
  {
    title: "استارتاپ خشت‌ به خشت  ",
    desc: "همراه‌ سفر هوشمند در شهر یزد",
    tech: "React • Laravel",
    img: "/Images/khesht.PNG",
  },
];

export default function Projects() {
  return (
    <section id="projects" className=" px-4  text-white">
      <LineTitle title={"پروژه‌ها"} />

      <div className="max-w-6xl pt-20 mx-auto grid gap-10 md:grid-cols-3">
        {projects.map((p) => (
          <div
            key={p.title}
            className="group relative rounded-3xl p-[1.5px]
                       bg-linear-to-br from-purple-500 via-cyan-400 to-purple-500
                    
                       transition-all duration-300"
          >
            {/* کارت داخلی */}
            <div className="rounded-[22px] bg-[#0f1324] overflow-hidden">
              {/* تصویر پروژه */}
              <div className="relative h-50 rounded-t-2xl  overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover
                             group-hover:scale-105 transition-transform duration-500"
                />

                {/* overlay نئونی */}
                <div
                  className="absolute inset-0
                              via-transparent to-transparent"
                />
              </div>

              {/* محتوا */}
              <div className="p-4 ">
                <h3 className="text-xl text-right font-semibold mb-2">
                  {p.title}
                </h3>

                <p className="text-slate-300 text-right text-sm mb-4 leading-relaxed">
                  {p.desc}
                </p>

                <span
                  className="inline-block text-left text-sm text-cyan-300
                             drop-shadow-[0_0_6px_rgba(34,211,238,0.6)]"
                >
                  {p.tech}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
