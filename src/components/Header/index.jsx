import { useContext } from 'react';
import { EventContext } from '../../contexts';
import './Header.css';

const Header = () => {
  const { themeDetails } = useContext(EventContext);
  const preferredThemeColour = themeDetails?.preferredThemeColour;
  return (
    <header className='eventifyHeader' style={{ backgroundColor: preferredThemeColour }}>
      <p className='eventifyHeaderTitle'>EVENTIFY</p>
    </header>
  );
};

export default Header;
