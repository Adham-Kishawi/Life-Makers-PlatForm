import { useEffect, useState } from 'react';


const ScrollLine = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const navHeight = 70;
      const footerHeight = 200;

      const winScroll = window.scrollY;
      const fullHeight = document.body.scrollHeight;
      const viewHeight = window.innerHeight;

      const usableHeight = fullHeight - viewHeight - navHeight - footerHeight;
      const scrolled = ((winScroll - navHeight) / usableHeight) * 100;

      const safeScrolled = Math.max(0, Math.min(scrolled, 100));
      setScrollHeight(safeScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="scroll-line"
      style={{
        height: `${scrollHeight}vh`,
      }}
    />
  );
};

export default ScrollLine;
