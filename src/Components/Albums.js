import React from 'react'
import '../Assets/css/AlbumContainer.css'
function Albums({album,deleteData}) {

    function filterToDelete(id){
      let afterDelete = album.slice(0,20).filter(value => value.id !== id)
      console.log(afterDelete)
      deleteData(afterDelete)
    }
    function renderAlbum(data,index){
        return <div className='albumBox' key={index}>
                <p className='albumname'>{data?.title}</p>
                <div className='buttons'>
                    <button className="delete"  onClick={()=>{filterToDelete(data.id)}}>Delete</button>
                    <button className="update" value={data.id}>Update</button>
                </div>
        </div>
    }

  return (
    
    <div className='albumContainer'>
        {/* {console.log(Object.values(album)[0])} */}
       {/* {Object.values(album)[0].length > 0 && Object.values(album)[0].slice(0,20).map((data,index)=>{
            // console.log(data.title)
            return renderAlbum(data,index)
       })} */}
       {album.length>0 && album.slice(0,20).map((data,index)=>{
        return renderAlbum(data,index)
       })}
       {/* {console.log("album is a type of ",typeof(album))}
       {console.log("deleteData is a type of ", typeof(deleteData))}
       {console.log(album.length)} */}
    </div>
  )
}

export default Albums