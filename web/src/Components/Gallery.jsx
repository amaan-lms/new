import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// IMPORT IMAGES
import img1 from "../assets/JPEG image 9.jpeg";
import img2 from "../assets/JPEG image 6.jpeg";
import img3 from "../assets/JPEG image 2.jpeg";
import img4 from "../assets/IMG_9668.jpg";
import img5 from "../assets/IMG_9588.jpeg";
import img6 from "../assets/IMG_9476.jpg";
import img7 from "../assets/IMG_9468.jpg";
import img8 from "../assets/IMG_9466.jpg";
import img9 from "../assets/IMG_9044.jpeg";
import img10 from "../assets/IMG_8751.jpeg";
import img11 from "../assets/IMG_5943.jpeg";
import img12 from "../assets/IMG_3870.jpeg";
import img13 from "../assets/IMG_3714 2.JPG";
import img14 from "../assets/IMG_3416.jpeg";
import img15 from "../assets/IMG_3408.jpeg";
import img16 from "../assets/IMG_3025.jpeg";
import img17 from "../assets/IMG_2098.jpeg";
import img18 from "../assets/IMG_1565.jpeg";
import img19 from "../assets/IMG_0853.jpeg";
import img20 from "../assets/20150730_140540.jpg";

// GALLERY IMAGES
import galleryA from "../assets/gallery/a.jfif";
import galleryAA from "../assets/gallery/aa.jfif";
import galleryB from "../assets/gallery/b.jpg";
import galleryBB from "../assets/gallery/bb.jpg";
import galleryC from "../assets/gallery/c.jfif";
import galleryCC from "../assets/gallery/cc.jpg";
import galleryD from "../assets/gallery/d.jfif";
import galleryDD from "../assets/gallery/dd.jfif";
import galleryE from "../assets/gallery/e.jfif";
import galleryEE from "../assets/gallery/ee.jfif";
import galleryF from "../assets/gallery/f.jfif";
import galleryF2 from "../assets/gallery/f.jpg";
import galleryFF from "../assets/gallery/ff.jpg";
import galleryG from "../assets/gallery/g.jfif";
import galleryGG from "../assets/gallery/gg.jfif";
import galleryH from "../assets/gallery/h.jfif";
import galleryHH from "../assets/gallery/hh.jpg";
import galleryI from "../assets/gallery/i.jpg";
import galleryII from "../assets/gallery/ii.jpg";
import galleryJ from "../assets/gallery/j.jpg";
import galleryJJ from "../assets/gallery/jj.jpg";
import galleryK from "../assets/gallery/k.jfif";
import galleryL from "../assets/gallery/l.jpg";
import galleryLL from "../assets/gallery/ll.jpg";
import galleryM from "../assets/gallery/m.jfif";
import galleryNN from "../assets/gallery/nn.jpg";
import galleryO from "../assets/gallery/o.jpg";
import galleryOO from "../assets/gallery/oo.jpg";
import galleryP from "../assets/gallery/p.jfif";
import galleryQ from "../assets/gallery/q.jfif";
import galleryR from "../assets/gallery/r.jpg";
import galleryS from "../assets/gallery/s.jfif";
import galleryT from "../assets/gallery/t.jfif";
import galleryU from "../assets/gallery/u.jpg";
import galleryV from "../assets/gallery/v.jfif";
import galleryW from "../assets/gallery/w.jfif";
import galleryX from "../assets/gallery/x.jpg";
import galleryY from "../assets/gallery/y.jfif";
import galleryZ from "../assets/gallery/z.jfif";

export default function MasonryGallery() {
    const [selected, setSelected] = useState(null);

    const images = [
        img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
        img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
        // Gallery images
        galleryA, galleryAA, galleryB, galleryBB, galleryC, galleryCC,
        galleryD, galleryDD, galleryE, galleryEE, galleryF, galleryF2, galleryFF,
        galleryG, galleryGG, galleryH, galleryHH, galleryI, galleryII,
        galleryJ, galleryJJ, galleryK, galleryL, galleryLL, galleryM, galleryNN,
        galleryO, galleryOO, galleryP, galleryQ, galleryR, galleryS, galleryT,
        galleryU, galleryV, galleryW, galleryX, galleryY, galleryZ,
    ];

    // Close modal on ESC
    useEffect(() => {
        const close = (e) => e.key === "Escape" && setSelected(null);
        window.addEventListener("keydown", close);
        return () => window.removeEventListener("keydown", close);
    }, []);

    return (
        <section id="gallery" className="w-full bg-white py-10
         px-5 md:px-12">
            <h2 className="text-4xl font-bold text-center text-red-600 mb-10 font-serif">
                Our Gallery
            </h2>

            {/* Masonry Grid */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                {images.map((url, index) => (
                    <motion.div
                        key={index}
                        className="relative overflow-hidden rounded-xl shadow-lg border-2 border-red-200 cursor-pointer group"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.4, ease: "easeOut" },
                        }}
                        viewport={{ once: true, amount: 0.2 }}
                        onClick={() => setSelected(url)}
                    >
                        <img
                            src={url}
                            loading="lazy"
                            alt="gallery-img"
                            className="w-full rounded-xl transition-transform duration-500 group-hover:scale-110"
                        />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-600/20 to-red-600/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                            <span className="text-white text-lg font-semibold tracking-wide">
                                View Image
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Modal Popup */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelected(null)}
                    >
                        <motion.img
                            src={selected}
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                                transition: { type: "spring", stiffness: 150, damping: 15 },
                            }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="max-w-full max-h-[85vh] border-4 border-red-600 rounded-xl shadow-2xl"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
