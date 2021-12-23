import { TransactionContextProvider } from "./context/transactionContext"
import HomeScreen from "./screens/HomeScreen"

const App = () => {
  return (    
      <TransactionContextProvider>
        <HomeScreen />
      </TransactionContextProvider>    
  )
}

export default App
