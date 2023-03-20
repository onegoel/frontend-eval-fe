import './EventDetails.css';
import { Header } from '../../components';
import { useContext, useEffect, useState } from 'react';
import { EventContext } from '../../contexts';
import { EventCard } from '../../components';
import { makeRequest } from '../../utils/makeRequest';
import { GET_EVENT_BY_ID } from '../../constants/apiEndPoints';
import { useNavigate, useParams } from 'react-router-dom';
import propTypes from 'prop-types';

const EventDetails = ({ buttonClickHandlers }) => {
  const navigate = useNavigate();
  const { clickedEventId } = useContext(EventContext) || useParams();
  console.log('clickedEventId', clickedEventId);
  const [clickedEvent, setClickedEvent] = useState(null);

  useEffect(() => {
    makeRequest(GET_EVENT_BY_ID(clickedEventId), {}, navigate)
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
