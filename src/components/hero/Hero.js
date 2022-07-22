import React from 'react'
import Main from '../main/Main';
import ScrollButton from '../scrollbutton/ScrollButton';
import Nike1 from '../../img/1.jpg'

const Hero = () => {
  return (
    <div>        
      <Main />
        <h2 className="text-center pb-6 pt-10 font-semibold text-lg">MORE NIKE REACT VISON</h2>
        <div className="flex-col sm:flex-row lg:grid lg:grid-rows-1 grid-flow-col gap-4 sm:pl-16 md:pl-28">
        <div class="card card-compact w-80 bg-base-100 rounded-none pl-10">
          <figure><img src={Nike1} className="hover:scale-105 rounded-lg shadow-lg" alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title">NIKE REACT VISION TRIPLE BLACK</h2>
            <p>£115</p>
            <div class="card-actions justify-center">
              <button class="btn">Buy Now</button>
            </div>
          </div>
        </div>

        <div class="card card-compact w-80 bg-base-100 rounded-none pl-10">
          <figure><img src={Nike1} className="hover:scale-105 rounded-lg shadow-lg" alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title">Nike React Vision Gravity</h2>
            <p>£80 from £115</p>
            <div class="card-actions justify-center">
              <button class="btn">Buy Now</button>
            </div>
          </div>
        </div>

        <div class="card card-compact w-80 bg-base-100 rounded-none pl-10">
          <figure><img src={Nike1} className="hover:scale-105 rounded-lg shadow-lg" alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title">Nike React Vision Honeycomb</h2>
            <p>£115</p>
            <div class="card-actions justify-center">
              <button class="btn">Buy Now</button>
            </div>
          </div>
        </div>
        

        </div>
        <ScrollButton />
    </div>
        
    
  )
}

export default Hero