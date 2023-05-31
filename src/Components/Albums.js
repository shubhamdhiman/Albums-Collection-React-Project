import React from "react";
import "../Assets/css/AlbumContainer.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Albums({ album, deleteData, changePage, changeUpdateId }) {
  const showToastMessage = (userId) => {
    let message = <p>Item Removed. <strong>UserId was {userId}</strong></p>
      // toast.success( `Item Removed. <strong>UserId was ${userId}</strong>`)
      toast.success(message)
  };
  function filterToDelete(id,userId) {
    let afterDelete = album.filter((value) => value.id !== id);
    deleteData(afterDelete);
    showToastMessage(userId)
  }
  function renderAlbum(data, index) {
    return (
      <div className="albumBox" key={index}>
        <p className="albumName"><strong>{data?.title}</strong></p>
        <p className="albumUserId">User Id &gt;&nbsp;{data?.userId}</p>
        <div className="buttons">
          <button
            className="delete"
            onClick={() => {
              filterToDelete(data.id,data.userId);
            }}
          >
            Delete
          </button>
          <button
            className="update"
            onClick={(e) => {
              changeUpdateId(data?.id);
              changePage("UpdateAlbum");
              // console.log(data?.id)
            }}
          >
            Update
          </button>
          
        </div>
      </div>
    );
  }

  return (
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
