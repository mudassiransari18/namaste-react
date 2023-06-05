import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { PAGE_LOAD_URL } from "../utils/constants";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

export default Body = () => {

    const isOnline = useOnline();
    if (!isOnline) return <h1>Check your internet connection</h1>;

    const [resData, setResData] = useState([]);     // restaurant data from api
    const [searchText, setSearchText] = useState("");   // text added in search bar
    const [filteredRestaurantData, setFilteredRestaurantData] = useState([]);     // filtered restaurant data

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const data = await fetch(PAGE_LOAD_URL);
        const json = await data.json();
        setResData(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurantData(json?.data?.cards[2]?.data?.data?.cards);
    }

    return !resData.length ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={ (e) => setSearchText(e.target.value) }/>
                    <button onClick={ () => { setFilteredRestaurantData(filterData(searchText, resData)) }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => { setFilteredRestaurantData(resData.filter(restaurant => restaurant.data.avgRating > 4)); }}>Top Rated Restaurnats</button>
            </div>
            <div className="res-container">
                {filteredRestaurantData.map(res => <RestaurantCard key={res.data.id} resProp={res} />)}
            </div>
        </div>
    )
}