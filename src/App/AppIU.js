import React from "react";
import { TareasContext } from "./TareasContext";
import TareasList from "./TareasList";
import './AppIU.css';
function AppIU(){
    const {  itemsRealizados } = React.useContext(TareasContext);
    return(
        <React.Fragment>
            <div className="contenedor-tareas">
                {itemsRealizados.map((tarea) => (
                <TareasList key={tarea.id} tarea={tarea}/>
                ))}
            </div>
           
        </React.Fragment>
    )
}

export { AppIU };