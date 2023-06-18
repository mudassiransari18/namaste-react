import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { LOGO_URL } from "../utils/constants";
import { addItem } from "../redux/store/cartSlice";
import { useDispatch } from "react-redux";

export default RestaurantMenu = () => {
    const params = useParams();
    const restaurant = useRestaurant(params.resId);
    const dispatch = useDispatch();

    if (!restaurant) {
        return <Shimmer />;
    }

    const { name, cuisines, costForTwoMessage, cloudinaryImageId } = restaurant?.cards[0]?.card?.card?.info;
    const { itemCards } = restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const addItemHandler = (item) => {
        dispatch(addItem(item));
    }

    return (
        <div className="flex">
            <div>
                <img className="res-logo" alt="Image of some food" src= {LOGO_URL + cloudinaryImageId} />
                <h1>{ name }</h1>
                <h5>{ cuisines.join(", ") } - { costForTwoMessage }</h5> 
            </div>

            <div>
                <h2 className="text-4xl">Menu</h2>
                <ul>
                    { itemCards.map(item => 
                        <li key={ item.card.info.id }>
                            { item.card.info.name } - Rs { item.card.info.price / 100 || item.card.info.defaultPrice / 100 } - 
                            <button className="p-2 m-1 bg-green-100" onClick={() => addItemHandler(item.card.info)}>Add Item</button>
                        </li>) 
                    }
                </ul>
            </div>
        </div>
    );
}