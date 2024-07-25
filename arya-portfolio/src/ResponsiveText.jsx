// src/ResponsiveText.js

import React, { useState, useEffect } from 'react';

const getFontSize = (width) => {
  if (width < 576) return '1.2em';
  if (width < 768) return '1.5em';
  if (width < 992) return '2em';
  if (width < 1200) return '2.5em';
  return '3em';
};

const ResponsiveText = ({ children }) => {
  const [fontSize, setFontSize] = useState(getFontSize(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setFontSize(getFontSize(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <div style={{ fontSize }}>{children}</div>;
};

export default ResponsiveText;