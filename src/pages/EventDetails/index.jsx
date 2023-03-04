/* eslint-disable no-unused-vars */

import './EventDetails.css';
import { Header } from '../../components';
import { useContext, useEffect, useState } from 'react'; //eslint-disable-line
import { EventContext } from '../../contexts';
import { EventCard } from '../../components';
import { makeRequest } from '../../utils/makeRequest';
import { GET_EVENT_BY_ID, PATCH_EVENT_BY_ID } from '../../constants/apiEndPoints'; //eslint-disable-line
import { useNavigate } from 'react-router-dom';

const EventDetails = () => {
  // const navigate = useNavigate();
  // const { clickedEventId, eventsList } = useContext(EventContext); //eslint-disable-line
  // const [clickedEvent, setClickedEvent] = useState(null);
  // useEffect(() => {
  // makeRequest(GET_EVENT_BY_ID(clickedEventId), {}, navigate) // going
  //   .then((response) => {
  //     const recievedEvent = response;
  //     setClickedEvent(recievedEvent);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // }, [clickedEventId]);
  // const selectedEvent = eventsList.find((event) => event.id === clickedEventId);
  // setClickedEvent(selectedEvent);
  // console.log(clickedEvent);
  // console.log(clickedEventId); // getting
  // const handleRegistrationOnClick = async () => {
  //   const isRegistered = clickedEvent.isRegistered;
  //   try {
  //     await makeRequest(
  //       PATCH_EVENT_BY_ID(clickedEventId),
  //       {
  //         data: {
  //           isRegistered: !isRegistered,
  //         },
  //       },
  //       navigate,
  //     );
  //     setClickedEvent({ ...clickedEvent, isRegistered: !isRegistered });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // return (
  //   <div className='eventDetailsPageContainer'>
  //     <Header />
  //     <div className='eventDetails'>
  //       <EventCard
  //         event={clickedEvent}
  //         isDetailsPage={true}
  //         handleRegistrationOnClick={handleRegistrationOnClick}
  //       />
  //     </div>
  //   </div>
  // );
};

export default EventDetails;
