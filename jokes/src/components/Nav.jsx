import { Component } from "react";
import axios from "axios";
export default class Nav extends Component{

    constructor(props){
      super(props)
      this.state = {
        id:0,
        punchline:'',
        setup:'',
        author_name:'',
        author_email:'',
        author_id:'',
        category_id:0
      }
    }
    //the change handler for holding the change value
     ChangeHandler = (e) => {
      this.setState({[e.target.name] : e.target.value})
      
    }
    submitHandler = (e) => {
      e.preventDefault()
      console.log(this.state);
      axios.post("https://api.jokes.digitalrenter.com/api/jokes", this.state)
      .then(response => {
          console.log(response);
      })
      .catch(error => {
          console.log(error);
      })

      this.setState({
        id:0,
        punchline:'',
        setup:'',
        author_name:'',
        author_email:'',
        author_id:'',
        category_id:0
      })
  }
  
  render(){

    const{id, punchline,setup,author_id, author_name, author_email, category_id} = this.state

  return(
    <div>
       <form className="form-container" onSubmit={this.submitHandler}>
         <div className="input-container">
         <h2 className="add-joke-heading">
                Add a Joke to your most Cherised Joke Site
         </h2>
         <label className="author-label">Id</label>
            <input
            type="text"
            id="new-joke"
            name="_id"
            className="author-name-input"
            value={id}
            onChange={this.ChangeHandler}
            />
            <label className="author-label">Authors Name</label>
            <input
            type="text"
            id="new-joke"
            name="author_name"
            className="author-name-input"
            value={author_name}
            onChange={this.ChangeHandler}
            />

            <label className="comment-label">Author Email</label>
            <input
            type="text"
            id="new-joke"
            name="author_email"
            className="comment-input"
            value={author_email}
            onChange={this.ChangeHandler}
            />

            <label className="comment-label">Author Id</label>
            <input
            type="text"
            id="new-joke"
            name="author_id"
            className="comment-input"
            value={author_id}
            onChange={this.ChangeHandler}
            />

            <label className="joke-label">New Joke</label>
            <textarea
            type="text"
            id="new-joke"
            name="punchline"
            className="joke-input"
            value={punchline}
            onChange={this.ChangeHandler}
            />

             <label className="joke-label">Set Up</label>
            <textarea
            type="text"
            id="new-joke"
            name="setup"
            className="joke-input"
            value={setup}
            onChange={this.ChangeHandler}
            />

            <label className="comment-label">Category Id</label>
            <input
            type="text"
            id="new-joke"
            name="category_id"
            className="comment-input"
            value={category_id}
            onChange={this.ChangeHandler}
            />
            
         </div>
         <div className="joke-buttons">
         <button type="submit"  className="submit-button1">Back</button>
         <button type="submit"  className="submit-button2">Submit</button>
         </div>
        </form>
    </div>
    
    )
  }
}