import { useEffect, useRef, useState } from "react";

const useInView = (options: IntersectionObserverInit) => {
  const [inView, setInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const currentElementRef = elementRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { ...options },
    );
    if (currentElementRef) observer.observe(currentElementRef);

    return () => {
      if (currentElementRef) observer.unobserve(currentElementRef);
    };
  }, [options]);

  return [elementRef, inView];
};

export default useInView;
