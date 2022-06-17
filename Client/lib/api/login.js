import baseURL from '.';

export const postLoginAPI = (data) => fetch(`${baseURL}/users/my`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
});