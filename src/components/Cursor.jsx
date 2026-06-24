import { useEffect, useRef, useState } from "react";

function Cursor() {
  const cursorRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Initially hide cursor until mouse moves
    cursor.style.opacity = "0";

    const move = (e) => {
      cursor.style.transform = `translate3d(${e.clientX - 12}px, ${e.clientY - 12}px, 0)`;
      cursor.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      if (cursor) cursor.style.opacity = "0";
    };
    const handleMouseEnter = () => {
      if (cursor) cursor.style.opacity = "1";
    };

    const handleClick = () => {
      setIsClicked(true);
      const timer = setTimeout(() => {
        setIsClicked(false);
      }, 500);
      return () => clearTimeout(timer);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("click", handleClick);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("click", handleClick);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="hidden md:block"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "24px",
        height: "24px",
        pointerEvents: "none",
        zIndex: 9999,
        opacity: 0,
        transition: "transform 0.05s ease-out, opacity 0.3s ease",
        willChange: "transform",
      }}
    >
      <div className={`custom-cursor-ring h-full w-full ${isClicked ? "expand" : ""}`} />
    </div>
  );
}

export default Cursor;