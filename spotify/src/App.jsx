import Display from './components/Display';
// import Featured from './components/Featured';
import Player from './components/Player';
import Sidebar from './components/Sidebar';
// import Topbar from './components/Topbar';

import './index.css'; // or the name of your CSS file
export default function App() {
  return (
<div className='h-screen bg-black'>
  <div className='h-[90%] flex'>
    <Sidebar/>
    <Display/>
  </div>
  <Player/>
 
</div>
  )
}