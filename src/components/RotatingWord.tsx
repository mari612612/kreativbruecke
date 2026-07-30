"use client";

import { useEffect, useState } from "react";

export default function RotatingWord({
  words,
  interval = 2200,
}: {
  words: string[];
  interval?: number;
}) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const tick = setInterval(() => {
      setVisible(false);
      timeout = setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, 300);
    }, interval);
    return () => {
      clearInterval(tick);
      clearTimeout(timeout);
    };
  }, [words.length, interval]);

  return (
    <span
      className={`inline-block transition-all duration-300 ease-out ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
      }`}
    >
      {words[index]}
    </span>
  );
}
