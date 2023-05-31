import React, {useState} from 'react'
import '../Assets/css/addAlbum.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddAlbum({album,addData}) {
  const [title,setTitle] = useState("")
  const [userId,setUserId] = useState("")

  function addUser(e){
    e.preventDefault()
    console.log("checking the run of funciton")
    let newData = [...album, {userId:userId,title:title,id:album.length+1} ]
    addData(newData)
    let message = <p>Album Added. <strong>UserId is {userId}</strong></p>
    toast.success(message)
    setTitle("")
    setUserId("")
  }
  return (
    
    <div className='container'>
      <form >
         <label>
         Title<input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} required></input>
         </label>
         <label>
         Id<input type="number" value={userId} onChange={(e)=>{setUserId(e.target.value)}} required></input>
         </label>
          <button type='submit' onClick={(e)=>{addUser(e)}}>Add</button>
        </form>
        <ToastContainer />
    </div>
  )
}

export default AddAlbum