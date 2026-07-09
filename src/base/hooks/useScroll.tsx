/** @format */

import { useEffect, useState } from "react";

const useScroll = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolling(true);

      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return {
    isScrolling,
    scrollY,
    isScrolled: scrollY > 0,
  };
};

export default useScroll;
