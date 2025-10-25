import './style/App.css'
import NavBar from './components/NavBar'
import { Route, Routes} from 'react-router-dom'
import AddEntry from './components/AddEntry'
import Entries from './components/Entries'
function App() {

  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/entries" element={<Entries></Entries>}/>
        <Route path='/add-entry' element={<AddEntry/>}></Route>
      </Routes>
    </>
  )
}

export default App
