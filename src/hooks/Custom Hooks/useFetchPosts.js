import axios from 'axios'
import { useEffect, useState } from 'react'

const useFetchPosts = (url) => {
const [posts, setPost] = useState([]);
const [loader, setLoader] = useState(true);
const [error, setError] = useState(null)
    useEffect(() => {
        const fetchPosts = async () => {
          try {
            const postData = await axios(url);
            setPost(postData.data);
            setLoader(false);
          } catch(error) {
            setError(error);
            setLoader(false)
          } 
        }

        fetchPosts();
    },[url])
  return (
   {posts, loader, error}
  )
}

export default useFetchPosts