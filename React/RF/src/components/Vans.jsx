import React from "react"
import { Link } from "react-router-dom";

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

    const vansElement = vansData.map(van => (
        <Link key={van.id} to={`/vans/${van.id}`}>
        <div key={van.id} className="van-tile">
        <img src={van.imageUrl} />
        <div className="van-info">
            <h3>{van.name}</h3>
            <p>${van.price}<span>/day</span></p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
    </div>
    </Link>
))
  return (

    <div className="van-list-container">
        <h1>Explore our van options</h1>
            <div className="van-list">
                {vansElement}
            </div>
        </div>
  )
}
