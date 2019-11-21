const {REACT_APP_PROTOCOL, REACT_APP_PORT, REACT_APP_SERVER_ADDRESS} = process.env;

const endpoints = {
    SHARE_ENDPOINT: '/vis/'
};

const API = {
    SHARE_URL: `${REACT_APP_PROTOCOL}://${REACT_APP_SERVER_ADDRESS}:${REACT_APP_PORT}${endpoints.SHARE_ENDPOINT}`
};

export default API;