import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useEffect } from "react";
import Lenis from "lenis";

import "./index.css";
import App from "./App";

function Root() {
  useEffect(() => {
    const lenis = new Lenis();
    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Scroll to initial hash if present on mount
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        // Delay scroll slightly to ensure React elements are fully rendered and positioned
        setTimeout(() => {
          lenis.scrollTo(element, { offset: -80, immediate: true });
        }, 150);
      }
    }

    // Intercept clicks on hash links to scroll them with navbar offset
    const handleHashClick = (e) => {
      const target = e.target.closest("a");
      if (target) {
        const href = target.getAttribute("href");
        if (href && href.startsWith("#") && href.length > 1) {
          const id = href.substring(1);
          const element = document.getElementById(id);
          if (element) {
            e.preventDefault();
            lenis.scrollTo(element, { offset: -80 });
            window.history.pushState(null, null, href);
          }
        }
      }
    };

    document.addEventListener("click", handleHashClick);

    return () => {
      lenis.destroy();
      document.removeEventListener("click", handleHashClick);
      window.lenis = null;
    };
  }, []);

  return <App />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);