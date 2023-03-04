import './FilterSearchSection.css';
import { FilterBar, SearchBar, FilterOptions } from '../index';
import { useState } from 'react';

const SearchFilterBar = () => {
  const [showFilters, setShowFilters] = useState(false);

  const handleShowFiltersClick = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className='filterAndSearchContainer'>
      <div className='filterAndSearchBarContainer'>
        <FilterBar showFilters={showFilters} showClickHandler={handleShowFiltersClick} />
        <SearchBar />
      </div>
      {showFilters && (
        <div className='filterOptions'>
          <FilterOptions />
        </div>
      )}
    </div>
  );
};

export default SearchFilterBar;
