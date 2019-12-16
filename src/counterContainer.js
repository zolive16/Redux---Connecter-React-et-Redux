import React from 'react';
import { connect } from 'react-redux';

const CounterContainer = ({ count, dispatch }) => {
    return (
    <div>
    <p>{count}</p>
    <button
      onClick={() => dispatch({ type: 'ADD' })}
    >
      + 1
    </button>
    <button
      onClick={() => dispatch({ type: 'REMOVE' })}
    >
      - 1
    </button>
    <button
      onClick={() => dispatch({ type: 'ADDTEN' })}
    >
      + 10
    </button>
    <button
      onClick={() => dispatch({ type: 'REMOVETEN' })}
    >
      - 10
    </button>
    <button
      onClick={() => dispatch({ type: 'RESET' })}
    >
      reset
    </button>
    </div>
    )
};  


const mapStateProps = state => ({
    count: state
});
export default connect(mapStateProps)(CounterContainer);