/* eslint-disable */
// return user data from ssession storage
export const getUser = () => {
    const userStr = sessionStorage.getItem('user');
    if(userStr) return JSON.parse(userStr);
    else return null;
}

// return the token from the ssesion storage
export const getToken = () => {
    return sessionStorage.getItem('token') || null;
}

// remove token and user from session storage
export const removeUserSession = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
}

//set token and user from the session storage
export const setUserSession = (token, user) => {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('user', JSON.stringify(user));
}
