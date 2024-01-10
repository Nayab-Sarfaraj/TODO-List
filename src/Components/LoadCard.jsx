import React from 'react'
import Card from './Card'
export const LoadCard = (props) => {
    const tasks=props.tasks
    const deleteTask=props.deleteTask
    const editTask=props.editTask
    
  return (
<>
{
    tasks.map((task)=><Card task={task} deleteTask={deleteTask} editTask={editTask}/>)
}
</>
  )
}
