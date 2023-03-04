import './EventCardsContainer.css';
import { EventCard } from '../index.js';
import propTypes from 'prop-types';

const EventCardsContainer = ({ eventsList, handleEventCardClick }) => {
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
};

export default EventCardsContainer;
