import { useState, useEffect } from "react";

export default function CounterFix2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p>Fix2 Count: {count}</p>;
}