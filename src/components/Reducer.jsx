//ES UNA FUNCION QUE NOS PERMITE MANJEAR EL ESTADO GLOBAL BASADO EN CIERTO ESCENARIOS
/**
 * Recibe dos parametros esta funcion, el primero es el estado global la cual se recibe automaticamente
 * porque será pasado por el StoreProvider, es decir que recibirá el estado por defecto
 * 
 * El segundo parametro es una accion, que es la accion que vamos a estar enviando cuando usamos un
 * trigger (activador) que podemos usar para ejecutar esta función recuder
 */
function reducer(state, action) {
    /**
     * Funciona bajo escenarios, por lo que los identificamos con un switch
     * donde estaremos identificando el tipo de escenario (accion)     * 
     */
    
    switch(action.type){
        /**
         * Accederemos solo al estado que hayamos definido en el switch con el fin de manipular el estado
         * de acuerdo a ese escenario
         */
        case 'add-note':
            console.log('adding note') //para verificar que el boton funciona cuando es apra añadir nota
            //modificamos la funcion para pasarle una nota añadida
            const newNote = {
                id : Math.floor(Math.random()*10000), //id aleatorio
                message: action.payload.message, //usamos el payload del formulario
                title: action.payload.title, //usamos el payload del formulario
                done: false
            }

            //creamos una lista que tenga las notas de antes y le añadimos la nueva
            const newListOfNotesAddedOne = [...state.listOfNotes, newNote] 

            //esto lo que termina siendo es el estado que reemplazará el estado que teniamos antes, es decir
            //el estado que teniamos por defecto
            const newStateAddNote = {
                ...state, listOfNotes: newListOfNotesAddedOne
            }
            return newStateAddNote
        case 'remove-note':
        return state
        case 'update-note':
            return state
    }

    //todos los estados se retornan luego de que los hayamos manipulado basados en el escenario y la 
    //informacion que hemos enviado
}

export default reducer;