import React, {useState, useContext, useRef} from 'react'
import {Store} from './StoreProvider'

const Form = () => {

    

    //usamos la funcion onAdd para que al dar click en el boton no se refresque la pagina totalmente
    const onAdd = (event) => {
        event.preventDefault();

        //ya que tenemos las funciones vamos a validar que para crear la nota los campos tengan informacion
        if(title && message){
            dispatch({
                type: 'add-note', //este evento esta en el reducer
                //el paylad le indicamos el estado del titulo y del mensaje
                payload:{
                    title,
                    message
                }
                
            })
            formRef.current.reset() //indicamos nuevamente la referencia para que al dar click se limpien
            //los campos
        }
    }

    /**
     * ahora vamos a crear dos estados locales para
     * creamos dos porque queremos revisar en cualquier momento el estado de nuestros inputs (titulo y mensaje)
     */

    const [title, setTitle] = useState('') //hook donde por defecto el titulo es vacio
    const [message, setMessage] = useState('') //hook donde por defecto el mensaje es vacio

    /**
     * añadimos ahora las funciones que permitiran caputar los cambios de los inputs
     */

    const addTitle = (e) => {
        setTitle(e.target.value);
        
    }

    const addMessage = (e) => {
        setMessage(e.target.value);
    }

    //console.log(title);
    //console.log(message);

    /**
     * Ahora crearemos una nota usando el dispatch del reducer, por lo que importamos store de 
     * StoreProver (ver Arriba)
     */

    //añadimos una referencia del hook donde al dar click en el boton limpie los campos 
    const formRef = useRef(null) //importamos useRef ver arriba

    const{state,dispatch} = useContext(Store)
    return (
        <form ref = {formRef}> {/*añadimos ña referencia del useRef aqui*/}
            <label >Title: </label>
            <input onChange={addTitle} type="text" name="title" />

            <label >Message: </label>
            <input onChange={addMessage} type="text" name="message" />

            <button onClick={onAdd}>Add Note</button>
        </form>
    )
}

export default Form
