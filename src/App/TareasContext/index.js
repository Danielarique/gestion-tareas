import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TareasContext = React.createContext();

function TareasProvider({ children }) {
  // const tareasDefecto = [ [false], [false], [false,false], [false,false,false], [false,false], [false]]
  const tareasDefecto = [
    {
      id: 1,
      subtareas: [{ idSub: 1, realizada: false }],
    },
    {
      id: 2,
      subtareas: [{ idSub: 1, realizada: false }],
    },
    {
      id: 3,
      subtareas: [
        { idSub: 1, realizada: false },
        { idSub: 2, realizada: false },
      ],
    },
    {
      id: 4,
      subtareas: [
        { idSub: 1, realizada: false },
        { idSub: 2, realizada: false },
        { idSub: 3, realizada: false },
      ],
    },
    {
      id: 5,
      subtareas: [
        { idSub: 1, realizada: false },
        { idSub: 2, realizada: false },
      ],
    },
    {
      id: 6,
      subtareas: [{ idSub: 1, realizada: false }],
    },
  ];
  const { item: tareas, guardarItem: guardarTarea } = useLocalStorage(
    "Tareas",
    tareasDefecto
  );
  const itemsRealizados = tareas.reduce((acc, item) => {
    const subtareasRealizadas = item.subtareas.filter(
      (subtarea) => subtarea.realizada === false
    );
    // if (subtareasRealizadas.length > 0) {
    acc.push({
      id: item.id,
      subtareas: subtareasRealizadas,
    });
    //  }
    return acc;
  }, []);
  const realizarTarea = (idTarea, idSubtarea) => {
    const newItems = [...tareas];
    const tareaIndex = newItems.findIndex((tarea)=> tarea.id ===idTarea);
    const subTareaIndex = newItems[tareaIndex].subtareas.findIndex((subtarea)=> subtarea.idSub === idSubtarea);
  
    newItems[tareaIndex].subtareas[subTareaIndex].realizada = true;
    guardarTarea(newItems); 
  };
  return (
    <TareasContext.Provider value={{ itemsRealizados, realizarTarea }}>
      {children}
    </TareasContext.Provider>
  );
}

export { TareasContext, TareasProvider };
