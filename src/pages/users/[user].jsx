import React from "react";
import { useRouter } from "next/router";
import { Title } from "../../components/Title";

const User = ({ user }) => {

  const router = useRouter();

  if(router.isFallback){
    return (<div>Cargando...</div>)
  }

  return (
    <>
      <Title name="User Details" />
      <h2>User: {user.id}</h2>
      <h3>Username: {user.username}</h3>
      <div>
        <strong>Address:</strong>
        <p>
          {user.address.street},{user.address.suite},{user.address.city}
        </p>
      </div>
      <div>
        <strong>Company:</strong>
        <p>{user.company.name}</p>
      </div>
      <div>
        <strong>Phone:</strong> {user.phone}
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await res.json();

  // const paths = [{ params: { user: "1" } }, { params: { user: "2" } }];
  const paths = users.map(user => ({ params: { user: `${user.id}`}}))

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { user: id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();

  if (user == undefined) {
    return {
      notFound: true,
    };
  }

  return {
    props: { user }, // will be passed to the page component as props
  };
};

export default User;
