import React, { useEffect, useState } from "react";

const Form = ({ onSubmit, editedTask ,updateTask}) => {
  const initialstate = {
    task: "",
    description: "",
  };
  const [task, setTask] = useState(initialstate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(editedTask){
        updateTask(task)
        setTask(initialstate)

    }else{

      

        onSubmit(task);
        setTask(initialstate);
        
    }

  };
  const hanleChange= (e)=>{
  
    setTask({ ...task, [e.target.name]: e.target.value })
  }
  
  const bg = {
    background: "#77a1d3",
    background:
      "-webkit-linear-gradient(to right, #77a1d3, #79cbca, #e684ae)" /* Chrome 10-25, Safari 5.1-6 */,
    background:
      "linear-gradient(to right, #77a1d3, #79cbca, #e684ae)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
  };
  useEffect(()=>{
    if(editedTask){
        console.log(editedTask)
        setTask(editedTask)
    }

  },[editedTask])
  return (
    <form
      className="p-10 rounded-lg flex flex-col gap-5 w-full  "
      style={bg}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="px-2 py-1 text-xl w-full"
        placeholder="Task"
        value={task.task}
        name="task"
        onChange={hanleChange}
      />

      <input
        type="text"
        className="px-2 py-1 text-xl w-full"
        placeholder="Enter todo"
        name="description"
        value={task.description}
        onChange={hanleChange}
   
      />
      <button className="text-xl bg-slate-300 text-black px-2 py-1 hover:bg-slate-200">
        {editedTask?'EDIT':'ADD'}
      </button>
    </form>
  );
};

export default Form;
