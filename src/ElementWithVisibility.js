import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const ElementWithVisibility = ({ className, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className={`${className} ${isVisible ? 'animate__animated animate__backInUp' : ''}`}>
      {children}
    </div>
  );
};

export default ElementWithVisibility;