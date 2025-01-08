import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom"

export default function HostVansPricing() {
    
    const params = useParams();
    const [vans, setVans] = useState();
    useEffect(() => {
        async function fetchVanDetail(){
            const response = await fetch(`/api/host/vans/${params.id}`);
            const data = await response.json();
            setVans(data.vans[0])
            
        }
        fetchVanDetail();
    },[params.id]);
   
  return (
      vans ?  ( 
           
            <section className="details">
                <p>Price: <span>{vans.price}</span></p>
            </section>
       ) : <p>Loading...</p>
  )
}
