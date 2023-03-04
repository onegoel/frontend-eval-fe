/* eslint-disable no-unused-vars */
import './EventsList.css';
import { Header, EventCardsContainer, FilterSearchSection } from '../../components';
import propTypes from 'prop-types';
import { useState } from 'react';

const EventsList = ({ buttonClickHandlers }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOptions, setFilterOptions] = useState({
    ALL: true,
    BOOKMARKED: false,
    REGISTERED: false,
    'SEATS AVAILABLE': false,
  });

  const handleSearchQueryChange = (event) => {
    event && setSearchQuery(event.target.value);
  };

  const filterAndSearchHandlers = {
    handleSearchQueryChange,
  };

  return (
    <div className='eventsListPageContainer'>
      <Header />
      <div className='eventsListPageContents'>
        <FilterSearchSection
          filterAndSearchHandlers={filterAndSearchHandlers}
          searchQuery={searchQuery}
        />
        <EventCardsContainer buttonClickHandlers={buttonClickHandlers} searchQuery={searchQuery} />
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
