import React from "react";
import { useHistory } from "react-router-dom";
import NewMeetUpForm from "../components/meetups/NewMeetUpForm";

//fetch sending http request ... alternate : axios
//https://react-meetup-160a9-default-rtdb.firebaseio.com/ + tablename + .json(something firebase needed dont know y)
//history.replace('/') -- navigate us to / but we cant go back from / to eariler page
const NewMeetup = () => {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-meetup-160a9-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetUpForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetup;
