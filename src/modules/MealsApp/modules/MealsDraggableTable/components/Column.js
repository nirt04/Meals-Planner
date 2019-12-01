import React from "react";
import Meal from "../components/Meal";
import { Droppable } from "react-beautiful-dnd";
export default function Column(props) {
  // debugger
  // console.log(props)
  return (
    <div className="mpt--column-container">
      <h3>{props.column.title}</h3>
      <Droppable droppableId={props.column.id}>
        {(provided) => (
          <div className="dragable-list--column-meals-list" {...provided.droppableProps} ref={provided.innerRef} >
            {props.meals.map((meal, i) => ( <Meal key={meal.id} meal={meal} index={i} /> ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
