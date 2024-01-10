import React from "react";

const Card = (props) => {

  const deleteTask = props.deleteTask;
  const editTask=props.editTask
  const handleClick = (id) => {
    deleteTask(id);
  };
  const handleEdit=(id)=>{
    editTask(id)
  }
  return (
    <div className="flex items-center md:justify-between justify-center w-full bg-white md:mt-5 mt-2 md:px-2 md:py-1 px-1 py-0 text-xl  xl:flex-row flex-col">
      <h1> {props.task.task}</h1>
      <h1>{props.task.description}</h1>
      <div >
      <i class="ri-file-edit-line text-red-900 mr-3" onClick={()=>handleEdit(props.task.id)}></i>
      <i
        class="ri-close-circle-line text-red-900 "
        onClick={() => handleClick(props.task.id)}
      ></i>
     
      </div>
     
    </div>
  );
};

export default Card;
