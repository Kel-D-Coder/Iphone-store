import { initialState, reducer } from "./reducer";
import { createContext, useReducer } from "react";

export const cartContext = createContext()

export const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const add = (product) => {
        const items = state.phones
        items.push(product)

        dispatch({
            type: 'add',
            payload: items
        })
    }

    const remove = (product) => {
        const items = state.phones.filter((phone) => phone.name !== product.name)

        dispatch({
            type: 'remove',
            payload: items
        })
    }

    const value = {
        add,
        remove,
        cartState: state.phones
    }

    return (
        <cartContext.Provider value={value}>
            {children}
        </cartContext.Provider>
    )
}