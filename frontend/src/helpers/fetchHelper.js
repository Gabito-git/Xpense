const fetchHelper = ({ url, method, body={} }) => {
    const urlString = `http://localhost:4000/api/${ url }`;

    return fetch( urlString, {
        method,
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( body )
    } )
}

export default fetchHelper;