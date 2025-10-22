import {useContext, useEffect, useState} from "react";
import { Search } from "lucide-react";
import axios from "axios";
import {MyContext} from "../context/ContextFile.jsx";
import {useNavigate} from "react-router-dom";

export default function SearchBar() {
    const [term, setTerm] = useState("");
     let navigate= useNavigate()

    const {setProperties,setFiltered,setTypes,
        properties,filterText,selectedType,
        setFilterText,types,setSelectedType,filtered} = useContext(MyContext);

    const handleChange = (e) => {
        const value = e.target.value;
        setTerm(value);

    };

    useEffect(() => {

           let data=[...properties];
          let r= data.filter(item=>item.name.toLowerCase().includes(term.toLowerCase())
               ||item.location.toLowerCase().includes(term.toLowerCase())
              ||item.description.toLowerCase().includes(term.toLowerCase())
          );

        if(r.length > 0)
          setFiltered(r)
        else
        {
            setFiltered(data)


        }
        navigate("/")

    },[term])

    return (
        <div className="flex items-center bg-white rounded-lg shadow-sm border px-3 py-2">
            <Search className="text-gray-500 mr-2" size={20} />
            <input
                type="text"
                placeholder="Search properties...on name, location, description"
                value={term}
                onChange={handleChange}
                className="flex-1 outline-none text-gray-700"
            />
        </div>
    );
}
