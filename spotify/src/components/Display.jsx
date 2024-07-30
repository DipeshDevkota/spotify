import { Routes,Route } from 'react-router-dom'
import DisplayHome from './DisplayHome'
const Display = () => {
  return (
    <div className='w-[100%] m-2 px-6 pt-4 ronded bg-neutral-950 text-white overflow-auto lg:w-[75%] lg:ml-0'>
       <Routes>
          <Route path='/' element={<DisplayHome/>}/>


        </Routes> 

    </div>
  )
}

export default Display