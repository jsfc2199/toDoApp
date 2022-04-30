import React, { useContext } from 'react'
import { Store } from './StoreProvider'

/**
 * Como este componente esta dentro de ServiceProveder en la app podrá tener acceso al estado global
 * 
 */



const ListOfToDo = () => {

    const { state, dispatch } = useContext(Store) //ahora podemos acceder a la informacion de StoreProveder
    //desde listOfTodo

    console.log(state); //si impromimos el estado podemos ver que si podemos acceder a las notas y la lista

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
                        </li>
                    })
                }
            </ul>

        </div>
    )
}

export default ListOfToDo
