import { useState, useEffect } from "react";

export default function CounterBug() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p>Bug Count: {count}</p>;
}