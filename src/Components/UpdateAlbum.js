import React, { useState } from "react";

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
  }
  return (
    <div className="container">
      <form>
        <label>
          Update Title
          <input
            type="text"
            onChange={(e) => {
                setNewTitle(e.target.value);
            }}
            required
          ></input>
        </label>
        <label>
         Update Id<input type="number" onChange={(e) => {
                setPrvId(e.target.value);
            }}  required></input>
         </label>
        <button type="submit" onClick={(e)=>{updateNewData(e)}}>Add</button>
      </form>
    </div>
  );
}

export default UpdateAlbum;
