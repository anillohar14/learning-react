import { useEffect, useState } from "react";

export function useWindowSize(){
    const [size, setWidth] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      useEffect(() => {
        window.addEventListener("resize", () => {
          setWidth({ width: window.innerWidth, height: window.innerHeight });
        });
      }, []);
      return size
}