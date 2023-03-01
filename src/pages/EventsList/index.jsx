import { makeRequest } from '../../utils/makeRequest/';
import { GET_EVENTS_LIST, GET_THEMES } from '../../constants/apiEndPoints';
import { useEffect, useState } from 'react';
import './EventsList.css';
import { Header, EventCardsContainer } from '../../components';

const EventsList = () => {
  const [eventsList, setEventsList] = useState([]);
  const [themeColour, setThemeColour] = useState('#000000');
  useEffect(() => {
    makeRequest(GET_EVENTS_LIST).then((response) => {
      // console.log(response);
      eventsList !== null && setEventsList(response);
    });
  }, []);
  console.log(themeColour);

  useEffect(() => {
    makeRequest(GET_THEMES).then((response) => {
      const { themes, preferredId } = response;
      const preferredTheme = themes.find((theme) => theme.id === preferredId);
      setThemeColour(preferredTheme.colour);
    });
  }, []);

  const handleBookmarking = (eventId) => {
    const updatedEventsList = eventsList.map((event) => {
      if (event.id === eventId) {
        return { ...event, isBookmarked: !event.isBookmarked };
      }
      return event;
    });
    setEventsList(updatedEventsList);
  };

  return (
    <div className='eventsListPageContainer'>
      <Header />
      <EventCardsContainer eventsList={eventsList} />
    </div>
  );
};

export default EventsList;
