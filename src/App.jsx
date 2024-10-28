import Sidebar from "./components/Sidebar"
import HomePage from "./pages/HomePage"
import { Route, Routes } from "react-router-dom"
import FavoritePage from "./pages/FavoritePage"
function App() {


  return (
      <div className="flex">
         
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/favorites" element={<FavoritePage />}></Route>
      </Routes>
      </div>
     
    
  )
}

export default App
