import './EventCardsContainer.css';
import { EventCard } from '../index.js';
import propTypes from 'prop-types';
import moment from 'moment';

const EventCardsContainer = ({ eventsList }) => {
  const dateTimeConverter = (usaDateTime) => {
    const indianDateTime = moment.utc(usaDateTime).local(false).format('DD-MM-YYYY, HH:mm');
    return indianDateTime;
  };

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
            name={event.name}
            description={event.description}
            venue={event.venue}
            datetime={dateTimeConverter(event.datetime)}
            areSeatsAvailable={event.areSeatsAvailable}
            isRegistered={event.isRegistered}
            isBookmarked={event.isBookmarked}
            imgUrl={event.imgUrl}
          />
        ))}
    </div>
  );
};

EventCardsContainer.propTypes = {
  eventsList: propTypes.array,
};

export default EventCardsContainer;
