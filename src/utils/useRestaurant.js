import { useEffect, useState } from "react";
import { RESTAURANT_URL } from "./constants"; 

export default useRestaurant = (params) => {

    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(RESTAURANT_URL + params);
        const json = await data.json();
        console.log(json);
        setRestaurant(json.data);
    };

    return restaurant;
}