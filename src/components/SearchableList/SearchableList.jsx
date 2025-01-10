import { useState } from "react";

const SearchableList = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchResults = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="searchable-list">
      <input
        type="search"
        value={searchTerm}
        placeholder="Search"
        onChange={handleChange}
      />
      <ul>
        {searchResults.map((item, index) => (
          <li key={index}>{item.toString()}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchableList;
