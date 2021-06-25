import Head from "next/head";
import ArticleList from "./../components/ArticleList";
import http from "../service/http";

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta
          name="description"
          content="web development, programming, asif sorowar"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ArticleList articles={articles} />
      <h3>Welcome to Next</h3>
    </div>
  );
}

// export const getStaticProps = async () => {
//   const res = await fetch(
//     "https://jsonplaceholder.typicode.com/posts?_limit=6"
//   );
//   const articles = await res.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };

export const getStaticProps = async () => {
  const { articles } = await http.get("/api/articles");

  return {
    props: {
      articles,
    },
  };
};
