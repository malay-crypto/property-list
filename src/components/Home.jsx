import {useContext, useEffect, useState} from "react";
import axios from "axios";
import PropertyCard from "../components/PropertyCard";
import FilterPanel from "../components/FilterPanel";
import {MyContext} from "../context/ContextFile.jsx";
import PropertyModal from "./PropertyModal.jsx";

//const API_URL = "http://localhost:5000/api/properties";

const API_URL = "https://68f8679adeff18f212b601d3.mockapi.io/api/properties/properties";
//https://68f8679adeff18f212b601d3.mockapi.io/api/properties

export default function Home() {

    const {setProperties,setFiltered,setTypes,
        properties,filterText,selectedType,
    setFilterText,types,setSelectedType,filtered} = useContext(MyContext);



    useEffect(() => {
        fetchProperties();
    }, []);

    const fetchProperties = async () => {
        try {
            const res = await axios.get(API_URL);
            setProperties(res.data);
            setFiltered(res.data);

            // Extract unique property types dynamically
            const uniqueTypes = ["All", ...new Set(res.data.map((p) => p.type))];
            setTypes(uniqueTypes);
        } catch (err) {
            console.error("Error fetching data:", err);
        }
    };

    // Handle filtering
    useEffect(() => {
        let data = [...properties];

        if (filterText) {
            data = data.filter(
                (p) =>
                    p.name.toLowerCase().includes(filterText.toLowerCase()) ||
                    p.location.toLowerCase().includes(filterText.toLowerCase())
            );
        }

        if (selectedType !== "All") {
            data = data.filter((p) => p.type === selectedType);
        }

        setFiltered(data);
    }, [filterText, selectedType, properties]);

    return (
        <div className="flex gap-6">
            {/* Left Panel - Filter */}
            <FilterPanel filterText={filterText} setFilterText={setFilterText} />

            {/* Right Panel - Property List */}
            <div className="flex-1">
                {/* heading and  Combo box for property types */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Available Properties</h2>

                    <div className="flex justify-between">
                                <h2 className="text-xl font-semibold mr-2">Filter by Type</h2>
                                <select
                                    value={selectedType}
                                    onChange={(e) => setSelectedType(e.target.value)}
                                    className="border p-2 rounded"
                                >
                                    {types.map((t) => (
                                        <option key={t} value={t}>
                                            {t}
                                        </option>
                                    ))}
                                </select>
                    </div>


                </div>

                {/* Property Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filtered.length ? (
                        filtered.map((property) => (
                            <PropertyCard key={property.id} property={property} />
                        ))
                    ) : (
                        <p className="text-gray-500">No properties found.</p>
                    )}
                </div>
            </div>


        </div>
    );
}
