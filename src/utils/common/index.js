import { GET_THEMES } from "../../constants/apiEndPoints"
import { makeRequest } from "../makeRequest"
import moment from 'moment';

export const convertDateTimeFormat = (usaDateTime) => {
    const indianDateTime = moment.utc(usaDateTime).local(false).format('DD-MM-YYYY, HH:mm');
    return indianDateTime;
};

export const getThemeColours = async () => {
    try {
        const response = await makeRequest(GET_THEMES);
        const { themes, preferredThemeId } = response;
        const notPreferredThemes = themes !== null && themes.filter(theme => theme.id !== preferredThemeId);
        const notPreferredThemeColours = notPreferredThemes !== null && notPreferredThemes.map(theme => theme.colorHexCode);
        return notPreferredThemeColours;
    } catch (error) {
        console.log(error);
        return [];
    }
}


// export const updatePreferredTheme = (themeId) => {
// }