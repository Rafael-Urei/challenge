//Action Types
export const LOGIN = 'user/LOGIN';
export const LOGOUT = 'user/LOGOUT';


//Action Creators
export const login = (name) => {
    return {
        type: LOGIN,
        payload: name
    }
};

export const logout = () => {
    return {
        type: LOGOUT,
    }
};