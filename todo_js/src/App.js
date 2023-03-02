import React from "react";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";
import  { useState } from "react";
import { nanoid } from "nanoid"; //used to produce a unique key for each todo

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed
};
const FILTER_NAMES = Object.keys(FILTER_MAP);


function App(props) {
//hook ie useState
const [tasks, setTasks] = useState(props.tasks);
const [filter, setFilter] = useState('All');

/****
 * Toggling a task 
 */

function toggleTaskCompleted(id){ 
  const updatedTasks = tasks.map((task) => {

    //checking if this task have the same id as the edited task
    if(id === task.id){
      //using object spread to make object
      //whose completed prop has been inverted

      return {
        ...task, completed:!task.completed
      }
    }
    return task;

  });

  setTasks(updatedTasks);
}

/***
 * Deleting a task from the list and then updating  the form
 */

function deleteTask(id){
const remainingTasks = tasks.filter((task) => id !== task.id);
setTasks(remainingTasks);
}


//Editingt the said task when

function editTask(id, newName){

  const editedTaskList = tasks.map((task) => {

    if(id === task.id){
      return {
        ...task, name:newName
      }
    }
    return task;
  });
  setTasks(editedTaskList);
}


//Callback props are added to the todo.js component that is rendered here
  const taskList = tasks.filter(FILTER_MAP[filter]).map((task) => (
    <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    )
  );

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton 
    key={name} 
    name={name}
    isPressed={name === filter}
    setFilter={setFilter}
    />
  ));
  
  
  //Adding task into the Form components
  function addTask(name) {
  
    const newTask = {id:`todo-${nanoid()}`, name, completed:false};
    setTasks([newTask, ...tasks]);
  }

  //counting the amount of task that are found in your form

  const taskNum = taskList.length !== 1? 'tasks' : 'task';
  const headingText = `${taskList.length} ${taskNum} remaining`;

  

  return (
    <div className="todoapp stack-large">
      <h1>Tech Invationc</h1>
      <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
      {filterList}

      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
