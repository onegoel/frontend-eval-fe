import './FilterSearchSection.css';
import { useContext, useState } from 'react';
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import RadioButton from '../RadioButton';
import { EventContext } from '../../contexts';

const FilterSearchSection = ({ searchQuery, filterAndSearchHandlers, selectedOption }) => {
  const [showFilters, setShowFilters] = useState(false);
  const { themeDetails } = useContext(EventContext);
  const preferredThemeColour = themeDetails?.preferredThemeColour;

  const { handleSearchQueryChange, handleFilterOptionClick } = filterAndSearchHandlers;

  const handleShowFiltersClick = () => {
    setShowFilters(!showFilters);
  };

  const options = ['ALL', 'BOOKMARKED', 'REGISTERED', 'SEATS AVAILABLE'];

  return (
    <div className='filterAndSearchContainer' style={{ color: preferredThemeColour }}>
      <div className='filterAndSearchBarContainer'>
        <div className='filterBarContainer'>
          <FontAwesomeIcon icon={faFilter} className='filterIcon' />
          <p className='filterText'>FILTER</p>
          {showFilters ? (
            <FontAwesomeIcon
              icon={faChevronUp}
              className='chevronIcon'
              onClick={handleShowFiltersClick}
            />
          ) : (
            <FontAwesomeIcon
              icon={faChevronDown}
              className='chevronIcon'
              onClick={handleShowFiltersClick}
            />
          )}
        </div>
        <div className='searchBarAndIconContainer'>
          <input
            type='text'
            placeholder='EVENT NAME'
            value={searchQuery}
            className='searchBarInput'
            onChange={handleSearchQueryChange}
          />
          <i className='fa-solid fa-magnifying-glass'></i>
        </div>
      </div>
      {showFilters && (
        <div className='filterOptionsContainer'>
          {options.map((option, index) => {
            return (
              <RadioButton
                key={index}
                label={option}
                value={option}
                isChecked={selectedOption === option}
                radioClickHandler={() => handleFilterOptionClick(option)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

FilterSearchSection.propTypes = {
  searchQuery: propTypes.string,
  filterAndSearchHandlers: propTypes.shape({
    handleSearchQueryChange: propTypes.func,
    handleFilterOptionClick: propTypes.func,
  }),
  selectedOption: propTypes.string,
};

export default FilterSearchSection;
