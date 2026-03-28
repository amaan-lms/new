import { useEffect, useState } from "react";
import Logo from "../assets/newlogo2.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [showNav, setShowNav] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Hide navbar on scroll and track scroll position for background change
  useEffect(() => {
    let lastScroll = window.scrollY;
    const handleScroll = () => {
      const current = window.scrollY;
      setShowNav(current < lastScroll || current < 10);
      setIsScrolled(current > 50);
      lastScroll = current;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "gallery", label: "Gallery", route: "/gallery" }, // ✅ ADDED
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  // Handle navigation or scroll
  const handleNavClick = (item) => {
    setActive(item.id);
    setIsOpen(false);

    if (item.route) {
      // ✅ Navigate to another page
      navigate(item.route);
      return;
    }

    // Scroll to section on home page
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white shadow-lg" : "bg-black/20"
      }`}
    >
      <nav className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-3 flex justify-between items-center relative">

        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => handleNavClick({ id: "home" })}
        >
          <img
            src={Logo}
            alt="Giovanni's Landscaping Logo"
            className="h-10 w-10 sm:h-12 sm:w-12 object-contain transition duration-300 hover:scale-110"
          />
          <span className="text-base sm:text-lg md:text-xl font-bold tracking-tight hover:text-red-700 transition text-white drop-shadow-lg shadow-red-500/50"
            style={{ fontFamily: "'Times New Roman', Georgia, serif", textShadow: "3px 3px 16px rgba(239, 68, 68, 0.8), 1px 1px 4px rgba(239, 68, 68, 0.9)" }}>
            Giovanni's Landscaping
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => handleNavClick(item)}
              className="cursor-pointer font-medium text-lg relative group transition"
            >
              <span
                className={`transition ${active === item.id
                    ? "text-red-300"
                    : "text-white group-hover:text-red-300"
                  } drop-shadow-lg`}
                style={{ textShadow: "2px 2px 10px rgba(239, 68, 68, 0.7), 1px 1px 3px rgba(239, 68, 68, 0.8)" }}
              >
                {item.label}
              </span>


              <span
                className={`absolute left-0 -bottom-1 h-[3px] rounded-full transition-all duration-300 ${active === item.id
                  ? "w-full bg-red-600"
                  : "w-0 group-hover:w-full bg-red-300"
                  }`}
              />
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden absolute right-18 top-1/2 -translate-y-1/2 text-white text-3xl drop-shadow-lg p-2 flex items-center justify-center rounded-lg bg-black/40 border border-red-500/50"
          style={{ 
            textShadow: "2px 2px 10px rgba(239, 68, 68, 0.9), 0 0 20px rgba(239, 68, 68, 0.6)",
            minWidth: "44px",
            minHeight: "44px",
            boxShadow: "0 0 15px rgba(239, 68, 68, 0.5)"
          }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500
        ${isOpen ? "max-h-80 p-4" : "max-h-0 p-0 overflow-hidden"}`}
        style={{ 
          boxShadow: isOpen ? "0 10px 40px rgba(239, 68, 68, 0.4), 0 4px 20px rgba(0, 0, 0, 0.3)" : "none",
          backgroundColor: "rgba(0, 0, 0, 0.3)"
        }}
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item)}
            className={`w-full text-left py-4 text-lg font-medium border-b border-white/20 text-white drop-shadow-lg
              ${active === item.id ? "text-red-300" : "text-white"}
            `}
            style={{ textShadow: "2px 2px 10px rgba(239, 68, 68, 0.7), 1px 1px 3px rgba(239, 68, 68, 0.8)" }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
}
