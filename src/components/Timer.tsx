import { createSignal, onCleanup } from "solid-js";

function Timer(props: {seconds: number, callback: any}) {
  console.log(props.callback);
  const [count, setCount] = createSignal(props.seconds);

  const interval = setInterval(() => {
    setCount(count() - 1);
    if (count() <= 0)
      if (props.callback) props.callback()
      else window.location.href = '/'
  }, 1000);

  onCleanup(() => {
    clearInterval(interval);
  })

  return <span>{count()}s</span>;
}

export default Timer;
