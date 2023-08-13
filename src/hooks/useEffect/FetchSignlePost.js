import axios from "axios";
import React, { useEffect, useState } from "react";

function FetchSignlePost() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  const fetchSinglePost = async () => {
    if(id) {
        const url = `https://jsonplaceholder.typicode.com/users/${id}`
        const postData = await axios.get(url);
        setPost(postData?.data)
    }
  };

  const getId = () => {
    setIdFromButtonClick(id);
  }

  useEffect(() => {
    fetchSinglePost();
  },[idFromButtonClick])

  return (
  <>
  <input type="text" value={id} onChange={(e) => setId(e.target.value) } />
  <button onClick={getId}>Get Id</button>
  <div>{post?.name}</div>
  </>
  )
}

export default FetchSignlePost;
