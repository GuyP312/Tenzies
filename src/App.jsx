import React from 'react';
import Die from './Components/Die';

export default function App(){
  return (
    <>
      <main>
        <Die number={1} />
        <Die number={2} />
        <Die number={3} />
        <Die number={4} />
        <Die number={5} />
        <Die number={6} />
        <Die number={7} />
        <Die number={8} />
        <Die number={9} />
        <Die number={10} />
      </main>
    </>
  )
}