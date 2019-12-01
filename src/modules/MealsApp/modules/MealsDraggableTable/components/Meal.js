import React from "react";
import Icon from "@material-ui/core/Icon";
import Loop from "@material-ui/icons/Loop";
import Menu from "@material-ui/icons/Menu";
import { Draggable } from "react-beautiful-dnd";
export default function Meal(props) {
  return (
    <Draggable draggableId={props.meal.id} index={props.index}>
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="mpt--column-Meal"

        >
          <div className="mpt--meal-info-container">
            <div
              className="mpt--meal-img"
              style={{
                backgroundImage: `url(${props.meal.imgSrc ||
                  "https://via.placeholder.com/50"})`
              }}
            />
            <div>
              <a onClick={e => e.preventDefault()} href="">
                {props.meal.content}
              </a>
              <div className="mpt--meal-unit-info">
                <input type="text" value="1" />
                <select>
                  <option value="gram">gram</option>
                  <option value="food_unit">
                    {props.meal.unitName || "serving"}
                  </option>
                </select>
              </div>
            </div>

            {/* <Icon>{AccessAlarms}</Icon> */}
          </div>
          <div className="mpt-meal-btn-actions">
            <Loop />
            <Menu />
          </div>
        </div>
      )}
    </Draggable>
  );
}
