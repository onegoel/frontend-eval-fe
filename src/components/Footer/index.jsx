/* eslint-disable no-unused-vars */

import './Footer.css';
import propTypes from 'prop-types';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { EventContext } from '../../contexts';

const Footer = ({ handleThemeChange }) => {
  const navigate = useNavigate();
  return (
    <div className='footerContainer'>
      <div className='themePanel'>
        <p className='themePanelText'>THEMES</p>
        <div className='themePanelButtons'></div>
        <button className='saveThemeBtn'></button>
      </div>
    </div>
  );
};

Footer.propTypes = {
  handleThemeChange: propTypes.func,
};

export default Footer;
