import { useState, useEffect } from "react";
import "./App.css";


function App() {
  const [catImgs, setcatImgs] = useState([]);
  const url =
    "https://api.thecatapi.com/v1/images/search?limit=1&has_breeds=1&api_key=live_4L450YR75W3BYo7Idc68Yq9vzXNi4Qf3dyHOz2GxvIoptKBqZUiEwy6lRb4MNOdt";
  const getImgs = async () => {
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setcatImgs([...data]);
      });
  };
  return (
    <div className="home">
      <div className="center">
        <h1> Discover cats from your wildest dreams!<br></br> </h1>
        <button className="btn" onClick={getImgs}>
          Discover
        </button>
      </div>
      <div className="catContainer">
        {catImgs.map(({ url,breeds}) => (
          <><img src={url}></img>
          <div className="search-bar-container">
          
          
            <div> SearchResults </div>

            
            <h1>{breeds[0].id}</h1>
            <div className="btns_div">
              <button className="btns_cat">{breeds[0].name}</button>
               <button className="btns_cat">{breeds[0].origin}</button>
                <button className="btns_cat">{breeds[0].weight.imperial}</button>
              
            </div>

          </div></>
        ))}
      </div>
    </div>
  );
}

export default App;
