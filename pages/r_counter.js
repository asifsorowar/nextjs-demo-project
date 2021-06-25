import Counter from "./../components/Counter";
import { useReducerValue, actionType } from "../context/reducerContext";
import Head from "next/head";

const counter = () => {
  const [{ count }, dispatch] = useReducerValue();

  const seCount = (count) => {
    // console.log(count);
    dispatch({ type: actionType.incrementCount });
  };

  return (
    <>
      <Head>
        <title>Reducer State Test</title>
        <meta
          name="about"
          content="counter, web development, programming, asif sorowar"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Counter count={count} setCount={seCount} />
    </>
  );
};

export default counter;
