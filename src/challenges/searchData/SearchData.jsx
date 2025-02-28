import { useState } from "react";
const SearchData = () => {
  const mockData = ["Apple", "Orange", "Lemon", "Mango", "Pineapple"];
  const [data, setData] = useState(mockData);
  const [searchValue, setsearchValue] = useState("");

  const filteredData = () => {
    return data.filter((item) => {
      return item.toLowerCase().includes(searchValue.toLowerCase());
    });
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <input
        value={searchValue}
        onChange={(e) => setsearchValue(e.target.value)}
        className="w-full px-4 py-2 border rounded mb-4 text-black placeholder:text-gray-500"
        type="text"
        placeholder="Search items..."
      />
      <ul className="space-y-2 text-black">
        {filteredData().map((item) => {
          return (
            <li key={item} className="px-4 py-2 bg-gray-100 rounded">
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchData;
