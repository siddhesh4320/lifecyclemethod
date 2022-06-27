import React from 'react'


export default function Todo(props) {
  
  return (
    <>
    <div className='todo_style'>
      <li>{props.text}</li>
      <i className="fa-solid fa-square-pen" onClick={props.onedit}></i>
      <i className='fas fa-times' aria-hidden="true" onClick={props.onremove}/>
    </div>
    </>
  )
}
