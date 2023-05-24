import { createSignal } from "solid-js";

function Counter() {
  const [count, setCount] = createSignal(0);

  // setInterval(() => setCount(count() + 1), 1000);

  return <div>
    <button onclick={() => setCount(count() - 1)}>-</button>
    <span>Count: {count()}</span>
    <button onclick={() => setCount(count() + 1)}>+</button>
  </div>;
}

export default Counter;
