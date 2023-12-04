import React from 'react';

const useFetchGiffy = (search) => {
const searchkey = search;
const [loading, setLoading] = React.useState(true);
const [gifs, setgifs] = React.useState([]);
console.log(search);

const url = `https://api.giphy.com/v1/gifs/search?api_key=q1WdLOvgeW5NWrMpasj0GPCC78AhaDH7&q=${searchkey}&limit=10&offset=0&rating=g&lang=en`;

const fetchgifs = async() => {
  setLoading(true);

  try {
    const responce = await fetch(url);
    const gifs = await responce.json();
    setLoading(false);
    setgifs(gifs);

  } catch(error) {
    setLoading(false);
    console.log('error');
  }

}

React.useEffect(() => {
  fetchgifs();

}, [searchkey])

console.log(gifs);

return [gifs, loading]

}

export default useFetchGiffy;