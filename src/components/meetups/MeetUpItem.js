import React from "react";
import classes from "../meetups/MeetUpItem.module.css";
import Card from "../ui/Card";
import { useContext } from "react";
import FavouriteContext from "../store/favourite-context";

const MeetUpItem = (props) => {
  const favouritesCtx = useContext(FavouriteContext);
  const itemIsFavourite = favouritesCtx.itemIsFavourite(props.id);

  function toggleFavouriteStatusHandler() {
    if (itemIsFavourite) {
      favouritesCtx.removeFavourite(props.id);
    } else {
      favouritesCtx.addFavourite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title}></img>
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavouriteStatusHandler}>
            {itemIsFavourite ? "Remove from Favourite" : "To Favourites"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetUpItem;
