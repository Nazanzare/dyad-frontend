const features = [
  "کدنویسی تمیز و قابل توسعه",
  "ارتباط مستقیم با برنامه‌نویس",
  "تحویل سریع و پشتیبانی واقعی",
  "طراحی مدرن و ریسپانسیو",
];

export default function WhyUs() {
  return (
    <section id="whyus" className="py-24 px-4  text-center">
      <h2
        className="text-3xl font-semibold mb-16
                   text-white drop-shadow-[0_0_12px_rgba(168,85,247,0.7)]"
      >
        چرا دایاد؟
      </h2>

      <div className="max-w-3xl mx-auto grid gap-6">
        {features.map((feature, i) => (
          <div
            key={i}
            className="group relative flex flex-row items-center gap-4
                       bg-[#0f1324] rounded-2xl p-5
                       border border-purple-500/20
                       shadow-[0_0_20px_rgba(168,85,247,0.25)]
                       hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]
                       transition-all duration-500
                       opacity-0 translate-y-6
                       animate-fade-in"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            {/* نقطه نئونی */}
            <span
              className="w-4 h-4 rounded-full
                         bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]
                         group-hover:scale-125 transition-transform duration-300"
            />

            {/* متن */}
            <p className="text-white font-medium text-lg">{feature}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(1.5rem);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s forwards;
        }
      `}</style>
    </section>
  );
}
