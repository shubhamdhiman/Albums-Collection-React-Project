import React from "react";
import "../Assets/css/AlbumContainer.css";

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
function Albums({ album, deleteData, changePage, changeUpdateId }) {
  //   const showToastMessage = () => {
  //     console.log("toast Success")
  //     toast.success('Success Notification !', {
  //         position: toast.POSITION.BOTTOM_CENTER
  //     });
  // };
  function filterToDelete(id) {
    let afterDelete = album.filter((value) => value.id !== id);
    console.log(afterDelete);
    deleteData(afterDelete);
    // showToastMessage()
  }
  function renderAlbum(data, index) {
    return (
      <div className="albumBox" key={index}>
        <p className="albumname">{data?.title}</p>
        <div className="buttons">
          <button
            className="delete"
            onClick={() => {
              filterToDelete(data.id);
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
    </div>
  );
}

export default Albums;
