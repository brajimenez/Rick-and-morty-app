import Location from './components/Location'
import './App.css'
import rickAndMorty from './assets/rick-morty.jpg'

function App() {

  return (
    <div className="App">
      <img src={rickAndMorty} alt="" className='cover-image'/>
      <h1>Rick and Morty's World</h1>
      
      <Location />
    </div>
  )
}

export default App
