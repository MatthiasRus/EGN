import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom"

export default function HostVansLayout() {
    
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
    const activeStyle = { fontWeight : "bold",
        textDecoration : "underlined",
        color : "#161616"}
  return (
<>
{      vans ? ( 
     <div className="host-van-details">
            <Link to={'/host/vans'} className="back-link">back to all vans</Link>
            <div className="upper">
                <div className="upper-top">
                    <img src={vans.imageUrl} alt={`Image of ${vans.name}`}  />
                <div className="van-info">
                    <h1>{vans.name}</h1>
                    <h2>${vans.price}<span>/day</span></h2>
                    <i className={`van-type ${vans.type} selected`}>{vans.type}</i>
                </div>
                </div>
                
                <div className="links">
                <NavLink
                    to={`details`}
                    end
                    style={({isActive}) => isActive? activeStyle : null}
                >Details</NavLink>
                <NavLink
                to={`pricing`}
                style={({isActive}) => isActive? activeStyle : null}
                >Pricing</NavLink>
                <NavLink
                to={`photos`}
                style={({isActive}) => isActive? activeStyle : null}
                >Photos</NavLink>
            </div>
            </div>
            
          
        </div>
        
         )

: <>
<p>Loading...</p>
</>
}
<Outlet/>
</>
  )
}
