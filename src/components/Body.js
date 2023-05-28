import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

export default Body = () => {
    const [resData, setResData] = useState([]);     // restaurant data from api
    const [searchText, setSearchText] = useState("");   // text added in search bar
    const [filteredRestaurantData, setFilteredRestaurantData] = useState([]);     // filtered restaurant data
    

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1760819&lng=73.02288949999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setResData(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurantData(json?.data?.cards[2]?.data?.data?.cards);
    }

    return !resData.length ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={ (e) => setSearchText(e.target.value) }/>
                    <button onClick={ () => { setFilteredRestaurantData(resData.filter(restaurant => restaurant.data.name.toLowerCase().includes(searchText.toLowerCase()))) }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => { setFilteredRestaurantData(resData.filter(restaurant => restaurant.data.avgRating > 4)); }}>Top Rated Restaurnats</button>
            </div>
            <div className="res-container">
                {filteredRestaurantData.map(res => <RestaurantCard key={res.data.id} resProp={res} />)}
            </div>
        </div>
    )
}