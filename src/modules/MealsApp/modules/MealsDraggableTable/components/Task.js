import React from "react";
import { Draggable } from "react-beautiful-dnd";
export default function Task(props) {
  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="mpt--column-Task"
        >
          <div className="mpt--task-img" style={{backgroundImage: `url(${props.task.imgSrc || 'https://via.placeholder.com/50'})`}}  />
          <div className="mpt--task-info-container">
            <a onClick={(e)=>e.preventDefault()} href="">{props.task.content}</a>
            <div className="mpt--task-unit-info">
              <input type="number" disabled value="1" />
              <select>
                <option value="gram">gram</option>
                <option value="food_unit">
                  {props.task.unitName || "serving"}
                </option>
              </select>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}
