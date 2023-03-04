import './FilterBar.css';
import { faFilter, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import propTypes from 'prop-types';

const FilterBar = ({ showFilters, showClickHandler }) => {
  return (
    <div className='filterBarContainer'>
      <FontAwesomeIcon icon={faFilter} className='filterIcon' />
      <p className='filterText'>FILTER</p>
      {showFilters ? (
        <FontAwesomeIcon icon={faChevronUp} className='chevronIcon' onClick={showClickHandler} />
      ) : (
        <FontAwesomeIcon icon={faChevronDown} className='chevronIcon' onClick={showClickHandler} />
      )}
    </div>
  );
};

FilterBar.propTypes = {
  showFilters: propTypes.bool,
  showClickHandler: propTypes.func,
};

export default FilterBar;
