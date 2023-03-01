import { makeRequest } from '../../utils/makeRequest/makeRequest';
import { GET_EVENTS_LIST } from '../../constants/apiEndPoints';
import { useEffect, useState } from 'react';
import './EventsList.css';
import { Header, EventCardsContainer, SearchFilterBar } from '../../components';

const EventsList = () => {
  const [eventsList, setEventsList] = useState([]);
  useEffect(() => {
    makeRequest(GET_EVENTS_LIST).then((response) => {
      // console.log(response);
      eventsList !== null && setEventsList(response);
    });
  }, []);

  //   const handleBookmarking = (eventId) => {

  //   }

  console.log(eventsList);
  return (
    <div className='eventsListPageContainer'>
      <Header />
      <SearchFilterBar />
      <EventCardsContainer eventsList={eventsList} />
    </div>
  );
};

export default EventsList;
