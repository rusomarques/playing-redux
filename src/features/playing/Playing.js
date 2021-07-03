import React from 'react';
import { useSelector } from 'react-redux';
import { selectCounterA, selectCounterB, selectCounterC } from './playingSlice';

const styles = type => ({
  padding: '24px',
  margin: '24px',
  border: `solid 2px ${type !== 'C' ? 'blue' : 'red'}`
});

const timesRendered = {
  counterA: 0,
  counterB: 0,
  counterC: 0
};

const CounterA = () => {
  const counterA = useSelector(selectCounterA);

  React.useEffect(() => {
    timesRendered.counterA++;
    console.log('render A:', timesRendered.counterA);
  });

  return <div style={styles('A')}>Counter A: {counterA}</div>;
};

const CounterB = () => {
  const counterB = useSelector(selectCounterB);

  React.useEffect(() => {
    timesRendered.counterB++;
    console.log('render B:', timesRendered.counterB);
  });

  return <div style={styles('B')}>Counter B: {counterB}</div>;
};

const Playing = () => {
  const counterC = useSelector(selectCounterC);

  React.useEffect(() => {
    timesRendered.counterC++;
    console.log('---------');
    console.log('render C:', timesRendered.counterC);
  });

  return (
    <>
      <section>
        <div style={styles('C')}>
          Parent CuounterC: {counterC}
          <CounterA />
          <CounterB />
        </div>
      </section>
    </>
  );
};

export default Playing;
