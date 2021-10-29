import React, { useContext } from "react";
import MeetUpList from "../components/meetups/MeetUpList";
import FavouriteContext from "../components/store/favourite-context";

const Favourites = () => {
  const favouritesCtx = useContext(FavouriteContext);

  let content;
  if (favouritesCtx.totalFavourites === 0) {
    content = <p>You got not favourites. Start adding some!</p>;
  } else {
    content = <MeetUpList meetups={favouritesCtx.favourites} />;
  }
  return (
    <section>
      <h1>My Favourite</h1>
      {content}
    </section>
  );
};

export default Favourites;
