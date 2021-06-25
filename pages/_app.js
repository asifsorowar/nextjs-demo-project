import Layout from "../components/Layout";
import { ContextWrapper } from "../context/state";
import { ReducerWrapper } from "./../context/reducerContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ReducerWrapper>
      <ContextWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContextWrapper>
    </ReducerWrapper>
  );
}

export default MyApp;
