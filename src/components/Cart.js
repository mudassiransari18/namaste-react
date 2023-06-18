import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../redux/store/cartSlice";

export default Cart = () => {

    const cartItems = useSelector(store => store.cart.items);
    const dispatch = useDispatch();

    const clearCartHandler = () => {
        dispatch(clearCart());
    }

    return (
        <div>
            <h1 className="text-4xl">Cart Items -- { cartItems.length }</h1>
            <button className="p-2 m-1 bg-green-100" onClick={clearCartHandler}>Clear Cart</button>
            <div className="flex">
                {
                    cartItems.map(item => <FoodItem key= { item.id } { ...item } />)  
                }
            </div>            
        </div>
    )
}