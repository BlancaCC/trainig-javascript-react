import React from 'react';
import './App.css';
import { fetchSearchResults } from './utils.js';
import ListItem from './ListItem.js';
import SearchInput from './SearchInput.js';
import _ from 'lodash';

export default function App() {
  const [query, setQuery] = React.useState('');
  const [results, setResults] = React.useState([]);


  const fetchData = async () => {
    const res = await fetchSearchResults(query);
    setResults(res);
  };

  
  React.useEffect(() => {
    fetchData();
  }, [query]);
  return (
    <div>
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