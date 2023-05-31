import React, {useState} from 'react'
import '../Assets/css/addAlbum.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddAlbum({album,addData}) {
  const [title,setTitle] = useState("")
  const [userId,setUserId] = useState("")

  function changeToInitial(){
    setTitle("")
    setUserId("")
  }
  function addUser(e){
    e.preventDefault()
    let newData = [...album, {userId:userId,title:title,id:album.length+1} ]
    changeToInitial()
    addData(newData)
    let message = <p>Album Added. <strong>UserId is {userId}</strong></p>
    toast.success(message)
  }
  return (
    
    <div className='container'>
      <form onSubmit={changeToInitial}>
         <label>
         Title<input type="text" onChange={(e)=>{setTitle(e.target.value)}} required></input>
         </label>
         <label>
         Id<input type="number" onChange={(e)=>{setUserId(e.target.value)}} required></input>
         </label>
          <button type='submit' onClick={(e)=>{addUser(e)}}>Add</button>
        </form>
        <ToastContainer />
    </div>
  )
}

export default AddAlbum