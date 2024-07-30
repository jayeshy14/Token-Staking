import './App.css'
import DisplayPannel from './components/display pannel/DisplayPannel'
import Navigation from './components/navigation/Navigation'
import Wallet from './components/Wallet'

function App() {

  return (
    <>
      <Wallet>
        <Navigation/>
        <DisplayPannel/>
      </Wallet>
    </>
  )
}

export default App
