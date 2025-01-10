import React from "react"
import { Link, useSearchParams } from "react-router-dom";

export default function Vans() {
    const [vansData, setVansData] = React.useState([])
    const [searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("type");
    let vanTypes = [{id:1,type:"simple"},{id:2,type:"rugged"},{id:3,type:"luxury"}]
    React.useEffect(() => {
        async function fetchData(){
          const response = await fetch("api/vans");
          const data = await response.json();
          setVansData(data.vans);
        }
        fetchData();
    }, [])
    const filteredElement = typeFilter ? vansData.filter(van => van.type === typeFilter) : vansData;

    const vansElement = filteredElement.map(van => (
        <div key={van.id} className="van-tile">
            <Link key={van.id} to={`/vans/${van.id}`}
        aria-label={`View details for ${van.name}, 
                             priced at $${van.price} per day`}>
        <img src={van.imageUrl} alt={`Image of ${van.name}`}  />
        <div className="van-info">
            <h3>{van.name}</h3>
            <p>${van.price}<span>/day</span></p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </Link>
    </div>
    
))
function handleFiltersChange(key, value){
    setSearchParams(prevParams => 
   {
     if (value === null){
        prevParams.delete(key)
   }else{
    prevParams.set(key,value)
   }
   return prevParams
    })
}

  return (

    <div className="van-list-container">
        <h1>Explore our van options</h1>
        <button onClick={() => handleFiltersChange("type", "simple")}
        >Simple</button>
        <button
        onClick={() => handleFiltersChange("type", "luxury")}
        >Luxury</button>
        <button
        onClick={() => handleFiltersChange("type", "rugged")}
        >Rugged</button>
        <button
        onClick={() => handleFiltersChange("type",null)}
        >Clear Filter</button>
            <div className="van-list">
                {vansElement}
            </div>
        </div>
  )
}
