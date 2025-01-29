import Home from "./components/Home"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Experience from "./components/Experience"
import Project from "./components/project"
import Contact from "./components/Contact"
const App = () => {
  return (
    <div className="bg-[#171d32] h-full overflow-hidden">
       <Navbar/>
       <Home/>
       <About/>
       <Experience/>
       <Project/>
       <Contact/>
    </div>
    
  )
}

export default App
