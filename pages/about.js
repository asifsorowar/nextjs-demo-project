import Head from "next/head";

const about = () => {
  return (
    <div>
      <Head>
        <title>About Page</title>
        <meta
          name="about"
          content="web development, programming, asif sorowar"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h3>Hello about</h3>
    </div>
  );
};

export default about;
