export const BACKEND_URL = 'http://localhost:8000';

export const GET_EVENTS_LIST = {
    url: 'api/events',
    method: 'get'
};

export const GET_EVENTS_BY_ID = (eventId) => ({
    url: `api/events/:${eventId}`,
    method: 'get'
});

export const GET_THEMES = {
    url: 'api/themes',
    method: 'get'
};

export const PATCH_EVENT_BY_ID = (eventId, isRegistered = null, isBookmarked = null) => ({
    url: `api/events/:${eventId}`,
    method: 'patch',
    data: {
        isRegistered,
        isBookmarked
    }
});

export const PUT_THEME = (preferredThemeId) => ({
    url: 'api/themes',
    method: 'put',
    data: {
        preferredThemeId
    }
});


