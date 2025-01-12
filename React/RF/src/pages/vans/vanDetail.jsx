import { useEffect, useState } from "react"
import { useParams, Link, useLocation } from "react-router-dom"

export default function VanDetail() {
    const params = useParams();
    const [van, setVan] = useState();
    const location = useLocation();

    useEffect(() => {
       ( async function(){
                const response = await fetch(`/api/vans/${params.id}`);
                const data = await response.json();
                setVan(data.vans)
        })();
    },[params.id]);
    const search = location.state?.search || "";
    console.log(search)
  return (
    <div className="van-detail-container">
      <Link
        to={`..${search}`}
        relative="path"
      >&larr; back to {location.state?.type || 'all'} vans</Link>
    {van ? (
        <div className="van-detail">
            <img src={van.imageUrl} />
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
            <h2>{van.name}</h2>
            <p className="van-price"><span>${van.price}</span>/day</p>
            <p>{van.description}</p>
            <button className="link-button">Rent this van</button>
        </div>
    ) : <h2>Loading...</h2>}
</div>
  )
}
