import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

export default RestaurantCard = (props) => {
    return  (
      <Link to={ `/restaurant/${props.resProp.data.id}` }>
        <div className="bg-purple-100 hover:bg-white w-52 h-80 m-2 drop-shadow-md">
          <img className="res-logo" alt="Image of some food" src= {LOGO_URL + props.resProp.data.cloudinaryImageId} />
          <h3>{ props.resProp.data.name }</h3>
          <h4>{ props.resProp.data.cuisines.join(", ") }</h4>
          <h4>{ props.resProp.data.avgRating } stars</h4>
          <h4>{ props.resProp.data.deliveryTime } minutes</h4>
        </div>
      </Link>
    )
  }