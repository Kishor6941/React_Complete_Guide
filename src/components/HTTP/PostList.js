import axios from 'axios'
import React, { Component } from 'react'

export class PostList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       posts : [],
       errorMsg : ''
    }
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      this.setState({
        posts : res.data
      })
    })
    .catch((err) => {
     this.setState({errorMsg : 'Error retreiving data'})
    })
  }

  render() {
    const {posts,errorMsg} = this.state
    return (
      <div>
        {
          posts.length ?
          posts.map((post) => {
            return <h1 key={post.id}>{post?.name}</h1>
          })
          : <h1>{errorMsg}</h1>
        }
      </div>
    )
  }
}

export default PostList