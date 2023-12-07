import { useEffect, useRef, useState } from 'react';

const useScrollObserver = (): [React.MutableRefObject<Element[]>, Record<string, boolean>] => {
  const targetRef = useRef<Element[]>([]);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  const observer = new IntersectionObserver((entries) => {
    const newIsVisible: Record<string, boolean> = {};

    entries.forEach((entry) => {
      const targetId = entry.target.id;
      if (targetId) {
        newIsVisible[targetId] = entry.isIntersecting;
      }
    });

    setIsVisible((prevIsVisible) => ({
      ...prevIsVisible,
      ...newIsVisible,
    }));
  });

  useEffect(() => {
    if (targetRef.current) {
      targetRef.current.forEach((el) => {
        observer.observe(el);
      });
    }

    return () => {
      if (targetRef.current) {
        targetRef.current.forEach((el) => {
          observer.unobserve(el);
        });
      }
    };
  }, [targetRef]);

  return [targetRef, isVisible];
};

export default useScrollObserver;
