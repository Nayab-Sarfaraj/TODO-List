import React, { useEffect, useState } from 'react'
import Form from './Form'
import Card from './Card'
import { LoadCard } from './LoadCard'
const Home = () => {
    const[tasks,setTasks]=useState([])
    const [editedTask,seteditedTask]=useState(null)
const addTask=(task)=>{

if(tasks){
    setTasks([...tasks,{...task,id:tasks.length+1}])
   
}else{
    setTasks({...task,id:tasks.length+1})
}
}
const deleteTask=(id)=>{
    const updatedTasks=tasks.filter((task)=>task.id!=id)
    console.log(updatedTasks)
    setTasks(updatedTasks)
}
const editTask=(id)=>{
   
  
    seteditedTask(tasks.find((task)=>task.id===id))
}

const bg={
    background: "rgb(238,174,202)",
background:" radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(203,179,214,1) 39%, rgba(148,187,233,1) 100%)"
}
  return (
    <div className='h-screen w-screen md:px-40 px-4' style={bg}>
        
     <div className='w-full h-full px-5 flex justify-center items-center flex-col '>
        <h1 className="font-bold text-2xl md:text-4xl mb-3">Todo List </h1>
      <Form  onSubmit={addTask} seteditedTask={editedTask}/>  
      <LoadCard tasks={tasks} deleteTask={deleteTask} editTask={editTask}/>
  
     </div>
    </div>
  )
}

export default Home
