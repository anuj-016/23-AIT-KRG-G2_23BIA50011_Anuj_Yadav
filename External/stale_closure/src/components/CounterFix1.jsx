import { useState, useEffect } from "react";

export default function CounterFix1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

  return <p>Fix1 Count: {count}</p>;
}