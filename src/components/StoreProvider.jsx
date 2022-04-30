import React, { createContext, useReducer } from 'react'
import reducer from './Reducer'

/**
 * Codificaremos el estado inicial que queremos tener en la aplicación, el cual será de momento un objeto con
 * informacion el cual estará disponible en toda la aplicación a través de este estado global * 
 */

const initialState = {
    //tendremos la nota
    note:{
        id:'',
        title:'',
        message: '',
        done: false, //indica si está hecha o no la nota
    },
    listOfNotes:[
        //la lista de las notas, tenemos una por default para ver si todo está funcionando bien
        {
            id:'0',
            title:'Title by default',
            message: 'Message by default',
            done: true,
        }
    ]
}

//funcion que creará nuestro contexto donde le pasaremos nuestro estado inicial. Por convencion se llama Store
const Store = createContext(initialState)

const StoreProvider = ({children}) => {
    //pasamos un children porque queremos que nuestro StoreProvider eventualmente englobe todo
    /**
     * lo hacemos así porque queremos que el StoreProvider nos provea el estado global
     */

    //El dispatch es el disparador que vamos a usar para ejecutar cambios en el estado

    const [state,dispatch] = useReducer(reducer, initialState) //hook
  return (
    <Store.Provider value={{state,dispatch}}>
        {/* El state y el dispach se usan con el reducer para manipular el estado global  
        Estaremos pasando con el StoreProvider el estado que hemos retirado del hook y el dispatch
        que es el trigger*/}
        {children}
    </Store.Provider>
  )
}

export default StoreProvider
export {Store, initialState} //para poder acceder a ellos desde otro lado
