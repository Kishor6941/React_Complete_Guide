import React from "react";
import useFetchPosts from "./useFetchPosts";

const FetchImage = () => {
  const Url = "https://fakestoreapi.com/products";
  const { posts, loader, error } = useFetchPosts(Url);
  if (loader) {
    return <h1>Loading........</h1>;
  }
  if (error) {
    return <h1>Someting Went Wrong...</h1>;
  }
  return (
    <div>
      {posts.map((photo) => {
        return <img key={photo?.id} src={photo?.image} alt="" />;
      })}
    </div>
  );
};

export default FetchImage;
