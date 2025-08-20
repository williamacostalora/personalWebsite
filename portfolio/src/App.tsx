import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Experience } from "./pages/Experience"
import { Projects } from "./pages/Projects"


function App() {
  return (
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/contact" element={<Contact/>}/>
     <Route path="/experience" element={<Experience/>}/>
     <Route path="/projects" element={<Projects/>}/>


     </Routes>
     </BrowserRouter>

  )
}

export default App
