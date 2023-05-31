import React from "react";
import "../Assets/css/AlbumContainer.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Albums({ album, deleteData, changePage, changeUpdateId }) {
  const showToastMessage = (userId) => {
      toast.success(`Item Removed. UserId is ${userId}`)
  };
  function filterToDelete(id,userId) {
    let afterDelete = album.filter((value) => value.id !== id);
    deleteData(afterDelete);
    showToastMessage(userId)
  }
  function renderAlbum(data, index) {
    return (
      <div className="albumBox" key={index}>
        <p className="albumname">{data?.title}</p>
        <p className="albumname"><strong>User Id</strong> &gt;&nbsp;{data?.userId}</p>
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
