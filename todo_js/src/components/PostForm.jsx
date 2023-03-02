import { Component } from "react"
import axios from "axios"
import { nanoid } from "nanoid"
import { useState } from "react";


export default class PostForm extends Component{
    constructor(props){
        super(props)

        this.state = {
            id: nanoid(),
            punchline:'',
            setup:""
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
                    <input type='text' name='id' value={id} onChange={this.changeHandler}></input>
                    </div>
                    <div>
                    <input type='text' name='punchline' value={punchline} onChange={this.changeHandler}></input>
                    </div>
                    <div>
                    <input type='text' name='setup' value={setup} onChange={this.changeHandler}></input>
                    </div>
                    <button>Add button</button>
                </form>
            </div>
        )

    }
    
}

// export default function  PostForm() {
//     const[Id, setId] = useState(1)
//    const[DataChange, setDataChange] = useState({
//     id:Id,
//     punchline:'',
//     setup:''
//    });
  

//     //the changeHandler that holds the changes value
//    const changeHandler = (e) => {
//         setDataChange({[e.target.name] : e.target.value})
//     }
//    const submitHandler = (e) => {
//         e.preventDefault()
//         console.log(DataChange);
//         axios.post("https://api.jokes.digitalrenter.com/api/jokes", DataChange)
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.log(error);
//         })
    
//     }

    
//       //state to hold the value of the input 
//         return (
//             <div>
//                 <form onSubmit={submitHandler}>
//                     <div>
//                     <input type='text' name='id' value={DataChange.id} onChange={changeHandler}></input>
//                     </div>
//                     <div>
//                     <input type='text' name='punchline' value={DataChange.punchline} onChange={changeHandler}></input>
//                     </div>
//                     <div>
//                     <input type='text' name='setup' value={DataChange.setup} onChange={changeHandler}></input>
//                     </div>
//                     <button onClick={(e) => setId(Id + 1)}>Add button</button>
//                 </form>
//             </div>
//         )

//     }
    


