import OptimizedVideo from "./OptimizedVideo";
import bgVideo from "../assets/IMG_6537.mov";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-50 via-white to-stone-100"
    >
      {/* Decorative floating blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-red-200/40 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-rose-200/30 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute top-[40%] left-[60%] w-48 h-48 bg-amber-200/30 rounded-full blur-2xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 py-12 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 relative z-10">

        {/* Text Content - Left */}
        <div className="relative text-center md:text-left text-black max-w-2xl">

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light leading-[1.2] md:leading-[1.25] mb-6 animate-slideDown tracking-wide">
            Transforming{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">
              Landscapes
            </span>{" "}
            with Excellence, Organic Methods & Craftsmanship
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 animate-fadeInSlow leading-relaxed text-gray-700 max-w-xl mx-auto md:mx-0">
            Premium landscaping crafted with precision, passion, and quality service. We turn your outdoor vision into breathtaking reality.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center md:justify-start mb-10">
            <a
              href="https://giovannislandscaping.youcanbook.me/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-8 py-3.5 rounded-full text-base sm:text-lg font-normal text-white bg-gradient-to-r from-red-600 to-red-600 hover:from-red-700 hover:to-red-700 shadow-lg shadow-red-200 hover:shadow-xl hover:shadow-red-300 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                Book Appointment
              </button>
            </a>

            <button
              onClick={() =>
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3.5 rounded-full text-base sm:text-lg font-normal text-red-800 border-2 border-red-200 bg-white/70 backdrop-blur-sm hover:bg-red-50 hover:border-red-400 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex items-center gap-2 shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
              View Services
            </button>
          </div>

          {/* Small trust row */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm text-gray-500 animate-fadeIn">
            <div className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <span>500+ Projects</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span>100% Satisfaction</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>15+ Years Experience</span>
            </div>
          </div>
        </div>

        {/* Video - Right */}
        <div className="relative w-full md:w-[45%] h-72 sm:h-96 md:h-[65vh] rounded-2xl overflow-hidden shadow-2xl shadow-red-900/10 border-[6px] border-white ring-1 ring-red-100">
          <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-red-700 shadow-sm flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            Live Preview
          </div>
          <OptimizedVideo
            videoSrc={bgVideo}
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          {/* Subtle overlay gradient on video */}
          <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent pointer-events-none z-10" />
        </div>

      </div>

      {/* Scroll down indicator */}
      <button
        onClick={() =>
          document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-red-600/70 hover:text-red-700 transition-colors animate-bounce"
      >
        <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
      </button>
    </section>
  );
}
