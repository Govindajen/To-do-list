import { useState, useEffect } from 'react';
import TodoElement from './TodoElement';
import './App.css'

function App() {
  
  const [elementToAdd, setElementoToAdd] = useState('')

  const [Tasks, setTasks] = useState([]);

  function deleteTask (props) {
    let tempArray = []

    Tasks.map((data, index) => {
      if(props !== index) {
        tempArray.push(data)
      }
    })
    
    setTasks(tempArray)
  }

  function completeTask (props) {

    let tempArray = []

    Tasks.map((data, index) => {
      if(props == index) {

        tempArray.push({
          "about": data.about,
          "completed": !data.completed
        })
      
      } else {
        tempArray.push(data)
      }
      
    })
    
    setTasks(tempArray)
    
  }

  function addElement (props) {
    setTasks([...Tasks, {
      "about": props,
      "completed": false
    }])

    setElementoToAdd('')
  }

  const todoElements = Tasks.map( (data, index) => {
    console.log(data)
    
    return (
      <TodoElement deleteTask={deleteTask}
                  completeTask={completeTask}
                   about={data.about} 
                  completed={data.completed}
                  index={index}
                  key={index}/>
  )
  } )


  return (
    <>
      <div className="container">
        <h1>To Do List</h1>

        <button className="deleteAll" onClick={() => setTasks([])}>Delete all Tasks</button>

      <div className="addArea">

        <input 
          className='inputAddElement'
          type='text'
          value={elementToAdd}
          onChange={(e) => setElementoToAdd(e.target.value)}
          />
        
        <button className="addBtn" onClick={() => addElement(elementToAdd)}>Add</button>

        </div>
        {todoElements.length >= 1 && 
          <div className='elementsContainer'>
           {todoElements}
           </div>
        }


      </div>
    </>
  )
}

export default App
