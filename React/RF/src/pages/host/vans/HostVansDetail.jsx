import {  useOutletContext } from "react-router-dom"

export default function HostVansDetail() {
    
    const {vans} = useOutletContext()
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
