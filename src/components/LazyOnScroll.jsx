import { Suspense, useRef } from "react";
import { useInView } from "framer-motion";

const LazyOnScroll = ({
  children,
  fallback = null,
  margin = "-100px",
}) => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin,
  });

  return (
    <div ref={ref}>
      {inView ? (
        <Suspense fallback={fallback}>
          {children}
        </Suspense>
      ) : null}
    </div>
  );
};

export default LazyOnScroll;
