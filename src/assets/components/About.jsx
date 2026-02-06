import { useState } from "react";
import LineTitle from "./LineTitle";

const team = [
  {
    name: "نازنین زهرا زارع",
    role: "توسعه‌دهنده فرانت‌اند",
    img: "/Images/nazi.jpg",
    skills: [
      { name: "React", color: "#61DAFB" },
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "Tailwind CSS", color: "#4CD137" },
    ],
  },
  {
    name: "ستایش میرجلیلی",
    role: "توسعه‌دهنده بک‌اند",
    img: "/Images/seti.PNG",
    skills: [
      { name: "PHP", color: "#777BB4" },
      { name: "REST API", color: "#9B59B6" },
      { name: "Git & GitHub", color: "#F05032" },
    ],
  },
];

export default function About() {
  const [selected, setSelected] = useState(team[0]);

  return (
    <section id="about" className="py-10 px-4  text-center text-white">
      {/* کارت اصلی */}
      <div
        className="relative max-w-3xl mx-auto rounded-2xl p-0.5
                   bg-linear-to-r from-purple-500 via-cyan-400 to-purple-500
                   "
      >
        <div className="bg-[#0f1324] rounded-2xl px-10 ">
          {/* عنوان */}
          <div className="mb-10 pt-4">
            <LineTitle title="تیم ما" />
          </div>

          {/* اعضای تیم */}
          <div className="flex flex-col md:flex-row pb-10 justify-end gap-10">
            <div className="w-80 text-right relative">
              <div
                className=" p-6 leading-2
               transition-shadow duration-300"
              >
                <p
                  className="text-cyan-400 font-semibold text-lg mb-3
                  drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]"
                >
                  ما عضوی از دایاد هستیم
                </p>

                <p className="text-white/80 text-sm text-right leading-7">
                  دو نفر که عاشق کدنویسی، طراحی تمیز و ساختن تجربه‌های دیجیتال
                  متفاوتیم. از ایده اولیه تا اجرای نهایی کنار پروژه می‌مونیم و
                  سعی می‌کنیم هر چیزی که می‌سازیم،هم چشم‌نواز باشه هم اصولی.
                </p>
              </div>
            </div>

            {team.map((member) => (
              <div
                key={member.name}
                onClick={() => setSelected(member)}
                className={`cursor-pointer group flex flex-col gap-0 items-center transition-all duration-300
                  ${
                    selected.name === member.name
                      ? "scale-100"
                      : "opacity-80 hover:opacity-100"
                  }
                `}
              >
                <div className="relative mb-5">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-40 h-50 rounded-md object-cover
                               border-2 border-purple-400
                               
                               group-hover:shadow-[0_0_40px_rgba(34,211,238,0.7)]
                               transition-shadow"
                  />
                </div>

                <p className="text-lg  font-semibold">{member.name}</p>
                <p className="text-sm pt-1.5 text-purple-300">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
