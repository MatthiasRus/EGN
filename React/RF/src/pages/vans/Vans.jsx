import React from "react";
import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import { getData } from "../../api";

export function loader() {
        return getData();
  }

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [error, setError] = React.useState(null);

    const typeFilter = searchParams.get("type");
    const vansData = useLoaderData();
    
       const filteredElement = typeFilter
        ? vansData.filter(van => van.type === typeFilter)
        : vansData;
        
    const vansElement = filteredElement?.map(van => (
        <div key={van.id} className="van-tile">
            <Link
                to={van.id}
                state={{search : `?${searchParams.toString()}`,type: typeFilter}}
                aria-label={`View details for ${van.name}, priced at $${van.price} per day`}
            >
                <img src={van.imageUrl} alt={`Image of ${van.name}`} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>
                        ${van.price}
                        <span>/day</span>
                    </p>
                </div>
                <i className={`van-type ${van.type} ${typeFilter === van.type ? "selected" : ""}`}>
                    {van.type}
                </i>
            </Link>
        </div>
    ));

    function handleFiltersChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key);
            } else {
                prevParams.set(key, value);
            }
            return prevParams;
        });
    }

    if(error){
        return <h1>There was an error {error.message}</h1>
    }
    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <button
                className={typeFilter === "simple" ? "selected" : ""}
                onClick={() => handleFiltersChange("type", "simple")}
            >
                Simple
            </button>
            <button
                className={typeFilter === "luxury" ? "selected" : ""}
                onClick={() => handleFiltersChange("type", "luxury")}
            >
                Luxury
            </button>
            <button
                className={typeFilter === "rugged" ? "selected" : ""}
                onClick={() => handleFiltersChange("type", "rugged")}
            >
                Rugged
            </button>

            {typeFilter && (
                <button onClick={() => handleFiltersChange("type", null)}>
                    Clear Filter
                </button>
            )}
            <div className="van-list">{vansElement}</div>
        </div>
    );
}
