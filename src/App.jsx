import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GET_EVENTS_LIST, PATCH_EVENT_BY_ID, PUT_THEME } from './constants/apiEndPoints';
import { ERROR_ROUTE, HOME_ROUTE, EVENT_DETAILS_ROUTE, NOT_FOUND_ROUTE } from './constants/routes';
import { EventContext } from './contexts';
import { EventsList, EventDetails, Error, NotFound } from './pages';
import { makeRequest } from './utils/makeRequest';
import { getThemeDetails } from './utils/common';

function App() {
  const [clickedEventId, setClickedEventId] = useState(null);
  const [eventsList, setEventsList] = useState([]);
  const [themeDetails, setThemeDetails] = useState(null);
  const [isThemeSaved, setIsThemeSaved] = useState(true);

  useEffect(() => {
    makeRequest(GET_EVENTS_LIST)
      .then((response) => {
        eventsList !== null && setEventsList(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getThemeDetails().then((response) => {
      setThemeDetails(response);
    });
  }, []);

  const handleThemeSave = async (navigate) => {
    const theme = themeDetails?.themes.find((theme) => theme.id === themeDetails.preferredThemeId);
    await makeRequest(
      PUT_THEME(theme.id),
      {
        data: { preferredThemeId: theme.id },
      },
      navigate,
    );
    setIsThemeSaved(true);
  };

  const handleThemeChange = async (theme) => {
    if (theme.preferredThemeId !== themeDetails.preferredThemeId) {
      setThemeDetails({
        ...themeDetails,
        preferredThemeId: theme.id,
        preferredThemeColour: theme.colorHexCode,
      });
      setIsThemeSaved(false);
    }
  };

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
    handleThemeSave: handleThemeSave,
    handleThemeChange: handleThemeChange,
  };

  return (
    <div className='App'>
      <EventContext.Provider value={{ eventsList, clickedEventId, themeDetails, isThemeSaved }}>
        <BrowserRouter>
          <Routes>
            <Route
              path={HOME_ROUTE}
              element={<EventsList buttonClickHandlers={buttonClickHandlers} />}
            />
            <Route path={ERROR_ROUTE(':statusCode')} element={<Error />} />
            <Route
              path={`/events/:clickedEventId`}
              element={<EventDetails buttonClickHandlers={buttonClickHandlers} />}
            />
            <Route path={NOT_FOUND_ROUTE} element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </EventContext.Provider>
    </div>
  );
}

export default App;
