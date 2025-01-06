import React from "react"

export default function Vans() {
    const [vansData, setVansData] = React.useState([])

    React.useEffect(() => {
        async function fetchData(){
          const response = await fetch("api/vans");
          const data = await response.json();
          setVansData(data.vans);
        }
        fetchData();
    }, [])

  return (

    <div>{
            vansData.map(van => (
                <>
                    <h1 key={van.id}>{van.name} <span><strong><i> { van.price}</i></strong> </span> </h1>
                    <img src={van.imageUrl} style={{width:"200px", height:"auto"}}></img>
                    <p key={van.id}>{van.description}</p>
                </>
        ))
        }</div>
  )
}
