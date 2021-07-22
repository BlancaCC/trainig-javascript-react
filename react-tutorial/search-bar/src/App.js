import React, {useCallback, useMemo, useState} from 'react';
import './App.css';
import { fetchSearchResults } from './utils.js';
import ListItem from './ListItem.js';
import SearchInput from './SearchInput.js';
import _ from 'lodash';

const useMergeState = (initialState) => {
  const [state, setState] = useState(initialState)

  const customSetState = useCallback((newer) => {
    setState(prev => ({...prev, ...newer}))
  }, [setState])

  return [state, customSetState]
}

export default function App() {
  const [state, setState] = useMergeState({
    loading: false,
    query: '',
    results: [],
  })
  const {loading, query, results} = state

  const fetchDrinksByText = useCallback(async (text) => {
    setState({loading: true})
    const results = await fetchSearchResults(text)
    setState({results, loading: false})
  }, [setState])

  const debouncedFetchDrinksByText = useMemo(() => _.debounce(fetchDrinksByText,500), [fetchDrinksByText])

  const onChangeText = useCallback((ev) => {
    const query = ev.target.value
    setState({query})
    debouncedFetchDrinksByText(query)
  }, [debouncedFetchDrinksByText, setState])

  return (
    <div>
      <h1>  At this page, we are not alcoholic,but this free API is stunning:</h1>
      <SearchInput
        value={query}
        onChangeText={onChangeText}
      />
      {loading && <div>Loading</div>}
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