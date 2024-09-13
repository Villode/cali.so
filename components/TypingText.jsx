import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TypingText = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;
      if (index >= text.length) clearInterval(intervalId);
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return <motion.span>{displayedText}</motion.span>;
};

export default TypingText;
