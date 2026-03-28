import OptimizedVideo from "./OptimizedVideo";
import bgVideo from "../assets/IMG_6537.mov";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative w-full h-[90vh] sm:h-screen 
        flex items-center justify-center 
        overflow-hidden
      "
    >
      {/* Video Background */}
      <OptimizedVideo 
        videoSrc={bgVideo}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-3xl px-4 sm:px-6 pt-20 sm:pt-10">
        
        {/* Title */}
        <h1
          className="
            text-3xl sm:text-4xl md:text-5xl 
            font-extrabold leading-tight md:leading-snug 
            mb-6 animate-slideDown drop-shadow-xl
          "
        >
          Transforming <span className="text-red-300">Landscapes</span> with Excellence,
          Organic Methods & Craftsmanship
        </h1>

        {/* Subtitle */}
        <p
          className="
            text-sm sm:text-lg md:text-xl 
            mb-8 sm:mb-10 
            animate-fadeInSlow leading-relaxed
            bg-red-600/30 backdrop-blur-sm
            px-6 py-3 rounded-xl
          "
        >
          Premium landscaping crafted with precision, passion, and quality service.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          
          {/* Button 1 */}
         <a
  href="https://giovannislandscaping.youcanbook.me/"
  target="_blank"
  rel="noopener noreferrer"
>
  <button
    className="
      px-7 py-3 sm:px-8 rounded-full
      text-base sm:text-lg font-semibold
      bg-red-500 hover:bg-red-600
      shadow-[0_0_18px_rgba(255,0,0,0.55)]
      hover:scale-110 active:scale-95 
      transition-all
    "
  >
    Book Appointment
  </button>
</a>


          {/* Button 2 */}
          <button
            onClick={() =>
              document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
            }
            className="
              px-7 py-3 sm:px-8 rounded-full
              text-base sm:text-lg font-semibold 
              border border-white 
              hover:bg-white/20 hover:scale-105 active:scale-95 
              transition-all
            "
          >
            View Services
          </button>
        </div>
      </div>
    </section>
  );
}
