import './EventCard.css';
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as farBookmark } from '@fortawesome/free-regular-svg-icons';
import { useContext, useState } from 'react';
import { convertDateTimeFormat } from '../../utils/common';
import { useNavigate } from 'react-router-dom';
import { EventContext } from '../../contexts';

const EventCard = ({ event, isDetailsPage, handleEventCardClick, handleBookmarking }) => {
  const {
    id,
    name,
    description,
    venue,
    datetime,
    areSeatsAvailable,
    isRegistered,
    isBookmarked,
    imgUrl,
  } = event;

  const navigate = useNavigate();

  const { clickedEventId } = useContext(EventContext);
  console.log(clickedEventId);

  const [bookmarkState, setBookmarkState] = useState(isBookmarked); // eslint-disable-line no-unused-vars

  return (
    <div className='eventCard' onClick={() => handleEventCardClick(id, navigate)}>
      <img src={imgUrl} alt='eventImage' className='eventCardImgContainer' />
      <div className='eventCardDetailsContainer'>
        <div className='eventCardDetails'>
          <p className='eventCardName'>{name.toUpperCase()}</p>
          <p className='eventCardDescription'>{description}</p>
          <p className='eventCardVenue'>VENUE: {venue}</p>
          <p className='eventCardDate'>DATE: {convertDateTimeFormat(datetime)}</p>
        </div>
        <div className='eventCardActions'>
          {isRegistered ? (
            <div className='eventCardStatus'>
              <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#A0F3AD' }} />
              <p className='eventCardStatusText' style={{ color: '#A0F3AD' }}>
                REGISTERED
              </p>
            </div>
          ) : areSeatsAvailable ? (
            <div className='eventCardStatus'></div>
          ) : (
            <div className='eventCardStatus'>
              <FontAwesomeIcon icon={faTimesCircle} style={{ color: '#ECECAB' }} />
              <p className='eventCardStatusText' style={{ color: '#ECECAB' }}>
                NO SEATS AVAILABLE
              </p>
            </div>
          )}
          <button
            className='bookmarkBtn'
            onClick={(e) => {
              e.stopPropagation();
              handleBookmarking(id, bookmarkState, setBookmarkState);
            }}
          >
            {bookmarkState ? (
              <FontAwesomeIcon icon={faBookmark} style={{ color: '#EA8282' }} />
            ) : (
              <FontAwesomeIcon icon={farBookmark} style={{ color: '#EA8282' }} />
            )}
          </button>
        </div>
        {isDetailsPage &&
          clickedEventId === id &&
          areSeatsAvailable &&
          (isRegistered ? (
            <button
              className='registerBtn'
              // onClick={(e) => {
              //   e.stopPropagation();
              //   handleRegistrationOnClick;
              // }}
            >
              UNREGISTER
            </button>
          ) : (
            <button
              className='registerBtn'
              // onClick={(e) => {
              //   e.stopPropagation();
              //   handleRegistrationOnClick;
              // }}
            >
              REGISTER
            </button>
          ))}
      </div>
    </div>
  );
};

EventCard.propTypes = {
  event: propTypes.shape({
    id: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    venue: propTypes.string.isRequired,
    datetime: propTypes.string.isRequired,
    areSeatsAvailable: propTypes.bool.isRequired,
    isRegistered: propTypes.bool.isRequired,
    isBookmarked: propTypes.bool.isRequired,
    imgUrl: propTypes.string.isRequired,
  }).isRequired,
  handleEventCardClick: propTypes.func,
  isDetailsPage: propTypes.bool.isRequired,
  // handleRegistrationOnClick: propTypes.func,
  handleBookmarking: propTypes.func,
};

export default EventCard;
