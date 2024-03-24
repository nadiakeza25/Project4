import { useState } from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [query, setquery] = useState("");
  const [SearchResults, setSearchResults] = useState([]);
  
  const fetchData = async (value) => {
    await fetch(
      `https://api.thecatapi.com/v1/images/search?q=${value}limit=1&has_breeds=1&api_key=live_4L450YR75W3BYo7Idc68Yq9vzXNi4Qf3dyHOz2GxvIoptKBqZUiEwy6lRb4MNOdt`
    )
      .then((response) => response.json())
      .then((data) => {
        //put the results into our SearchResults state
        setSearchResults([...data]);
      });
  };
  return (
    <div className="navi">
      <nav className="nav">
        <h1>Cats</h1>
        <div className="input-wrapper">
          <FaSearch
            id="search-icon"
            onClick={() => {
              fetchData(query);
            }}
          />
          <input
            placeholder="Type to search...."
            onChange={(e) => {
              setquery(e.target.value);
            }}
          />
        </div>
      </nav>
      <div>
        {SearchResults.map((element) => {
          return (
            <div className="search_result">
              <h1> SearchResults: </h1>
              <img src={element.url} alt="" />
              <div>
                <p>{element.breeds[0].name}</p>
                <p>{element.breeds[0].origin}</p>
                <p>{element.breeds[0].weight.metric} kgs</p>
                <p>{element.breeds[0].life_span}years</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchBar;
