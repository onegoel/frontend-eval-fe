import './EventCardsContainer.css';
import { EventCard } from '../index.js';
import propTypes from 'prop-types';
import { useContext } from 'react';
import { EventContext } from '../../contexts';

const EventCardsContainer = ({ handleEventCardClick, handleBookmarking }) => {
  const { eventsList } = useContext(EventContext);
  return (
    <div className='eventCardsContainer'>
      {eventsList
        .sort(
          (eventFetchedBefore, eventFetchedNext) =>
            new Date(eventFetchedBefore.datetime) - new Date(eventFetchedNext.datetime),
        )
        .map((event) => (
          <EventCard
            key={event.id}
            event={event}
            handleEventCardClick={handleEventCardClick}
            handleBookmarking={handleBookmarking}
            isDetailsPage={false}
          />
        ))}
    </div>
  );
};

EventCardsContainer.propTypes = {
  eventsList: propTypes.array,
  handleEventCardClick: propTypes.func,
  clickedEventId: propTypes.number,
  handleBookmarking: propTypes.func,
};

export default EventCardsContainer;
