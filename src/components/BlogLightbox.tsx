import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import type { BlogPhoto } from "@/lib/blog";

interface BlogLightboxProps {
  photos: BlogPhoto[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
  eventTitle: string;
}

export function BlogLightbox({
  photos,
  currentIndex,
  onClose,
  onNavigate,
  eventTitle,
}: BlogLightboxProps) {
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < photos.length;
  const currentPhoto = isOpen ? photos[currentIndex] : null;

  const handlePrev = useCallback(() => {
    if (currentIndex !== null && currentIndex > 0) {
      onNavigate(currentIndex - 1);
    } else if (currentIndex === 0) {
      onNavigate(photos.length - 1); // loop to end
    }
  }, [currentIndex, onNavigate, photos.length]);

  const handleNext = useCallback(() => {
    if (currentIndex !== null && currentIndex < photos.length - 1) {
      onNavigate(currentIndex + 1);
    } else if (currentIndex === photos.length - 1) {
      onNavigate(0); // loop to start
    }
  }, [currentIndex, onNavigate, photos.length]);

  // Keyboard navigation & Esc key handler
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // Prevent background scrolling
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  return (
    <AnimatePresence>
      {isOpen && currentPhoto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-black/95 backdrop-blur-xl p-4 md:p-6"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={eventTitle}
        >
          {/* Top Bar: Title, Counter, and Close Button */}
          <div
            className="w-full max-w-7xl flex items-center justify-between z-10 py-2 border-b border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 truncate pr-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gold/20 text-gold border border-gold/30">
                {currentIndex + 1} / {photos.length}
              </span>
              <h3 className="text-sm md:text-base font-semibold text-white/90 truncate">
                {eventTitle}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/10 text-white/80 hover:text-white hover:bg-white/20 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label="Fechar galeria"
            >
              <X size={20} />
            </button>
          </div>

          {/* Main Photo Area with Navigation Controls */}
          <div
            className="relative flex-1 w-full max-w-6xl flex items-center justify-center my-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous Button */}
            {photos.length > 1 && (
              <button
                onClick={handlePrev}
                className="absolute left-2 md:left-4 z-20 p-3 rounded-full bg-black/50 text-white/90 hover:text-white hover:bg-gold hover:text-navy-deep transition-all shadow-lg border border-white/15 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold"
                aria-label="Fotografia anterior"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            {/* Photo Image Display */}
            <motion.div
              key={currentPhoto.url}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative max-h-[78vh] max-w-full flex items-center justify-center"
            >
              <img
                src={currentPhoto.url}
                alt={currentPhoto.alt}
                className="max-h-[78vh] max-w-[88vw] object-contain rounded-lg shadow-2xl select-none"
              />
            </motion.div>

            {/* Next Button */}
            {photos.length > 1 && (
              <button
                onClick={handleNext}
                className="absolute right-2 md:right-4 z-20 p-3 rounded-full bg-black/50 text-white/90 hover:text-white hover:bg-gold hover:text-navy-deep transition-all shadow-lg border border-white/15 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold"
                aria-label="Próxima fotografia"
              >
                <ChevronRight size={24} />
              </button>
            )}
          </div>

          {/* Bottom Thumbnails Preview */}
          {photos.length > 1 && (
            <div
              className="w-full max-w-4xl flex items-center justify-center gap-2 overflow-x-auto py-2 px-4 no-scrollbar z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {photos.map((photo, idx) => (
                <button
                  key={photo.url}
                  onClick={() => onNavigate(idx)}
                  className={`relative shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-md overflow-hidden transition-all duration-200 cursor-pointer border-2 ${
                    idx === currentIndex
                      ? "border-gold scale-105 shadow-md shadow-gold/30"
                      : "border-transparent opacity-50 hover:opacity-100"
                  }`}
                  aria-label={`Ver foto ${idx + 1}`}
                >
                  <img
                    src={photo.url}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
