import React from 'react';
import { useSelector } from 'react-redux';
import { selectNested } from './playingSlice';

const styles = type => ({
  padding: '24px',
  margin: '24px',
  border: `solid 2px ${type !== 'C' ? 'blue' : 'red'}`
});

const timesRendered = {
  nestedSelector: 0
};

const ShowCount = ({ value, type }) => (
  <div style={styles(type)}>
    Counter {type}: {value}
  </div>
);

const NestedSelector = () => {
  const { counterA, counterB } = useSelector(selectNested);

  React.useEffect(() => {
    timesRendered.nestedSelector++;
    console.log('NESTED SELECTOR:', timesRendered.nestedSelector);
  });

  return (
    <div style={styles()}>
      <p>Nested selector</p>
      <ShowCount value={counterA} type="A" />
      <ShowCount value={counterB} type="A" />
    </div>
  );
};

export default NestedSelector;
