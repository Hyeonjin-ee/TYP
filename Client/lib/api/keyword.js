import baseURL from '.';

//POST 카테고리 등록 API
export const postKeywordAPI = (data) => fetch(`${baseURL}/keyword/11`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
});