import { Routes,Route, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { useContext, useEffect, useRef } from 'react'
import {albumsData} from '../assets/fullstack-spotify-assets/assets/frontend-assets/assets'
import { PlayerContext } from '../context/PlayerContext'
const Display = () => {


  const {albumsData} = useContext(PlayerContext)

  const displayRef= useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum? location.pathname.split('/').pop():"";
  const bgColor = isAlbum? albumsData.find((x)=>(x._id ==albumId)).bgColor:"#"

  useEffect(()=>{
    if(isAlbum){
      displayRef.current.style.background = `linear-gradient(${bgColor},#121212`
    }
    else{
      displayRef.current.style.background= `#121212`
    }
  })
  // console.log(bgColor)
  return (
    <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 ronded bg-neutral-950 text-white overflow-auto lg:w-[75%] lg:ml-0'>
       <Routes>
          <Route path='/' element={<DisplayHome/>}/>
          <Route path ='/album/:id' element={<DisplayAlbum />}/>

        </Routes> 

    </div>
  )
}

export default Display