import { useEffect } from "react";

export const useLockBodyScroll = (locked) => {
  useEffect(() => {
    if (locked) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.removeProperty("overflow");
    };
  }, [locked]);
};
