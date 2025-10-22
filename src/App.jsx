
import './App.css'
import MenuBar from "./components/MenuBar.jsx";
import Home from "./components/Home.jsx";
import {Routes,Route} from "react-router-dom";
import AddPropertyForm from "./components/AddProperty.jsx";
import {ToastContainer} from "react-toastify";

function App() {
  const API_URL = "http://localhost:5000/properties";

  return (
    <>
        <ToastContainer/>
      <MenuBar/>



        <Routes>
            <Route path="/" element={ <Home/>} />
            <Route path="/addProperty" element={ <AddPropertyForm/>} />
        </Routes>

    </>
  )
}

export default App
