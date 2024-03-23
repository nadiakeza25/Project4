import React from 'react';
import "./Search.css";
import {FaSearch} from "react-icons/fa";

export const SearchBar = () => {
    const [input, setInput] = useState ("");

    const fetchData = (value) => {
fetch(
  "https://api.thecatapi.com/v1/images/search?limit=1&has_breeds=1&api_key=live_4L450YR75W3BYo7Idc68Yq9vzXNi4Qf3dyHOz2GxvIoptKBqZUiEwy6lRb4MNOdt")
  .then((response) => response.json())
  .then(json => {
    const resluts = json.filter((use) => {
     
    })
  });
 const handleChange = (value) => {
    setInput(value)
    fetchData(value)
 }
    }
    return ( 
    <div className = "input-wrapper"> 
    <FaSearch id= "search-icon" />
    <input placeholder="Type to search...." 
    value ={input} 
    onChange={(e) => handleChange(e.target.value)} 
    />
     </div>
    );
    
};

export default SearchBar;