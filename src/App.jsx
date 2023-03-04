import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { GET_EVENTS_LIST } from './constants/apiEndPoints';
import { ERROR_ROUTE, HOME_ROUTE, EVENT_DETAILS_ROUTE } from './constants/routes';
import { EventContext } from './contexts';
import { EventsList, EventDetails, Error } from './pages';
import { makeRequest } from './utils/makeRequest';

function App() {
  const [clickedEventId, setClickedEventId] = useState(null);
  const [eventsList, setEventsList] = useState([]);

  useEffect(() => {
    makeRequest(GET_EVENTS_LIST)
      .then((response) => {
        eventsList !== null && setEventsList(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleEventCardClick = (eventId, navigate) => {
    eventId !== null && setClickedEventId(eventId);
    navigate(EVENT_DETAILS_ROUTE(eventId));
  };

  // console.log(eventsList);

  return (
    <div className='App'>
      <EventContext.Provider value={{ eventsList, clickedEventId }}>
        <BrowserRouter>
          <Routes>
            <Route
              path={HOME_ROUTE}
              element={
                <EventsList handleEventCardClick={handleEventCardClick} eventsList={eventsList} />
              }
            />
            <Route path={ERROR_ROUTE} element={<Error />} />
            <Route path={EVENT_DETAILS_ROUTE(':eventId')} element={<EventDetails />} />
          </Routes>
        </BrowserRouter>
      </EventContext.Provider>
    </div>
  );
}

export default App;
