import { LOGO_URL } from "../utils/constants";

export default RestaurantCard = (props) => {
    return  (
      <div className="res-card" style={ { backgroundColor: "#f0f0f0" } }>
        <img className="res-logo" alt="Image of some food" src= {LOGO_URL + props.resProp.data.cloudinaryImageId} />
        <h3>{ props.resProp.data.name }</h3>
        <h4>{ props.resProp.data.cuisines.join(", ") }</h4>
        <h4>{ props.resProp.data.avgRating } stars</h4>
        <h4>{ props.resProp.data.deliveryTime } minutes</h4>
      </div>
    )
  }