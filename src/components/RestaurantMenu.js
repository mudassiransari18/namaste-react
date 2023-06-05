import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

export default RestaurantMenu = () => {
    const params = useParams();
    const restaurant = useRestaurant(params.resId);

    if (!restaurant) {
        return <Shimmer />;
    }

    const { name, cuisines, costForTwoMessage } = restaurant?.cards[0]?.card?.card?.info;
    const { itemCards } = restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

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