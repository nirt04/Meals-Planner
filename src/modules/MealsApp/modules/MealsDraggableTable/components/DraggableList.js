import React, { useState } from "react";
import initialData from "../../../../../data/meals-planner";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "../components/Column";
import { format } from "util";
export default function DraggableList() {
  const [state, setState] = useState(initialData);
  const onDragEnd = ({ destination, source, draggableId }) => {
  debugger
if(!destination) return
// Logic for dragging between columns
if (destination.droppableId !== source.droppableId || destination.index === source.index ) {
// Store source and Destination columns
const sourceColumn = state.columns[source.droppableId];
const destinationColumn = state.columns[destination.droppableId]
// Store new meals Ids of each columns
const newSourceMealIds = Array.from(sourceColumn.mealsIds);
const newDestinationMealIds = Array.from(destinationColumn.mealsIds);
// remove meal from source column
newSourceMealIds.splice(source.index, 1);
// adding meal to the destination column
newDestinationMealIds.splice(destination.index, 0, draggableId);
// creating the new source and destintion object for state mutation
const newSourceColumn = { ...sourceColumn, mealsIds: Array.from(new Set(newSourceMealIds))  };
const newDestinationColumn = { ...destinationColumn, mealsIds: Array.from(new Set(newDestinationMealIds)) };
// merging to an 1 object for state mutation
const newColumns = { ...state.columns, [newSourceColumn.id]: newSourceColumn, [newDestinationColumn.id]: newDestinationColumn };
// setting the state with the new Columns object after reordering
setState({ ...state, columns: newColumns });
console.log(newSourceMealIds)
}
// Logic for draggin inside columns
    else {
      const column = state.columns[source.droppableId];
      const newMealIds = Array.from(column.mealsIds);
      newMealIds.splice(source.index, 1);
      newMealIds.splice(destination.index, 0, draggableId);
      const newColumn = { ...column, mealsIds: Array.from(new Set(newMealIds)) };
      const newColumns = { ...state.columns, [newColumn.id]: newColumn };
      setState({ ...state, columns: newColumns });
    }


  } 

    // TODO Add placeholder meal when colum is empty and make it visable only ondrag event so it will be easier to drag to an empty column
 
  


  
  console.log("state:", state);

  return (
    <DragDropContext
      onDragStart={() => console.log("onDragStart")}
      onDragStart={() => console.log("onDragStart")}
      onDragEnd={onDragEnd}
    >
      {state.columnOrder.map(columnId => {
        const column = state.columns[columnId];
        const meals = column.mealsIds.map(mealId => state.meals[mealId]);
        return <Column key={column.id} column={column} meals={meals} />;
      })}
    </DragDropContext>
  );
}
