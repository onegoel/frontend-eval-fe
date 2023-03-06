import './Footer.css';
import propTypes from 'prop-types';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { EventContext } from '../../contexts';

const Footer = ({ buttonClickHandlers }) => {
  const navigate = useNavigate();
  const { themeDetails, isThemeSaved } = useContext(EventContext);
  const allThemes = themeDetails?.themes;
  const unselectedThemes = allThemes?.filter(
    (theme) => theme.id !== themeDetails?.preferredThemeId,
  );
  const { handleThemeChange, handleThemeSave } = buttonClickHandlers;

  return (
    <>
      {themeDetails && (
        <div
          className='footerContainer'
          style={{ backgroundColor: themeDetails.preferredThemeColour }}
        >
          <div className='themePanel'>
            <p className='themePanelText'>THEMES</p>
            <div className='themePanelButtons'>
              {unselectedThemes.map((theme) => {
                return (
                  <button
                    key={theme.id}
                    className='themePanelButton'
                    style={{ backgroundColor: theme.colorHexCode }}
                    onClick={() => handleThemeChange(theme, navigate)}
                  ></button>
                );
              })}
            </div>
            {isThemeSaved ? (
              <></>
            ) : (
              <button className='saveThemeButton' onClick={() => handleThemeSave(navigate)}>
                SAVE THEME
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

Footer.propTypes = {
  buttonClickHandlers: propTypes.shape({
    handleThemeChange: propTypes.func,
    handleThemeSave: propTypes.func,
  }),
};

export default Footer;
