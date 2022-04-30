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
            return state
        case 'remove-note':
        return state
        case 'update-note':
            return state
    }

    //todos los estados se retornan luego de que los hayamos manipulado basados en el escenario y la 
    //informacion que hemos enviado
}

export default reducer;