import React, { useState } from "react";

const SearchBar: React.FC<{ onSearch: (query: string) => void }> = ({
  onSearch,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim() === "") {
      setShowNotification(true);
    } else {
      onSearch(searchQuery.trim());
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-2"
        />
        <button
          type="submit"
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
          Search
        </button>
      </form>
      {showNotification && (
        <div className="text-red-500">Please enter a search!</div>
      )}
    </div>
  );
};

export default SearchBar;
