import React, { useEffect } from "react";
import "./MealsDraggableTable.scss";
import DraggableList from "./components/DraggableList";
export default function MealsDraggableTable() {
  useEffect(() => console.log("MealsPlaneTable mounted"), []);
  return (
    <div>
      <h1>hello from MealsPlaneTable </h1>
      {/* <MaterialUiTable /> */}
      <DraggableList />
    </div>
  );
}
