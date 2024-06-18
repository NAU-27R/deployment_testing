import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Home"
import Test from "./test"
function App() {
 

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/test" element={<Test/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
