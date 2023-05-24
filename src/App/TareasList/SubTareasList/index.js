import Button from 'react-bootstrap/Button';


function SubTareasList({idSubtarea, idTarea, onComplete}){
    return(
        <Button variant="primary" className='mt-2' onClick={onComplete}>Hacer Tarea #{idTarea}.{idSubtarea}</Button>
    );
}

export { SubTareasList }