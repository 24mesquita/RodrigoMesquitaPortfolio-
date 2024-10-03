
import React from 'react';
import './index.css';



function HomePage() {
  return (
    <>
    <div className='Container home'>
    <div class="arrow">
      <div class="arrow-"></div>
    </div>
      <div className='Left'>
      <div class="rectangleA"></div>
      <h1><div class="words"></div></h1>
        
        <h3><div class="word"></div></h3>
        <div class="rectangleB"></div>
      </div>
      <div className='Right'>
         <img src={require('../../assets/images/rodrigo.jpeg')} alt='Rodrigo' />
      </div>
    </div>



    </>


  );

}
<script src={require('./script.js')}></script>

export default HomePage;





