import React from 'react';
import './App.css';
import { fetchSearchResults } from './utils.js';
import ListItem from './ListItem.js';
import SearchInput from './SearchInput.js';
import _ from 'lodash';


// what the meaning of cb
const fetchData = async (query, cb) => {
  const res = await fetchSearchResults(query);
  cb(res);
};

const debouncedFetchData = _.debounce(( query, cb) => {
  fetchData(query, cb);
},500 );

export default function App() {
  const [query, setQuery] = React.useState('');
  const [results, setResults] = React.useState([]);
  

  React.useEffect(() => {
    debouncedFetchData( query, res=> {
      setResults(res);
    });
  }, [query]);
  return (
    <div>
      <h1> We are a healthy web, though we do not reject beer APIs :</h1>
    <SearchInput
      value={query}
      onChangeText={e => {
      setQuery(e.target.value);
      }}
    />
    {results.map((result, index) => (
      <div key={index}>
      <ListItem
        title={result.name}
        imageUrl={result.image_url}
        caption={result.tagline}
      />
      </div>
    ))}
    </div>
    );
}