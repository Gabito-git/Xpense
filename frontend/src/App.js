import { TransactionContextProvider } from "./context/transactionContext"
import HomeScreen from "./screens/HomeScreen"

const App = () => {
  return (
    <div>
      <TransactionContextProvider>
        <HomeScreen />
      </TransactionContextProvider>
    </div>
  )
}

export default App
