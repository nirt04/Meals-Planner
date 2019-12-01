import React, { useEffect } from "react";
import "./MealsDraggableTable.scss";
import DraggableList from "./components/DraggableList";
export default function MealsDraggableTable() {
  useEffect(() => console.log("MealsPlannerTable mounted"), []);
  return (
    <div className="DraggableList--main-container" >
      <h1>hello from MealsPlannerTable </h1>
      {/* <MaterialUiTable /> */}
      <DraggableList />
    </div>
  );
}
