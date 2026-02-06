import {
  IconBrandGithub,
  IconBrandTelegram,
  IconBrandInstagram,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="py-20 px-4  text-center relative overflow-hidden"
    >
      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-20 left-1/2 -translate-x-1/2
                        w-100 h-100 rounded-full
                        bg-purple-600/20 blur-[120px]"
        />
        <div
          className="absolute bottom-0 right-10
                        w-75 h-75 rounded-full
                        bg-cyan-500/20 blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-xl mx-auto">
        {/* عنوان */}
        <h2
          className="text-2xl font-semibold mb-10
                       text-white drop-shadow-[0_0_12px_rgba(168,85,247,0.7)]"
        >
          در شبکه‌های اجتماعی با ما در ارتباط باشید.
        </h2>

        {/* شبکه‌ها */}
        <div className="flex justify-center gap-12">
          <a
            href="https://github.com/DayadCode"
            className="flex flex-col items-center text-white/70 hover:text-cyan-400
                       transition-colors duration-300"
          >
            <IconBrandGithub size={36} stroke={2} />
            <span className="mt-2 text-sm">Github</span>
          </a>

          <a
            href="https://t.me/DayadCode"
            className="flex flex-col items-center text-white/70 hover:text-cyan-400
                       transition-colors duration-300"
          >
            <IconBrandTelegram size={36} stroke={2} />
            <span className="mt-2 text-sm">Telegram</span>
          </a>

          <a
            href="https://www.instagram.com/DayadCode"
            className="flex flex-col items-center text-white/70 hover:text-cyan-400
                       transition-colors duration-300"
          >
            <IconBrandInstagram size={36} stroke={2} />
            <span className="mt-2 text-sm">Instagram</span>
          </a>
        </div>

        {/* کپی‌رایت */}
        <p className="mt-16 text-sm text-white/50">
          تمام حقوق مادی و معنوی سایت برای دایاد محفوظ است.{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
