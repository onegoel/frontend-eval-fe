import './EventsList.css';
import { Header, EventCardsContainer, FilterSearchSection } from '../../components';
import propTypes from 'prop-types';
import { makeRequest } from '../../utils/makeRequest';
import { PATCH_EVENT_BY_ID } from '../../constants/apiEndPoints';
import { useNavigate } from 'react-router-dom';

const EventsList = ({ handleEventCardClick }) => {
  const navigate = useNavigate();

  const handleBookmarking = async (eventId, bookmarkState, setBookmarkState) => {
    const newBookmarkState = !bookmarkState;
    await makeRequest(
      PATCH_EVENT_BY_ID(eventId),
      {
        data: { isBookmarked: newBookmarkState },
      },
      navigate,
    );
    setBookmarkState(newBookmarkState);
  };

  return (
    <div className='eventsListPageContainer'>
      <Header />
      <div className='eventsListPageContents'>
        <FilterSearchSection />
        <EventCardsContainer
          handleEventCardClick={handleEventCardClick}
          handleBookmarking={handleBookmarking}
        />
      </div>
    </div>
  );
};

EventsList.propTypes = {
  handleEventCardClick: propTypes.func,
  eventsList: propTypes.array,
};

export default EventsList;
