import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { GET_EVENTS_LIST, PATCH_EVENT_BY_ID } from './constants/apiEndPoints';
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

  const handleBookmarkOnClick = async (eventId, bookmarkState, setBookmarkState, navigate) => {
    const newBookmarkState = !bookmarkState;
    await makeRequest(
      PATCH_EVENT_BY_ID(eventId),
      {
        data: { isBookmarked: newBookmarkState },
      },
      navigate,
    );
    setBookmarkState(newBookmarkState);
    eventsList.map((event) => {
      event.id === eventId && (event.isBookmarked = !event.isBookmarked);
    });
  };

  const handleRegistrationOnClick = async (
    eventId,
    registrationState,
    setRegistrationState,
    navigate,
  ) => {
    const newRegistrationState = !registrationState;
    await makeRequest(
      PATCH_EVENT_BY_ID(eventId),
      {
        data: { isRegistered: newRegistrationState },
      },
      navigate,
    );
    setRegistrationState(newRegistrationState);
    eventsList.map((event) => {
      event.id === eventId && (event.isRegistered = !event.isRegistered);
    });
  };

  const buttonClickHandlers = {
    handleBookmarkOnClick: handleBookmarkOnClick,
    handleRegistrationOnClick: handleRegistrationOnClick,
    handleEventCardClick: handleEventCardClick,
  };

  // console.log(eventsList);

  return (
    <div className='App'>
      <EventContext.Provider value={{ eventsList, clickedEventId }}>
        <BrowserRouter>
          <Routes>
            <Route
              path={HOME_ROUTE}
              element={<EventsList buttonClickHandlers={buttonClickHandlers} />}
            />
            <Route path={ERROR_ROUTE} element={<Error />} />
            <Route
              path={EVENT_DETAILS_ROUTE(':eventId')}
              element={<EventDetails buttonClickHandlers={buttonClickHandlers} />}
            />
          </Routes>
        </BrowserRouter>
      </EventContext.Provider>
    </div>
  );
}

export default App;
