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
            mb-6 animate-slideDown drop-shadow-2xl
          "
          style={{
            textShadow: "4px 4px 20px rgba(0, 0, 0, 0.9), 2px 2px 8px rgba(0, 0, 0, 0.7), 1px 1px 3px rgba(239, 68, 68, 0.8)"
          }}
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
            bg-red-600/40 backdrop-blur-md
            px-6 py-3 rounded-xl drop-shadow-xl
          "
          style={{
            textShadow: "2px 2px 10px rgba(0, 0, 0, 0.8), 1px 1px 4px rgba(0, 0, 0, 0.6)"
          }}
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
      shadow-[0_0_25px_rgba(255,0,0,0.7),0_4px_15px_rgba(0,0,0,0.4)]
      hover:scale-110 active:scale-95 
      transition-all
    "
    style={{
      textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)"
    }}
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
              border border-white bg-white/10 backdrop-blur-sm
              hover:bg-white/30 hover:scale-105 active:scale-95 
              transition-all shadow-xl
            "
            style={{
              textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8), 1px 1px 4px rgba(0, 0, 0, 0.6)"
            }}
          >
            View Services
          </button>
        </div>
      </div>
    </section>
  );
}
