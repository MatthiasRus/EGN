import { useRouteError } from "react-router-dom"
export default function Error() {
    const error = useRouteError()
    console.log(error)
  return (
    <div>
        <h1 style={{fontSize:"5rem" , textAlign:"center"}}>{error.status}</h1>
    
    <h1 style={{fontSize:"3rem" , textAlign:"center"}}>{error.message}</h1></div>
  )
}
