import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import TestPractice from './Pages/TestPractice'
import View_textPractice from './Pages/View_textPractice'

function App() {
 

  return (
    <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/test-practice' element={<TestPractice/>}/>
    <Route path='/view-textpractice/:id' element={<View_textPractice/>}/>
   </Routes>
    </>
  )
}

export default App
