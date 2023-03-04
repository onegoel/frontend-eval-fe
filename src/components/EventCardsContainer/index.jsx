import './EventCardsContainer.css';
import { EventCard } from '../index.js';
import propTypes from 'prop-types';
import { useContext } from 'react';
import { EventContext } from '../../contexts';

const EventCardsContainer = ({ buttonClickHandlers, searchQuery }) => {
  const { eventsList } = useContext(EventContext);

  return (
    <div className='eventCardsContainer'>
      {eventsList
        .sort(
          (eventFetchedBefore, eventFetchedNext) =>
            new Date(eventFetchedBefore.datetime) - new Date(eventFetchedNext.datetime),
        )
        .filter((event) => event.name.toLowerCase().includes(searchQuery.toLowerCase()))
        .map((event) => (
          <EventCard key={event.id} event={event} buttonClickHandlers={buttonClickHandlers} />
        ))}
    </div>
  );
};

EventCardsContainer.propTypes = {
  buttonClickHandlers: propTypes.shape({
    handleEventCardClick: propTypes.func,
    handleBookmarkOnClick: propTypes.func,
    handleRegistrationOnClick: propTypes.func,
  }),
  searchQuery: propTypes.string,
};

export default EventCardsContainer;
