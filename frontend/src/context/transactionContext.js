import {createContext, useReducer} from 'react';

import {transactionReducer,  initState } from '../reducers/transactionReducer';

export const TransactionContext = createContext();

export const TransactionContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(transactionReducer, initState);

    return(
        <TransactionContext.Provider value={{
            state, dispatch
        }}>
            { children }
        </TransactionContext.Provider>
    )
}