export default function FilterPanel({ filterText, setFilterText }) {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 w-64">
            <h2 className="text-lg font-semibold mb-4">Filter Properties</h2>
            <label className="text-sm text-gray-600 block mb-2">
                Search by name or location:
            </label>
            <input
                type="text"
                placeholder="Type to filter..."
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
                className="border p-2 w-full rounded"
            />
        </div>
    );
}
