import React from 'react';

const amenitiesItem = (props) => {
  let icon;
  let text;
  switch(props.type) {
    case "tv":
      icon = "fas fa-tv";
      text = "Television";
    case "heat":
      icon = "fas fa-fire";
      text = "Heater";
    case "pool":
      icon = "fas fa-swimming-pool";
      text = "Swimming Pool";
    case "shampoo":
      icon = "fas fa-shower";
      text = "Shampoo";
    case "wifi":
      icon = "fas fa-wifi";
      text = "Wifi";
    case "airConditioning":
      icon = "fas fa-wind";
      text = "Air Conditioning";
    case "iron":
      icon = "fas fa-user-tie";
      text = "Iron";
    case "hairDryer":
      icon = "fas fa-wind";
      text = "Hair Dryer";
    case "firstAid":
      icon = "fas fa-medkit";
      text = "First-Aid Kit";
    case "laundry":
      icon = "fas fa-tshirt";
      text = "Laundry";
    default:
       null;
  }
  return(
    <div className="amenities">
      <div className="spot-show-icon">
        <i className={icon}></i>
      </div>
      <div className="amenities-text">
        {text}
      </div>
    </div>
  )
}

export default amenitiesItem;