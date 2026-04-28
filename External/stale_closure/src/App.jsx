import CounterBug from "./components/CounterBug";
import CounterFix1 from "./components/CounterFix1";
import CounterFix2 from "./components/CounterFix2";

export default function App() {
  return (
    <div>
      <h1>Stale Closure Demo</h1>

      <CounterBug />

      <CounterFix1/>
      
      <CounterFix2/>

    </div>
  );
}