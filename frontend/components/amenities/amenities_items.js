import React from 'react';

const amenitiesItem = (props) => {
  let icon;
  let text;
  switch(props.type) {
    case "tv":
      icon = "fas fa-tv";
      text = "Television";
      break;
    case "heat":
      icon = "fas fa-fire";
      text = "Heater";
      break;
    case "pool":
      icon = "fas fa-swimming-pool";
      text = "Swimming Pool";
      break;
    case "shampoo":
      icon = "fas fa-shower";
      text = "Shampoo";
      break;
    case "wifi":
      icon = "fas fa-wifi";
      text = "Wifi";
      break;
    case "airConditioning":
      icon = "fas fa-wind";
      text = "Air Conditioning";
      break;
    case "iron":
      icon = "fas fa-user-tie";
      text = "Iron";
      break;
    case "hairDryer":
      icon = "fas fa-wind";
      text = "Hair Dryer";
      break;
    case "firstAid":
      icon = "fas fa-medkit";
      text = "First-Aid Kit";
      break;
    case "laundry":
      icon = "fas fa-tshirt";
      text = "Laundry";
      break;
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