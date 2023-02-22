import { Component } from "react"
import axios from "axios"

export default class PostForm extends Component{
    constructor(props){
        super(props)

        this.state = {
            id:2,
            tpunchline:'',
            setup:4
        }
    }

    //the changeHandler that holds the changes value
    changeHandler = (e) => {
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
    }

    render(){ 
        const{id, punchline, setup} = this.state  //state to hold the value of the input 
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                    <input type='text' name='userId' value={id} onChange={this.changeHandler}></input>
                    </div>
                    <div>
                    <input type='text' name='title' value={punchline} onChange={this.changeHandler}></input>
                    </div>
                    <div>
                    <input type='text' name='body' value={setup} onChange={this.changeHandler}></input>
                    </div>
                    <button>Add button</button>
                </form>
            </div>
        )

    }
    
}