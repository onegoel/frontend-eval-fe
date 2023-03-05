/* eslint-disable no-unused-vars */
import './EventsList.css';
import { Header, EventCardsContainer, FilterSearchSection, Footer } from '../../components';
import propTypes from 'prop-types';
import { useState, useContext, useEffect } from 'react';
import { EventContext } from '../../contexts';

const EventsList = ({ buttonClickHandlers }) => {
  const { eventsList } = useContext(EventContext);
  // console.log('evenl', eventsList);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState('ALL');
  const [filteredData, setFilteredData] = useState(eventsList);

  const { handleThemeChange } = buttonClickHandlers;

  useEffect(() => {
    const filteredData = eventsList.filter((event) => {
      if (selectedOption === 'BOOKMARKED') {
        return event.isBookmarked;
      } else if (selectedOption === 'REGISTERED') {
        return event.isRegistered;
      } else if (selectedOption === 'SEATS AVAILABLE') {
        return event.areSeatsAvailable;
      } else {
        return true;
      }
    });
    setFilteredData(filteredData);
  }, [selectedOption, eventsList]);

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

  console.log(filteredData);

  return (
    <div>
      {/* {className='eventsListPageContainer'>} */}
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
          filteredEvents={filteredData}
        />
      </div>
      <Footer handleThemeChange={handleThemeChange} />
    </div>
  );
};

EventsList.propTypes = {
  eventsList: propTypes.array,
  buttonClickHandlers: propTypes.shape({
    handleBookmarkOnClick: propTypes.func,
    handleRegistrationOnClick: propTypes.func,
    handleEventCardClick: propTypes.func,
    handleThemeChange: propTypes.func,
  }),
};

export default EventsList;
