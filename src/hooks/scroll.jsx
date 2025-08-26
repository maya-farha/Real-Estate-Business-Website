// src/hooks/useScrollToHash.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
}

export default useScrollToHash;
