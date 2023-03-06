import { GET_THEMES } from "../../constants/apiEndPoints"
import { makeRequest } from "../makeRequest"
import moment from 'moment';

export const convertDateTimeFormat = (usaDateTime) => {
    const indianDateTime = moment.utc(usaDateTime).local(false).format('DD-MM-YYYY, HH:mm');
    return indianDateTime;
};

export const getThemeDetails = async () => {
    try {
        const response = await makeRequest(GET_THEMES);
        // console.log(response);
        const { themes, preferredThemeId } = response;
        const preferredTheme = themes.find(theme => theme.id === preferredThemeId);
        const { colorHexCode } = preferredTheme;
        const preferredThemeColour = colorHexCode;
        // console.log(preferredThemeId);
        // const allThemes = themes.map(theme => {
        //     const { colorHexCode } = theme;
        //     return colorHexCode;
        // });
        // console.log(allThemes);
        console.log(themes);
        return { themes, preferredThemeColour, preferredThemeId };
    } catch (error) {
        console.log(error);
        return [];
    }
}


// export const updatePreferredTheme = (themeId) => {
// }