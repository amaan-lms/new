import { useRef } from "react";

export default function OptimizedVideo({ videoSrc, className }) {
  const videoRef = useRef(null);

  return (
    <div ref={videoRef} className={className}>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
}
