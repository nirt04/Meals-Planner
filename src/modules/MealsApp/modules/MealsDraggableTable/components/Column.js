import React from "react";
import Task from "../components/Task";
import { Droppable } from "react-beautiful-dnd";
export default function Column(props) {
  // debugger
  // console.log(props)
  return (
    <div className="mpt--column-container">
      <h3>{props.column.title}</h3>
      <Droppable droppableId={props.column.id}>
        {(provided) => (
          <div className="dragable-list--column-tasks-list" {...provided.droppableProps} ref={provided.innerRef} >
            {props.tasks.map((task, i) => ( <Task key={task.id} task={task} index={i} /> ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
