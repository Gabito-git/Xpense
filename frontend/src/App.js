import { TransactionContextProvider } from "./context/transactionContext";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (    
      <TransactionContextProvider>
        <AppRouter />
      </TransactionContextProvider>    
  )
}

export default App
