export const exerciseOptions = {


    method: 'GET',

    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': "25b2d26778msh2a0f2be430382b2p13db8ejsn345f9ec75854",
    },

};




export const fetchDeta = async (url, options) => {
    const response = await fetch(url, options);
    const deta = await response.json();

    return deta
}