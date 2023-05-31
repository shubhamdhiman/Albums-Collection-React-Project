import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import "../Assets/css/App.css";
import Albums from "./Albums";
import AddAlbum from "./AddAlbum";
import UpdateAlbum from "./UpdateAlbum";

function App() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState("albumList");
  const [updateId, setUpdateId] = useState("");
  useEffect(() => {
    async function fetchData() {
      const data = await fetch("https://jsonplaceholder.typicode.com/albums");
      const json = await data.json();
      setAlbums(json);
      setLoading(false);
    }
    fetchData();
  }, []);
  function deleteData(newData) {
    setAlbums(newData);
  }
  function changePage(newData) {
    setPage(newData);
  }
  function addData(newData) {
    setAlbums(newData);
  }
  function updateData(newData) {
    setAlbums(newData);
  }
  function changeUpdateId(newData) {
    setUpdateId(newData);
  }
  // console.log("rendering from app.js", updateId);
  return (
    <div className="App">
      <Navigation albums={albums} page={page} changePage={changePage} />
      {page === "albumList" ? (
        loading ? (
          <div
            className="spinner-border text-light"
            style={{ marginTop: "5rem" }}
            role="status"
          >
            <span className="sr-only"></span>
          </div>
        ) : (
          <Albums
            album={albums}
            deleteData={deleteData}
            changePage={changePage}
            changeUpdateId={changeUpdateId}
          />
        )
      ) : page === "addAlbum" ? (
        <AddAlbum album={albums} addData={addData} />
      ) : (
        <UpdateAlbum album={albums}  updateId={updateId} updateData={updateData} />
      )}
    </div>
  );
}

export default App;
