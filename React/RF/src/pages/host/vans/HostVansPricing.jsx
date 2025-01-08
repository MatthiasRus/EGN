import {  useOutletContext } from "react-router-dom"

export default function HostVansPricing() {
    const {vans} = useOutletContext()
  return (
      vans ?  ( 
           
            <section className="details">
                <p>Price: <span>${vans.price}/day</span></p>
            </section>
       ) : <p>Loading...</p>
  )
}
