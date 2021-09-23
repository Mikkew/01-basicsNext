import React from "react";
import Link from "next/link";
import { Title } from "../../components/Title";

import styles from "../../styles/pages/posts/index.module.css";

const Posts = ({ posts }) => {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const fetchPost = async () => {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/posts"
  //     );
  //     const jsonResponse = await response.json();
  //     setPosts(jsonResponse);
  //   };

  //   fetchPost();
  // }, []);

  return (
    <>
      <Title name="Posts Pages" />
      <div className={styles.grid}>
        {posts.map((key, index) => (
          <div key={index} className={styles.card}>
            <Link
              href={{
                pathname: "/posts/[post]",
                query: { post: key.id },
              }}
            >
              <a>
                <h3 className={styles.h3}> {key.title} </h3>
              </a>
            </Link>
            <p className={styles.p}>{key.body}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export const getServerSideProps = async() => {
  // Fetch data from external API
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  // Pass data to the page via props
  return { props: { posts } };
}

export default Posts;
