import './EventCard.css';
import propTypes from 'prop-types';

const EventCard = ({
  //   id,
  name,
  description,
  venue,
  datetime,
  areSeatsAvailable,
  isRegistered,
  isBookmarked,
  imgUrl,
}) => {
  const eventCardClickHandler = () => {};
  return (
    <div className='eventCard' onClick={eventCardClickHandler}>
      <img src={imgUrl} alt='eventImage' className='eventCardImgContainer' />
      <div className='eventCardDetailsContainer'>
        <div className='eventCardDetails'>
          <p className='eventCardName'>{name.toUpperCase()}</p>
          <p className='eventCardDescription'>{description}</p>
          <p className='eventCardVenue'>VENUE: {venue}</p>
          <p className='eventCardDate'>DATE: {datetime}</p>
        </div>

        <div className='eventCardActions'>
          {isRegistered ? (
            <div className='eventCardStatus'>
              <i className='fas fa-check-circle' style={{ color: '#A0F3AD' }}></i>
              <p className='eventCardStatusText' style={{ color: '#A0F3AD' }}>
                REGISTERED
              </p>
            </div>
          ) : areSeatsAvailable ? (
            <div className='eventCardStatus'></div>
          ) : (
            <div className='eventCardStatus'>
              <i className='fas fa-xmark-circle' style={{ color: '#ECECAB' }}></i>
              <p className='eventCardStatusText' style={{ color: '#ECECAB' }}>
                NO SEATS AVAILABLE
              </p>
            </div>
          )}
          <button>
            {isBookmarked ? (
              <i className='fas fa-bookmark' style={{ color: '#EA8282' }}></i>
            ) : (
              <i className='far fa-bookmark' style={{ color: '#EA8282' }}></i>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

EventCard.propTypes = {
  id: propTypes.number,
  name: propTypes.string,
  description: propTypes.string,
  venue: propTypes.string,
  datetime: propTypes.string,
  areSeatsAvailable: propTypes.bool,
  isRegistered: propTypes.bool,
  isBookmarked: propTypes.bool,
  imgUrl: propTypes.string,
};

export default EventCard;
