import './EventsList.css';
import { Header, EventCardsContainer, FilterSearchSection } from '../../components';
import propTypes from 'prop-types';

const EventsList = ({ handleEventCardClick, eventsList }) => {
  return (
    <div className='eventsListPageContainer'>
      <Header />
      <div className='eventsListPageContents'>
        <FilterSearchSection />
        <EventCardsContainer eventsList={eventsList} handleEventCardClick={handleEventCardClick} />
      </div>
    </div>
  );
};

EventsList.propTypes = {
  handleEventCardClick: propTypes.func,
  eventsList: propTypes.array,
};

export default EventsList;
