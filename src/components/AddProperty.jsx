import { useState } from "react";
import axios from "axios";
import {toast} from "react-toastify";

export default function AddPropertyForm() {
    const [form, setForm] = useState({

        name: "",
        type: "",
        price: "",
        location: "",
        description: "",
        image: ""
    });
// Random default images
    const defaultImages = [
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    ];

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name || !form.type) return alert("Name and Type are required");


        let randomImageUrl=form.image||defaultImages[Math.floor(Math.random()*defaultImages.length)];


     // let r= await axios.post('http://localhost:5000/api/properties', {...form,image:randomImageUrl});

        let r= await axios.post('https://68f8679adeff18f212b601d3.mockapi.io/api/properties/properties', {...form,image:randomImageUrl});

        toast.success("Property Added")

        setForm({

            name: "",
            type: "",
            price: "",
            location: "",
            description: "",
            image: ""
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-gray-100 p-4 rounded-lg shadow mb-6"
        >
            <h2 className="text-xl font-semibold mb-3">Add New Property</h2>

            <div className="grid grid-cols-2 gap-3">
                <input
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />
                <input
                    name="type"
                    placeholder="Type (e.g. Apartment, Villa)"
                    value={form.type}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />
                <input
                    name="price"
                    placeholder="Price"
                    type="number"
                    value={form.price}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />
                <input
                    name="location"
                    placeholder="Location"
                    value={form.location}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />
            </div>

            <textarea
                name="description"
                placeholder="Description"
                value={form.description}
                onChange={handleChange}
                className="border p-2 rounded w-full mt-3"
            />

            {/* Image URL Field */}
            <input
                name="image"
                placeholder="Image URL (optional)"
                value={form.image}
                onChange={handleChange}
                className="border p-2 rounded w-full mt-3"
            />

            {/* Optional live preview */}
            {form.image && (
                <div className="mt-3 flex justify-center">
                    <img
                        src={form.image}
                        alt="Preview"
                        className="w-48 h-32 object-cover rounded-lg shadow-sm"
                    />
                </div>
            )}

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 mt-4 rounded hover:bg-blue-700 cursor-pointer"
            >
                Add Property
            </button>
        </form>
    );
}
