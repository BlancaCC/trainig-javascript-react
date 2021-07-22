export const BASE_URL = 'https://api.punkapi.com/v2';
/* This function takes query as a param and returns the array of beer objects.*/
export const fetchSearchResults = async query => {
    console.log(query)
    if (query && query.length > 0) {
        const parsedQuery = query.replaceAll(' ', '+');
        const url = `${BASE_URL}/beers?beer_name=${parsedQuery}`;
        const res = await fetch(url);
        return await res.json();
    } else {
        return [];
    }
}
