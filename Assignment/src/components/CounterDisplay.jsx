import React from "react";

const CounterDisplay = React.memo(function CounterDisplay({ count, goal }) {
  console.log("CounterDisplay Rendered"); // Teacher can test this
  return (
    <h3>
      {count} / {goal} glasses completed
    </h3>
  );
});

export default CounterDisplay;