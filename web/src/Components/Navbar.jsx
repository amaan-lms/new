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
        isScrolled ? "bg-white/80 backdrop-blur-md" : "bg-transparent"
      } ${showNav ? "translate-y-0" : "-translate-y-full"}`}
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
          <span className={`text-base sm:text-lg md:text-xl font-bold tracking-tight hover:text-red-700 transition truncate max-w-[140px] sm:max-w-none ${
            isScrolled ? "text-gray-900" : "text-gray-900"
          }`}
            style={{ 
              fontFamily: "'Times New Roman', Georgia, serif"
            }}>
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
                    ? isScrolled ? "text-red-600" : "text-red-600"
                    : isScrolled ? "text-gray-900 group-hover:text-red-600" : "text-gray-900 group-hover:text-red-600"
                  }`}
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
          className={`md:hidden relative text-3xl p-2 flex items-center justify-center rounded-lg border shrink-0 ${
            isScrolled 
              ? "text-gray-900 bg-white/80 backdrop-blur-sm border-gray-300" 
              : "text-gray-900 bg-white/20 backdrop-blur-sm border-white/40"
          }`}
          style={{ 
            minWidth: "44px",
            minHeight: "44px"
          }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden
        ${isOpen ? "max-h-[500px] p-4" : "max-h-0 p-0"}`}
        style={{ 
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(10px)"
        }}
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item)}
            className={`w-full text-left py-4 text-lg font-medium border-b border-gray-300 text-gray-900
              ${active === item.id ? "text-red-600" : "text-gray-900"}
            `}
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
}
