import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userName : '',
         comments : '',
         course : 'React'
      }
    }
    userNameHandler = (event) => {
        console.log(event.target.value)
        this.setState({
            userName : event.target.value
        })
    }

    commentsHandler = (event) => {
        this.setState({
            comments : event.target.value
        })
    }   
    courseHandler = (event) => {
        this.setState({
            course : event.target.value
        })
    }  
    
    submitForm = event => {
        event.preventDefault();
        alert(`${this.state.userName} ${this.state.comments} ${this.state.course}`)
    }

  render() {
    const {userName,comments,course} = this.state
    return (
      <form onSubmit={this.submitForm}>
            <div>
                <label>UserName</label>
                <input type="text" value={userName} onChange={this.userNameHandler} />
            </div>

            <div>
                <label>Comment</label>
                <textarea value={comments} onChange={this.commentsHandler}></textarea>
            </div>

            <div>
                <label>Select Course</label>
                <select value={course} onChange={this.courseHandler}>
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                    <option value="Vue">Vue</option>
                </select>
            </div>

            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
  }
}

export default Form