/* eslint-disable no-unused-vars */

import './EventDetails.css';
import { Header } from '../../components';
import { useContext, useEffect, useState } from 'react'; //eslint-disable-line
import { EventContext } from '../../contexts';
import { EventCard } from '../../components';
import { makeRequest } from '../../utils/makeRequest';
import { GET_EVENT_BY_ID, PATCH_EVENT_BY_ID } from '../../constants/apiEndPoints'; //eslint-disable-line
import { useNavigate } from 'react-router-dom';
import propTypes from 'prop-types';

const EventDetails = ({ buttonClickHandlers }) => {
  const navigate = useNavigate();
  const { clickedEventId } = useContext(EventContext);
  const [clickedEvent, setClickedEvent] = useState(null);

  useEffect(() => {
    makeRequest(GET_EVENT_BY_ID(clickedEventId), {}, navigate) // going
      .then((response) => {
        const recievedEvent = response;
        setClickedEvent(recievedEvent);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [clickedEventId]);

  const eventToDisplay = clickedEvent;

  return (
    <div className='eventDetailsPageContainer'>
      <Header />
      <div className='eventDetails'>
        {eventToDisplay && (
          <EventCard
            event={eventToDisplay}
            buttonClickHandlers={buttonClickHandlers}
            isDetailsPage={true}
          />
        )}
      </div>
    </div>
  );
};

EventDetails.propTypes = {
  buttonClickHandlers: propTypes.shape({
    handleEventCardClick: propTypes.func,
    handleBookmarkOnClick: propTypes.func,
    handleRegistrationOnClick: propTypes.func,
  }),
};

export default EventDetails;
