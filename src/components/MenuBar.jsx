import SearchBar from "./SearchBar";
import {useContext} from "react";
import {MyContext} from "../context/ContextFile.jsx";
import {Link, useNavigate} from "react-router-dom";


export default function MenuBar({ onSearch, onAddClick }) {

     let navigate= useNavigate()

    const {setProperties,setFiltered,setTypes,
        properties,filterText,selectedType,
        setFilterText,types,setSelectedType,filtered} = useContext(MyContext);

    return (
        <nav className="flex items-center justify-between bg-blue-700 text-white px-6 py-3 shadow-md rounded-lg mb-6">
            {/* Left Section: App Title */}
            <h1 className="text-2xl font-bold"><Link to={'/'}>🏡 Property Listing App</Link> </h1>

            {/* Middle Section: SearchBar */}
            <div className="flex-1 mx-10">
                <SearchBar onSearch={onSearch} />
            </div>

            {/* Right Section: Add Property Button */}
            <button
                onClick={()=>navigate('/addProperty')}
                className="bg-white text-blue-700 font-semibold px-4 py-2 rounded-lg hover:bg-blue-100 cursor-pointer"
            >
                + Add Property
            </button>
        </nav>
    );
}
