import React ,{useState, useEffect} from "react";
import Navigation from "./Navigation";
import "../Assets/css/App.css";
import Albums from "./Albums";

function App() {
  const [albums,setAlbums] = useState([])
  useEffect(() => {
    async function fetchData(){
        const data = await fetch('https://jsonplaceholder.typicode.com/albums');
        const json = await data.json()
        setAlbums(json)
      }
      fetchData()
  },[]);
  function deleteData(newData){
    setAlbums(newData)
  }

  return (
    
    <div className="App">
      <Navigation />
      <Albums album = {albums} deleteData={deleteData}/>
    </div>
  );
}

export default App;
