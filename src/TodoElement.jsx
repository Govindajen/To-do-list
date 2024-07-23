import { useState } from 'react'
import './element.css'

export default function TodoElement(props) {
  

  const [elementToAdd, setElementoToAdd] = useState('')



  return (
    <>
    {(props.completed == false) ? (
      <div className="element">

      <p>{props.about}</p>

      <div>
        <button className='btnComplete' onClick={() =>   props.completeTask(props.index)}>Complete</button>
        <button className='btnDelete' onClick={() =>   props.deleteTask(props.index)}>Delete</button>
      </div>


    </div>
    ) : (
      <div className="element" style={{'background': 'green'}}>

      <p style={{'textDecoration': 'line-through'}}>{props.about}</p>

      <div>
        <button className='btnComplete' onClick={() =>   props.completeTask(props.index)}>Undo</button>
        <button className='btnDelete' onClick={() =>   props.deleteTask(props.index)}>Delete</button>
      </div>


    </div>
    )
    }
    </>
  )
}
