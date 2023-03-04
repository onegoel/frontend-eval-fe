/* eslint-disable no-unused-vars */
import './EventsList.css';
import { Header, EventCardsContainer, FilterSearchSection } from '../../components';
import propTypes from 'prop-types';
import { useState, useContext, useEffect } from 'react';
import { EventContext } from '../../contexts';

const EventsList = ({ buttonClickHandlers }) => {
  const { eventsList } = useContext(EventContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState('ALL');
  const [filteredData, setFilteredData] = useState(eventsList);

  useEffect(() => {
    const filteredData = eventsList.filter((event) => {
      if (selectedOption === 'BOOKMARKED') {
        return event.isBookmarked;
      } else if (selectedOption === 'REGISTERED') {
        return event.isRegistered;
      } else if (selectedOption === 'SEATS AVAILABLE') {
        return event.seatsAvailable;
      } else {
        return true;
      }
    });
    setFilteredData(filteredData);
  }, [selectedOption]);

  const handleFilterOptionClick = (option) => {
    option && setSelectedOption(option);
  };

  const handleSearchQueryChange = (event) => {
    event && setSearchQuery(event.target.value);
  };

  const filterAndSearchHandlers = {
    handleSearchQueryChange,
    handleFilterOptionClick,
  };

  const filteredEvents = filteredData;

  return (
    <div className='eventsListPageContainer'>
      <Header />
      <div className='eventsListPageContents'>
        <FilterSearchSection
          filterAndSearchHandlers={filterAndSearchHandlers}
          searchQuery={searchQuery}
          selectedOption={selectedOption}
        />
        <EventCardsContainer
          buttonClickHandlers={buttonClickHandlers}
          searchQuery={searchQuery}
          filteredEvents={filteredEvents}
        />
      </div>
    </div>
  );
};

EventsList.propTypes = {
  eventsList: propTypes.array,
  buttonClickHandlers: propTypes.shape({
    handleBookmarkOnClick: propTypes.func,
    handleRegistrationOnClick: propTypes.func,
    handleEventCardClick: propTypes.func,
  }),
};

export default EventsList;
