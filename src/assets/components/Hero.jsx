import Header from "./Header";

export default function Hero() {
  return (
    <section
      className="relative  flex flex-col justify-between
                  text-center text-white
                py-4"
    >
      {/* Header */}
      <Header />

      {/* Content */}
      <div className="relative z-10 py-10">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          <span className="drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]">
            خلاقیت در
          </span>{" "}
          <span
            className="text-cyan-400
                       drop-shadow-[0_0_25px_rgba(34,211,238,0.9)]"
          >
            کدنویسی
          </span>
        </h1>

        <p
          className="mt-6 max-w-xl mx-auto text-slate-300 leading-relaxed
                     drop-shadow-[0_0_6px_rgba(255,255,255,0.15)]"
        >
          تیم نرم‌افزاری دایاد کد
        </p>

        {/* CTA */}
        <div className="mt-6 flex justify-center gap-6">
          <a
            href="tel:+989138530291"
            className="px-8 py-3 rounded-xl font-medium
                       border border-cyan-400/60 text-cyan-300
                       backdrop-blur-sm
                       shadow-[0_0_20px_rgba(34,211,238,0.25)]
                       hover:bg-cyan-400/10
                       hover:shadow-[0_0_35px_rgba(34,211,238,0.6)]
                       hover:scale-105 transition-all duration-300"
          >
            پشتیبانی و همکاری
          </a>
        </div>
      </div>
    </section>
  );
}
