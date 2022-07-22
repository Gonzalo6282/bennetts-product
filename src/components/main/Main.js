import React from 'react';
import Carousel1 from '../../img/Carousel-1.jpg';
import useFetch from "./UseFetch";
import useFoot from "./UseFoot";
import useLife from "./UseLife";
import { useState } from 'react';
import './Main.css'

const Main = () => {
  const [ isInStock ] = useState(false);

  const { data, loading, error } = useFetch(
    "https://my-bennetts-api.herokuapp.com/nike", 
  );

  const { data1, loading1, error1 } = useFoot(
    "https://api-footasylum.herokuapp.com/FootAsylum", 
  );

  const { data2, loading2, error2 } = useLife(
    "https://api-life.herokuapp.com/Life", 
  );


  if (loading) return <h1> LOADING...</h1>;
  
  if (error) console.log(error);

  console.log(data);
 
  if (loading1) return <h1> LOADING...</h1>;
    
  if (error1) console.log(error1);

  console.log(data1);

  if (loading2) return <h1> LOADING...</h1>;
   
  if (error2) console.log(error2);
  
  console.log(data2);
  

  return (
    
<div className="hero min-h-screen bg-base-100">
  <div className="hero-content flex-col lg:flex-row">
   
    <div>
      <h1 className="text-xl font-bold">WOMENS NIKE REACT VISION</h1>
      <div className="rating">
        <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" checked />
        <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
      </div>
      <p className="py-6">{data?.Colour}</p>
      <img src={Carousel1} className="hover:scale-105 max-w-sm rounded-lg shadow-lg" alt="Shoes" />
      <div>
      </div>
    </div>
    <div className="grid grid-rows-3 grid-flow-col gap-4 text-center md:pl-56">
    <div>
    <p className="my-2 font-semibold text-lg">{data?.Retailer.toUpperCase()}</p>
    <p className="text-base mb-1">{data?.price}</p>

    <a href="https://www.nike.com/gb/t/react-vision-shoe-G8VzL6/CI7523-009" target="_blank" rel="noreferrer" role="button">
    <button className="btn btn-wide mb-1">Buy Here</button>
      
    </a>
    </div>
    <div>
    <p className="my-2 font-semibold text-lg">{data1?.Retailer.toUpperCase()}</p>
    <p className="text-base mb-1">{data1?.price}</p>
    <a href="https://www.footasylum.com/women/womens-footwear/trainers/nike-womens-react-vision-trainer-wolf-grey-black-pink-prime-steel-4066328/?locale=gb&istCompanyId=d94237bf-2058-4774-ba38-3499bddb9813&istFeedId=bb79e3eb-1ffc-447e-baee-3dbd42b29d39&istItemId=pataiqiir&istBid=t&utm_medium=cpc&utm_source=google&matchtype=&utm_term=&qc_adgroup_id=133360447672&qc_campaign_id=16059457889&gclid=Cj0KCQjwidSWBhDdARIsAIoTVb0R6KKSJW_639R55vxigv5b8Lys1e1pGL-yAMoUOWoa29oSmNfVaFcaAkBLEALw_wcB" target="_blank" rel="noreferrer">
    <button className="btn btn-wide mb-1">Buy Here</button>
    </a>
    </div>
    <div>
    <p className="my-2 font-semibold text-lg">{data2?.Retailer.toUpperCase()}</p>
    <p className="text-base mb-1">{data2?.price}</p>
    <a href="https://www.lifestylesports.com/gb/womens-react-vision-21644010.html" target="_blank" rel="noreferrer">
    {isInStock ? <button className="btn btn-wide mb-1">Buy Here</button> : <button disabled="true" className="btn btn-wide btn-disabled mb-1">Out of Stock</button>}
    </a>
    </div>
    </div>
  </div>
</div>
    
  )
}

export default Main