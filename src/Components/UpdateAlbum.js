import React, { useState } from 'react'

function UpdateAlbum() {
    const [prvTitle,setPrvTitle] = useState()
    const [prvId,setPrvId] = useState()

  return (
    <div className='container'>
        <form >
         <label>
         Update Title<input type="text"  required></input>
         </label>
         <label>
         Update Id<input type="number"  required></input>
         </label>
          <button type='submit' >Add</button>
        </form>
    </div>
  )
}

export default UpdateAlbum