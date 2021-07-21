import React , {useReducer} from 'react';

function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return {count: state.count + 1};
      case 'decrement':
        return {count: state.count - 1};
      default:
        throw new Error();
    }
  }

export function Counter() {

    const initialState = 0; 
    const [state, dispatch] = useReducer( reducer, {count: initialState});
    
    return(
        <>
            Count: {state.count}
            <button onClick={ () => dispatch( {type: 'decrement'})}> - </button> 
            <button onClick = {() => dispatch({type:'increment'})}> + </button>
        </>
    );
}