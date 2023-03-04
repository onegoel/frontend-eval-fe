import './FilterOptions.css';
import { RadioButton } from '../index';
import propTypes from 'prop-types';
import { useState } from 'react';

const FilterOptions = () => {
  const labels = ['ALL', 'REGISTERED', 'BOOKMARKED', 'SEATS AVAILABLE'];
  const [selectedOption, setSelectedOption] = useState('ALL');

  const handleOptionClick = (label) => {
    setSelectedOption(label);
  };

  return (
    <div className='filterOptionsContainer'>
      {labels.map((label, index) => {
        return (
          <RadioButton
            key={index}
            label={label}
            isChecked={selectedOption === label}
            radioClickHandler={() => handleOptionClick(label)}
          />
        );
      })}
    </div>
  );
};

FilterOptions.propTypes = {
  isChecked: propTypes.bool,
  clickHandler: propTypes.func,
};

export default FilterOptions;
