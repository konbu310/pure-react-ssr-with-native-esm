import React, { FC, useCallback, useEffect, useState } from "react";

export const App: FC<{}> = ({}) => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((count) => count - 1);
  }, []);

  return (
    <div>
      <h1>Hello, World!!!</h1>

      <div>
        <button onClick={decrement}>-</button>
        <span style={{ fontSize: "32px", fontWeight: "bold" }}>{count}</span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};
