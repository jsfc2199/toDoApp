import React, { useContext } from 'react'
import { Store } from './StoreProvider'

/**
 * Como este componente esta dentro de ServiceProveder en la app podrá tener acceso al estado global
 * 
 */



const ListOfToDo = () => {

    const { state, dispatch } = useContext(Store) //ahora podemos acceder a la informacion de StoreProveder
    //desde listOfTodo

    //console.log(state); //si impromimos el estado podemos ver que si podemos acceder a las notas y la lista

    const onCheckBox = (event, note)=>{
        const checked = event.currentTarget.checked;

        //usamos ahora la accion del reducer con el escenario update
        dispatch({
            type: 'update-note',

            //indicamos la nota que tenemos y el cambio de si esta done
            payload: {
                ...note, 
                done: checked
            }
        })
    }

    //creacion de funcion de eliminar
    const onDelete = (note) =>{
        //console.log(note);
        dispatch({
            type: 'remove-note',
            payload: note
        })
    }

    return (
        <div>
            <h1>Actions pending to be done</h1>
            <ul>
                {
                    state.listOfNotes.map(note => {
                        //si la accion tiene un done = true lo tachará de la lista, si no lo dejará normal
                        return <li style = {note.done?{textDecoration: 'line-through'}:{}} key={note.id}> 
                            {note.title} <br/>
                            {note.message} <br/>

                            {/*añadimos que la nota tenga un cuadro de si esta lista o no
                            ademas le agregamos la funcion onChange donde tendremos el evento lo pasarempos
                            a la funcion onCheckBox junto con la nota con la cual estamos trabajando en ese
                            momento, es decir la que estamos trayendo de la funcion map linea 40
                            */}
                            <input onChange = {(event) => onCheckBox(event,note)}type="checkbox" checked={note.done}  />                
                            
                            
                            {/*añadimos boton delete para borrar un elemento de la lista
                            */}
                            <button onClick={()=>onDelete(note)}>Delete</button>
                        </li>
                    })
                }
            </ul>

        </div>
    )
}

export default ListOfToDo
