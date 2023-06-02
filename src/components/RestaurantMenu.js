import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

export default RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const params = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(RESTAURANT_URL+params.resId);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    };

    if (!resInfo) {
        return <Shimmer />;
    }

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return (
        <div className="menu">
            <h1>{ name }</h1>
            <h5>{ cuisines.join(", ") } - { costForTwoMessage }</h5> 
            <h2>Menu</h2>
            <ul>
                { itemCards.map(item => <li>{ item.card.info.name } - Rs { item.card.info.price / 100 || item.card.info.defaultPrice / 100 }</li>) }
            </ul>
        </div>
    );
}