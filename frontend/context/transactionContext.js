import {createContext, useReducer} from 'react';

import transactionReducer, { initState } from '../reducers/transactionReducer';

export const TransactionContext = createContext();

export const TransactionContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(transactionReducer, initState);

    return(
        <TransactionContextProvider value={{
            state, dispatch
        }}>
            { children }
        </TransactionContextProvider>
    )
}