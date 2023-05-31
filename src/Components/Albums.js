// importing React, css file and toastify
import React from "react";
import "../Assets/css/AlbumContainer.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Albums({ album, deleteData, changePage, changeUpdateId }) {
  // Function to display toastify dialog on deletion of album
  const showToastMessage = (userId) => {
    let message = <p>Item Removed. <strong>UserId was {userId}</strong></p>
      toast.success(message)
  };
  // Filtering data and deleting the album which is selected
  function filterToDelete(id,userId) {
    let afterDelete = album.filter((value) => value.id !== id);
    deleteData(afterDelete);
    showToastMessage(userId)
  }
  // Rendering the album and filtering out the selected album and updating the state via filterToDelete function
  function renderAlbum(data, index) {
    return (
      <div className="albumBox" key={index}>
        {/* Displaying title and user id */}
        <p className="albumName"><strong>{data?.title}</strong></p>
        <p className="albumUserId">User Id &gt;&nbsp;{data?.userId}</p>
        <div className="buttons">
          {/* Button to delete data */}
          <button
            className="delete"
            onClick={() => {
              filterToDelete(data.id,data.userId);
            }}
          >
            Delete
          </button>
          {/* Button to update data */}
          <button
            className="update"
            onClick={(e) => {
              changeUpdateId(data?.id);
              changePage("UpdateAlbum");
            }}
          >
            Update
          </button>
          
        </div>
      </div>
    );
  }

  return (
    // Displaying all the albums via mapping over the array of objects
    <div className="albumContainer">
      {album.length > 0 &&
        album.map((data, index) => {
          return renderAlbum(data, index);
        })}
        <ToastContainer />
    </div>
  );
}

export default Albums;
