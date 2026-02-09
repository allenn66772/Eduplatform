import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import TestPractice from './Pages/TestPractice'
import View_textPractice from './Pages/View_textPractice'
import Testquestions from './Pages/Testquestions'
import Testresult from './Pages/Testresult'

function App() {
 

  return (
    <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/test-practice' element={<TestPractice/>}/>
    <Route path='/view-textpractice/:id' element={<View_textPractice/>}/>
    <Route path='/test-screen/:id' element={<Testquestions/>}/>
    <Route path='/test-result' element={<Testresult/>}/>
    <Route path='/test-review' element={<Testresult review/>}/>
   </Routes>
    </>
  )
}

export default App
