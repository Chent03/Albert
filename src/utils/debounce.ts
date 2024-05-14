import { useEffect, useMemo, useRef } from "react"

export const useDebounce = (callback: any, delay = 1000) => {
    const ref = useRef<(() => void) | null>(null);
  
    useEffect(() => {
      ref.current = callback;
    }, [callback]);
  
    const debounce = (callback: () => void, delay: number) => {
      let timer: any;
      return () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          callback();
        }, delay);
      };
    };
  
    const debounceCallback = useMemo(() => {
      const func = () => {
        ref.current?.();
      };
      return debounce(func, delay);
    }, []);
  
    return debounceCallback;
  };
  