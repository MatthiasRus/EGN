import {  useOutletContext } from "react-router-dom"

export default function HostVansPhotos() {
    
const {vans} = useOutletContext()
  return (
      vans ?  ( 
           
            <section className="details">
                <h1>Here the image will go</h1>
            </section>
       ) : <p>Loading...</p>
  )
}
