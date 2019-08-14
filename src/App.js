import React, {useState, useEffect} from "react";
import axios from "axios";
import PicCard from "./components/PicCard.js";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo')
    .then(response => {
      console.log(response.data);
      setData(response.data);
    });
  },[]);
  return (
    <div className="App">
    <PicCard title={data.title} url={data.url} explanation={data.explanation} date={data.date} />
    </div>
  );
}

export default App;
