// Actions Types
// convención: module/action
// en mvc sería algo así como el controlador
const INCREMENT = 'COUNT/INCREMENT'
const DECREMENT = 'COUNT/DECREMENT'
const SET = 'COUNT/SET'

// Actions Creators
export const increment = () => ({
    type: INCREMENT
})

export const decrement = () => ({
    type: DECREMENT
})

// por convención siempre que se quiera adjuntar datos en el Action Creator debemos recibir una propiedad
// esa propiedad debe llamarse siempre PAYLOAD
export const set = payload => ({
    type: SET,
    payload
})


// Reducer:
// los reducers tienen que retornar estados inmutables.
// es decir, los estados que pasan por reducers deben ser copias, se puede usar el spread operator
// para que la copia que se retorna sea un objeto distinto al que llega al reducer
// y se pueda actualizar el estado.

// es decir, no podemos usar push ni splice u otros similares para modificar los arrays.
const initialState = 0
export default function (state = initialState, action){
    switch (action.type) {
        case INCREMENT:
            return state + 1
        case DECREMENT:
            return state - 1
        case SET:
            return action.payload
        default:
            return state
    }
}