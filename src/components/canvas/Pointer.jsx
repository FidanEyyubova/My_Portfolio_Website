import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";

export function Pointer({ className, style, children, ...props }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [visible, setVisible] = useState(true);
  const [hovering, setHovering] = useState(false);

  function cn(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  useEffect(() => {
    document.body.style.cursor = "none";
    return () => {
      document.body.style.cursor = "";
    };
  }, []);

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const enter = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };

    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseenter", enter);
    window.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseenter", enter);
      window.removeEventListener("mouseleave", leave);
    };
  }, [visible, x, y]);

  useEffect(() => {
    const handleOver = (e) => {
      if (["A", "BUTTON", "INPUT", "TEXTAREA"].includes(e.target.tagName)) {
        setHovering(true);
      }
    };
    const handleOut = (e) => {
      if (["A", "BUTTON", "INPUT", "TEXTAREA"].includes(e.target.tagName)) {
        setHovering(false);
      }
    };

    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    return () => {
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2"
          style={{
            top: y,
            left: x,
            ...style,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: hovering ? 1.4 : 1,
            opacity: 1,
          }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 20,
          }}
          {...props}
        >
          {children || (
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="1"
              viewBox="0 0 16 16"
              height="22"
              width="22"
              xmlns="http://www.w3.org/2000/svg"
              className={cn(
                "rotate-[-70deg] text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]",
                className
              )}
            >
              <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
            </svg>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
