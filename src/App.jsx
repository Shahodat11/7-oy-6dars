import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import CreateUser from './pages/admin/create-user/CreateUser'
import ManageUser from './pages/admin/manage-user/ManageUser'
import Admin from './pages/admin/Admin'

function App() {
  return (
    <>
      <Header/>
       <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path = '/admin' element ={<Admin/>}>
          <Route path='create' element={<CreateUser/>}/>
          <Route path='manage' element={<ManageUser/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
