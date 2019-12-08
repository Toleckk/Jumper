export const get = url => request(url);

export const post = (url, params) => request(url, {
    method: 'post',
    body: JSON.stringify(params),
    headers: {
        'Content-Type': 'application/json',
    }
});

const request = (url, params = {headers: {}}) => {
    return fetch(url, {
        ...params,
        credentials: 'same-origin',
        header: {
            ...params.headers,
            Accept: 'application/json',
        }
    }).then(response => {
        if(!response.ok)
            throw new Error(response.status.toString());
        return response;
    });
};