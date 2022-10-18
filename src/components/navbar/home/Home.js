import React from 'react';
import './HomeStyles.css';
import {AiOutlineSearch} from 'react-icons/ai'
import sponsor from '../../video/sponsor.mp4';



function Home() {
  return (
    <div className='home'>
    <video src = {sponsor} type="sponsor/mp4" autoPlay loop muted>

     {/* 
    style={{
      position:'absolute',
      width:'100%',
      left:'50%',
      top:'50%',
      height:'100%',
      objectFit:'cover',
      transform:'translate(-50%, -50%)',
      zIndex:'-1'
}}>
*/}
</video>
    <div className="overlay"></div>
    <div className="content">

<form className ="form">
<div>
<input type="text" placeholder='Search Product..' />
</div>
<div>
<button><AiOutlineSearch className='icon'/></button>
</div>


</form>
    </div>
    </div>
  )
}

export default Home

