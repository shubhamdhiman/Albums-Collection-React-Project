import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UpdateAlbum({ updateId, updateData, album }) {
  const [newTitle, setNewTitle] = useState("");
  const [prvId,setPrvId] = useState("")
  function updateNewData(e){
    e.preventDefault();
    
     // Create a copy of the original array
     const updatedItems = [...album];

     // Find the object to update
     const itemToUpdate = updatedItems.find(item => item.id === updateId);

     // Create a copy of the object
     const updatedItem = { ...itemToUpdate , title:newTitle, userId:prvId};

     // Replace the original object with the updated one
     const index = updatedItems.findIndex(item => item.id === updateId);
     updatedItems[index] = updatedItem;

     // Set the updated array as the new state
     updateData(updatedItems);
     let message = <p><strong>UserId {itemToUpdate.userId}</strong> Data Updated, <strong>New UserId is {updatedItem.userId}</strong></p>
     toast.success(message, {
      toastId: 'success1',
  })
  setNewTitle("")
  setPrvId("")
  }
  return (
    <div className="container">
      <form>
        <label>
          Update Title
          <input
            type="text"
            value={newTitle}
            onChange={(e) => {
                setNewTitle(e.target.value);
            }}
            required
          ></input>
        </label>
        <label>
         Update Id<input  type="number" value={prvId} onChange={(e) => {
                setPrvId(e.target.value);
            }}  required></input>
         </label>
        <button type="submit" onClick={(e)=>{updateNewData(e)}}>Add</button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default UpdateAlbum;
