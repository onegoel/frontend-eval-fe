import { useState, useEffect } from 'react';
import { makeRequest } from '../../utils/makeRequest';
import { GET_THEMES } from '../../constants/apiEndPoints';

const ThemeSetter = () => {
  const [themeColour, setThemeColour] = useState('#000000');
  console.log(themeColour);

  useEffect(() => {
    makeRequest(GET_THEMES).then((response) => {
      const { themes, preferredId } = response;
      const preferredTheme = themes.find((theme) => theme.id === preferredId);
      setThemeColour(preferredTheme.colour);
    });
  }, []);

  return <></>;
};

export default ThemeSetter;
