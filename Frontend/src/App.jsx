import './style/App.css'
import NavBar from './components/NavBar'
import { Route, Routes} from 'react-router-dom'
import AddEntry from './components/AddEntry'
import Entries from './components/Entries'
import UpdateEntry from './components/UpdateEntry'
function App() {

  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Entries></Entries>}/>
        <Route path='/add-entry' element={<AddEntry/>}></Route>
        <Route path="/update/:id" element={<UpdateEntry/>}></Route>
      </Routes>
    </>
  )
}

export default App
