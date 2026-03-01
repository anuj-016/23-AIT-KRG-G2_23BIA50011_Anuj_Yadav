import { useState, useEffect, useCallback } from "react";
import CounterDisplay from "../components/CounterDisplay.jsx";

function WaterTracker() {
  
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem("waterCount");
    return saved !== null ? parseInt(saved) : 0;
  });

  const [goal, setGoal] = useState(() => {
    const savedGoal = localStorage.getItem("waterGoal");
    return savedGoal !== null ? parseInt(savedGoal) : 8;
  });

  const [tip, setTip] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.setItem("waterCount", count);
  }, [count]);

  useEffect(() => {
    localStorage.setItem("waterGoal", goal);
  }, [goal]);

  
  const fetchTip = async () => {
    setTip("");       
    setError("");
    setLoading(true);

    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setTip(data.slip.advice);
    } catch {
      setError("Failed to fetch advice.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTip();
  }, []);

  const increase = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const decrease = useCallback(() => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  }, []);

  const reset = useCallback(() => {
    setCount(0);
    setGoal(8);
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h2>Water Intake Tracker</h2>

      <div style={{ border: "1px solid gray", padding: "20px", width: "300px" }}>
        
        <CounterDisplay count={count} goal={goal} />

        <button onClick={increase}>+ add</button>
        <button onClick={decrease}>- remove</button>
        <button onClick={reset}>Reset</button>

        {count >= goal && <p>Goal Reached 🎉</p>}

        <hr />

        <div style={{ marginTop: "10px" }}>
          <label>
            Daily Goal (glasses) : {" "}
            <input
              type="number"
              min="1"
              value={goal}
              onChange={(e) => setGoal(Number(e.target.value))}
              style={{ width: "100px" }}
            />
          </label>
        </div>

        <hr />

        <button onClick={fetchTip}>Get New Tip</button>

        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {tip && <p>Today’s Health Tip: {tip}</p>}
      </div>
    </div>
  );
}

export default WaterTracker;