import { useContext } from 'react';
import { EventContext } from '../../contexts';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import { HOME_ROUTE } from '../../constants/routes';

const Header = () => {
  const navigate = useNavigate();
  const { themeDetails } = useContext(EventContext);
  const preferredThemeColour = themeDetails?.preferredThemeColour;
  return (
    <header className='eventifyHeader' style={{ backgroundColor: preferredThemeColour }}>
      <p className='eventifyHeaderTitle' onClick={() => navigate(HOME_ROUTE)}>
        EVENTIFY
      </p>
    </header>
  );
};

export default Header;
