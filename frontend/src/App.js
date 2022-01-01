import { AuthContextProvider } from "./context/authContext";
import { TransactionContextProvider } from "./context/transactionContext";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (  
    <AuthContextProvider> 
      <TransactionContextProvider>
        <AppRouter />
      </TransactionContextProvider>  
    </AuthContextProvider>   
  )
}

export default App
