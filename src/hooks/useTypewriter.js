import { useState, useEffect, useCallback } from 'react';

export function useTypewriter(strings, typingSpeed = 80, deletingSpeed = 50, pauseTime = 2000) {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPausing, setIsPausing] = useState(false);

  const tick = useCallback(() => {
    const currentString = strings[currentIndex];

    if (isPausing) return;

    if (!isDeleting) {
      // Typing phase
      if (displayText.length < currentString.length) {
        setDisplayText(currentString.slice(0, displayText.length + 1));
      } else {
        // Full string typed — pause before deleting
        setIsPausing(true);
      }
    } else {
      // Deleting phase
      if (displayText.length > 0) {
        setDisplayText(currentString.slice(0, displayText.length - 1));
      } else {
        // Fully deleted — advance to next string
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % strings.length);
      }
    }
  }, [displayText, isDeleting, currentIndex, isPausing, strings]);

  // Typing / deleting interval
  useEffect(() => {
    if (isPausing) return;

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, isPausing, typingSpeed, deletingSpeed]);

  // Pause timeout
  useEffect(() => {
    if (!isPausing) return;

    const timer = setTimeout(() => {
      setIsPausing(false);
      setIsDeleting(true);
    }, pauseTime);

    return () => clearTimeout(timer);
  }, [isPausing, pauseTime]);

  return { displayText, isDeleting, currentIndex };
}
