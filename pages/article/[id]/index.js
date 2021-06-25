// import { useRouter } from "next/router";
import Link from "next/link";
import http from "../../../service/http";

const article = ({ article }) => {
  // const router = useRouter();
  // const { id } = router.query;
  console.log(article);
  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
};

// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );

//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

//   const articles = await res.json();

//   const ids = articles.map((article) => article.id);
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

export const getStaticProps = async (context) => {
  const { article } = await http.get(`/api/articles/${context.params.id}`);

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const { articles } = await http.get("/api/articles");

  const ids = articles.map((article) => article._id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default article;
