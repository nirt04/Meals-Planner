import React, { useState } from "react";
import initialData from "../../../../../data/meals-plane";
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
const newSourceTaskIds = Array.from(sourceColumn.tasksIds);
const newDestinationTaskIds = Array.from(destinationColumn.tasksIds);
// remove meal from source column
newSourceTaskIds.splice(source.index, 1);
// adding meal to the destination column
newDestinationTaskIds.splice(destination.index, 0, draggableId);
// creating the new source and destintion object for state mutation
const newSourceColumn = { ...sourceColumn, tasksIds: Array.from(new Set(newSourceTaskIds))  };
const newDestinationColumn = { ...destinationColumn, tasksIds: Array.from(new Set(newDestinationTaskIds)) };
// merging to an 1 object for state mutation
const newColumns = { ...state.columns, [newSourceColumn.id]: newSourceColumn, [newDestinationColumn.id]: newDestinationColumn };
// setting the state with the new Columns object after reordering
setState({ ...state, columns: newColumns });
console.log(newSourceTaskIds)
}
// Logic for draggin inside columns
    else {
      const column = state.columns[source.droppableId];
      const newTaskIds = Array.from(column.tasksIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);
      const newColumn = { ...column, tasksIds: Array.from(new Set(newTaskIds)) };
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
        const tasks = column.tasksIds.map(taskId => state.tasks[taskId]);
        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </DragDropContext>
  );
}
