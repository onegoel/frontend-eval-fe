import './RadioButton.css';
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCheckCircle } from '@fortawesome/free-regular-svg-icons';

const RadioButton = ({ label, isChecked, radioClickHandler }) => {
  return (
    <div className='radioBtnContainer'>
      {isChecked && (
        <FontAwesomeIcon
          icon={faCheckCircle}
          className='radioBtnIcon'
          onClick={radioClickHandler}
        />
      )}
      {!isChecked && (
        <FontAwesomeIcon icon={faCircle} className='radioBtnIcon' onClick={radioClickHandler} />
      )}
      <label>{label}</label>
    </div>
  );
};

RadioButton.propTypes = {
  label: propTypes.string,
  isChecked: propTypes.bool,
  radioClickHandler: propTypes.func,
};

export default RadioButton;
