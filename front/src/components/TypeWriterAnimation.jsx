"use client";

import { useEffect, useState } from "react";

export default function TypeWriterAnimation({
  start = true,
  text = "",
  speed = 300,
  onDone,
}) {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (!start) return;

    setTyped("");
    let i = 0;

    const tick = () => {
      i += 1;
      setTyped(text.slice(0, i));
      if (i >= text.length) {
        onDone?.();
        return;
      }
      timer = setTimeout(tick, speed);
    };

    let timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [start, text, speed, onDone]);

  if (!start) return null;

  return (
    <>
      {typed}
      <span className="typeCursor">|</span>
    </>
  );
}
