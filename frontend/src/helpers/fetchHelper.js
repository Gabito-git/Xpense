const fetchHelper = ({ url, method, body={} }) => {
    const urlString = `http://localhost:4000/api/${ url }`;

    if(method === 'get' || method === 'delete'){
        return fetch( urlString, {
            method,
            headers:{
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        } )
    }

    return fetch( urlString, {
        method,
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( body ),
        credentials: 'include'
    } )
}

export default fetchHelper;