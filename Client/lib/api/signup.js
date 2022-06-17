import baseURL from '.';

export const postSignUpAPI = (data) => fetch(`${baseURL}/users/join`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
});