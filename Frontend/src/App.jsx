import './style/App.css'
import NavBar from './components/NavBar'
import { Route, Routes} from 'react-router-dom'
import AddEntry from './components/AddEntry'
import Entries from './components/Entries'
import UpdateEntry from './components/UpdateEntry'
import Signup from './components/Signup'
import Login from './components/Login'
function App() {

  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Entries></Entries>}/>
        <Route path='/add-entry' element={<AddEntry/>}></Route>
        <Route path="/update/:id" element={<UpdateEntry/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </>
  )
}

export default App
