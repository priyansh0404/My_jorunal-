import './style/App.css'
import NavBar from './components/NavBar'
import { Route, Routes} from 'react-router-dom'
import AddEntry from './components/AddEntry'
function App() {

  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<h1>Journal list</h1>}/>
        <Route path='/add' element={<AddEntry/>}></Route>
      </Routes>
    </>
  )
}

export default App
