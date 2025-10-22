import {createContext, useState} from "react";

let MyContext=createContext(null)

let ContextFile=({children})=>{


    const [properties, setProperties] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [filterText, setFilterText] = useState("");
    const [selectedType, setSelectedType] = useState("All");
    const [types, setTypes] = useState([]);

    return (


        <MyContext.Provider
            value={{properties, setProperties,filtered,
                setFiltered,filterText, setFilterText,
                selectedType, setSelectedType,types,setTypes   }}>

            {children}
        </MyContext.Provider>


    )

}

export { MyContext}
export default ContextFile;