"use client"

import { useEffect, useState, useRef } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const hideTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const shouldShow = window.scrollY > 300;

      // Clear any pending hide timer when we detect scroll
      if (hideTimer.current) {
        window.clearTimeout(hideTimer.current);
        hideTimer.current = null;
      }

      if (shouldShow) {
        // show immediately
        setVisible(true);
      } else {
        // delay hiding slightly to avoid flicker on mobile bounce/quick scroll
        hideTimer.current = window.setTimeout(() => setVisible(false), 250);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // initial check
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll as EventListener);
      if (hideTimer.current) {
        window.clearTimeout(hideTimer.current);
      }
    };
  }, []);

  // Always render the button to keep animations consistent on mount; toggle visibility with CSS
  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      // Use opacity/transform for enter/exit so the button isn't unmounted (prevents disappearance on mobile)
      className={`fixed right-6 bottom-24 z-50 w-12 h-12 md:w-14 md:h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ease-out transform ${
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
        <path fill="currentColor" d="M12 8l6 6H6z" />
      </svg>
    </button>
  );
}
