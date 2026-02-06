import LineTitle from "./LineTitle";

function Header() {
  const links = [
    { label: "تیم‌ما", target: "about" },
    { label: "چرا دایاد", target: "whyus" },
    { label: "مهارت‌ها ", target: "skills" },
    { label: "پروژه‌ها", target: "projects" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col">
      <div className="bg-transparent w-full md:gap-10 gap-2 backdrop-blur-lg px-8 flex items-center justify-between">
        <div className="flex flex-row w-full justify-between">
          <div className="flex gap-12 items-center text-nowrap text-[10px] md:text-sm font-medium">
            {links.map((link, i) => (
              <p
                key={i}
                onClick={() => handleScroll(link.target)}
                className="cursor-pointer text-white
                           transition-all duration-300
                           hover:text-cyan-400
                           hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]
                           hover:scale-105"
              >
                {link.label}
              </p>
            ))}
          </div>

          <div className="hidden md:flex flex-row items-center justify-center gap-2">
            <div>
              {/* <img src="/Images/logo.png" alt="logo" className="w-20 " /> */}
            </div>
            <div>
              <p className="text-white text-lg font-bold">
                Dyad{" "}
                <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
                  Code
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <LineTitle />
    </div>
  );
}

export default Header;
