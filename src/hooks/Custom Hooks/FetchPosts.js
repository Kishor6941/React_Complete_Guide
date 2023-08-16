import React from 'react'
import useFetchPosts from './useFetchPosts';

const FetchPosts = () => {
    const Url = 'https://jsonplaceholder.typicode.com/users';
     const {posts, loader, error}= useFetchPosts(Url);
     if(loader) {
        return <h1>Loading........</h1>
     }
     if(error) {
        return <h1>Someting Went Wrong...</h1>
     }
  return (
    <>
    <h1>User Name</h1>
    { posts && (
        <ul>
            {
                posts.map((user) => {
                 return <li key={user?.id}>{user?.name}</li>
                })
            }
        </ul>
    )
    }
    </>
  )
}

export default FetchPosts