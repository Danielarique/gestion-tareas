import Card from "react-bootstrap/Card";
import { SubTareasList } from "./SubTareasList";
import { TareasContext } from "../TareasContext";
import React from "react";

function TareasList({tarea}) {
  const { realizarTarea } = React.useContext(TareasContext);
  const idTarea = tarea.id;
  return (
    <Card className="m-4">
      <Card.Header as="h5">Tarea # {tarea.id}</Card.Header>
      <Card.Body className="d-flex flex-column">
       {  tarea.subtareas.map((subtarea,indexSub) => (
           <SubTareasList
            key={subtarea.idSub}
            idSubtarea={subtarea.idSub}
            idTarea={tarea.id}
            onComplete={() => realizarTarea(idTarea,subtarea.idSub)} 
          /> 
        ))} 
      </Card.Body>
    </Card>
  );
}

export default TareasList;
