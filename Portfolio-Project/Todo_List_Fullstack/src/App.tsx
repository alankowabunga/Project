import './App.css'
import { ParticleBg } from './Components/Particles/ParticleBg'
import { TodoWrapper } from './Components/TodoWrapper'

function App() {

  return (

    <>
      <ParticleBg/>
      <div className="App">
        <TodoWrapper/>
      </div>
    </>
  )
}

export default App
