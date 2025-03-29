import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("Navigated to:", pathname); // Debugging log
    window.scrollTo(0, 0); // Force scroll to top
    document.documentElement.scrollTop = 0; // Extra check
    document.body.scrollTop = 0; // Extra check for older browsers
  }, [pathname]);

  return null;
};

export default ScrollToTop;
