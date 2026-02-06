import {
  IconBrandReact,
  IconBrandJavascript,
  IconApi,
  IconDeviceMobile,
  IconBrandGithub,
  IconBrandLaravel,
  IconBrandFigma,
} from "@tabler/icons-react";
import LineTitle from "./LineTitle";

const skills = [
  { name: "React", Icon: IconBrandReact, color: "#61DAFB" },
  { name: "JavaScript", Icon: IconBrandJavascript, color: "#F7DF1E" },
  { name: "REST API", Icon: IconApi, color: "#9B59B6" },
  { name: "Responsive", Icon: IconDeviceMobile, color: "#4CD137" },
  { name: "Figma", Icon: IconBrandFigma, color: "#F05032" },
  { name: "Laravel", Icon: IconBrandLaravel, color: "#FF0020" },
];

export default function Skills() {
  return (
    <div className="flex flex-col">
      <LineTitle title={"مهارت‌ها"} />
      <section id="skills" className="py-24 px-4 ">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-10">
          {skills.map(({ name, Icon, color }) => (
            <div
              key={name}
              className="group relative rounded-3xl p-[1.5px]
                       bg-linear-to-br from-purple-500 via-cyan-400 to-purple-500
                       cursor-pointer
                       transition-all duration-300"
            >
              {/* کارت داخلی */}
              <div
                className="relative h-full rounded-[22px] bg-[#0f1324]
                         py-10 flex flex-col items-center justify-center
                         backdrop-blur-md"
              >
                {/* هاله نئونی */}
                <div
                  className="absolute inset-0 rounded-[22px]
                           bg-linear-to-tr from-purple-500/10 via-cyan-400/10 to-purple-500/10
                           opacity-0 group-hover:opacity-100 transition-opacity"
                />

                {/* آیکن */}
                <div
                  className="relative z-10 mb-4 p-6 rounded-xl
                           bg-[#14182f]
                           
                           group-hover:scale-110 transition-all duration-300"
                >
                  <Icon size={38} stroke={2} color={color} />
                </div>

                {/* نام مهارت */}
                <p className="relative z-10 text-white font-semibold text-lg">
                  {name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
