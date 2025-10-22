import ReactModal from "react-modal";
import { X } from "lucide-react";

//ReactModal.setAppElement("#root");

export default function PropertyModal({ isOpen, onClose, property }) {
   // if (!property) return null;

    const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
        property.location
    )}&output=embed`;

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            className="bg-white rounded-2xl shadow-lg max-w-2xl mx-auto my-20 p-6 outline-none relative"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
            {/* Close button */}
            <button
                onClick={onClose}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
                <X size={24} />
            </button>

            {/* Content */}
            <div className="flex flex-col md:flex-row gap-6">
                {/* Left - Image */}
                <div className="flex-1">
                    <img
                        src={
                            property.image ||
                            "https://via.placeholder.com/400x250?text=No+Image"
                        }
                        alt={property.name}
                        className="rounded-lg object-cover w-full h-56"
                    />
                </div>

                {/* Right - Details */}
                <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2">{property.name}</h2>
                    <p className="text-gray-700 mb-1">
                        <strong>Type:</strong> {property.type}
                    </p>
                    <p className="text-gray-700 mb-1">
                        <strong>Location:</strong> {property.location}
                    </p>
                    <p className="text-gray-700 mb-1">
                        <strong>Price:</strong> ${property.price}
                    </p>
                    <p className="text-gray-700 mt-3">{property.description}</p>
                </div>
            </div>

            {/* Map Embed */}
            <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">📍 Location Map</h3>
                <iframe
                    src={mapUrl}
                    title="Property Location"
                    width="100%"
                    height="250"
                    className="rounded-lg"
                    loading="lazy"
                ></iframe>
            </div>
        </ReactModal>
    );
}
