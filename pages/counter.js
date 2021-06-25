import Counter from "./../components/Counter";
import { useAppContext } from "../context/state";
import Head from "next/head";

const counter = () => {
  const [count, setCount] = useAppContext();
  return (
    <>
      <Head>
        <title>Context State Test</title>
        <meta
          name="about"
          content="counter, web development, programming, asif sorowar"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Counter count={count} setCount={setCount} />
    </>
  );
};

export default counter;
