import { useState, useEffect, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { PAGE_LOAD_URL } from "../utils/constants";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

export default Body = () => {

    const isOnline = useOnline();
    if (!isOnline) return <h1>Check your internet connection</h1>;

    const [resData, setResData] = useState([]);     // restaurant data from api
    const [searchText, setSearchText] = useState("");   // text added in search bar
    const [filteredRestaurantData, setFilteredRestaurantData] = useState([]);     // filtered restaurant data
    const { user, setUser } = useContext(UserContext);      // context data 

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
        <div className="mt-3">
            <div className="flex justify-between bg-purple-100">
                <div className="flex justify-normal p-5">
                    <input type="text" placeholder="Search" className="border-lime-600" value={searchText} onChange={ (e) => setSearchText(e.target.value) }/>
                    <button className="w-16 ml-5 bg-purple-950 hover:bg-purple-700 text-white text-center rounded" onClick={ () => { setFilteredRestaurantData(filterData(searchText, resData)) }}>Search</button>
                </div>
                <div className="flex justify-normal p-5">
                    <input type="text" placeholder="Type here" className="border-lime-600" value={user.name} onChange={ (e) => setUser( { name: e.target.value, email: user.email } ) }/>
                    <button className="w-16 ml-5 bg-purple-950 hover:bg-purple-700 text-white text-center rounded" onClick={ () => { setFilteredRestaurantData(filterData(searchText, resData)) }}>Search</button>
                </div>
                <div className="p-5">
                    <button className="w-48 bg-purple-950 text-white text-center rounded" onClick={() => { setFilteredRestaurantData(resData.filter(restaurant => restaurant.data.avgRating > 4)); }}>Top Rated Restaurnats</button>
                </div>
            </div>
            <div className="flex flex-wrap">
                {filteredRestaurantData.map(res => <RestaurantCard key={res.data.id} resProp={res} />)}
            </div>
        </div>
    )
}