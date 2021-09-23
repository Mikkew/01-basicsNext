import React from 'react';
// import Head from 'next/head';
import { Title } from '../../components/Title';

const Post = ({ post  }) => {
  return (
    <>
      {/* <Head>
        <title>Post Details</title>
      </Head> */}
      <Title name="Post Details" />
      <h2>POST ID: {post.id}</h2>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const { post: id } = params;
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  // Pass data to the page via props
  return { props: { post } }
}

export default Post;