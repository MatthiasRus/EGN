import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom"

export default function HostVansDetail() {
    
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
   console.log(params)
  return (
      vans ?  (            
            <section className="details">
                <p>Name: <span>{vans.name}</span></p>
                <p>Category: <span>{vans.type}</span></p>
                <p>Description: <span>{vans.description}</span></p>
                <p>Visibility: <span>Public</span></p>

            </section>
      ) : <p>Loading...</p>
  )
}