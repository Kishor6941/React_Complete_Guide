import axios from 'axios'
import React,{useState, useEffect} from 'react'

function DataFetching() {
    const [posts, setPosts] = useState([]);

const fetchPostData = async () => {
   const postData = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setPosts(postData.data)
}

    useEffect(() => {
        fetchPostData();
    },[])


  return (
    <>
    <ul>
    {
      posts.map((post)=> ( <li key={post?.id}>{post?.title}</li>))
    }
    </ul>
    </>
  )
}

export default DataFetching