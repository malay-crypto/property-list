import PropertyModal from "./PropertyModal.jsx";
import {useState} from "react";

export default function PropertyCard({ property }) {

    let [open, setOpen] = useState(false);


    return (
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between">
            <div>
                <h3 className="text-lg font-bold mb-1">{property.name}</h3>
                <p className="text-sm text-gray-600 mb-1">
                    <strong>Type:</strong> {property.type}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                    <strong>Location:</strong> {property.location}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                    <strong>Price:</strong> ${property.price}
                </p>
                <p className="text-gray-700 text-sm mt-2">{property.description}</p>
            </div>

            <div className="flex justify-end mt-4">
                <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700" onClick={()=>setOpen(true)  }>
                    View
                </button>
            </div>
            <PropertyModal isOpen={open} property={property} onClose={()=>setOpen(false)}/>
        </div>
    );
}
