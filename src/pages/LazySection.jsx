import React, { useRef, useEffect, useState } from "react";

const LazySection = ({ children, threshold = 0.2 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={ref}>
      {visible ? children : <div style={{ height: "400px" }} />}
    </div>
  );
};

export default LazySection;
