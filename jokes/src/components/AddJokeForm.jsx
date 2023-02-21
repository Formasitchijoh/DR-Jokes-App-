import { useState } from "react"
import '../styles/form.css'
export default function AddJoke(props){ 
    
    return (
        <form className="form-container" onSubmit={props.handleSubmit}>
         <h2 className="add-joke">
            <label htmlFor="new-todo-input">
                Add a Joke to your most Cherised Joke Site
            </label>
         </h2>
         <div className="input-container">
           <div className="author-container">
            <label className="author-name-label">Authors Name</label>
            <input
            type="text"
            id="new-joke"
            className="author-name-input"
            onChange={props.handleAuthorName}
            
            />
           </div>
           <div className="joke-container">
            <label className="joke-label">New Joke</label>
            <textarea
            type="text"
            id="new-joke"
            className="joke-input"
          onChange={props.handleNewJokeChange}
            />
           </div>
         </div>
         <button type="button" className="submit-button">Add</button>
        </form>
    )
}