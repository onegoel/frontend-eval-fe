import axios from "axios";
import { BACKEND_URL } from "../../constants/apiEndPoints";
import { ERROR_ROUTE } from "../../constants/routes";

export const makeRequest = async (apiEndpoint, dynamicData = {}, navigate) => {
    try {
        const requestDetails = {
            baseURL: BACKEND_URL,
            method: apiEndpoint.method,
            url: apiEndpoint.url,
            ...dynamicData
        };
        const { data: response } = await axios(requestDetails);
        // console.log(response.data);
        return response;
    } catch (error) {
        console.log(error);
        const errorStatus = error.response?.status;
        if (errorStatus) {
            navigate(`${ERROR_ROUTE}/${errorStatus}`);
        } else {
            navigate(ERROR_ROUTE);
        }
        return null;
    }
};
