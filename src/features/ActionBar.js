import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementA, incrementB, incrementC } from './playing/playingSlice';

const styles = {
  margin: '12px',
  padding: '12px'
};

const ActionBar = () => {
  const dispatch = useDispatch();

  return (
    <div style={{ display: 'flex' }}>
      <button style={styles} onClick={() => dispatch(incrementA())}>
        Increment A
      </button>
      <button style={styles} onClick={() => dispatch(incrementB())}>
        Increment B
      </button>
      <button style={styles} onClick={() => dispatch(incrementC())}>
        Increment C (Parent)
      </button>
    </div>
  );
};

export default ActionBar;
