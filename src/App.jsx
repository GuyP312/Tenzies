import React from 'react';
import Die from './Components/Die';


function generateAllValueDice(){ // return an array of random numbers between 1-6 of length 10
  const dicevalue = [];
  for(let i=0; i<10;i++){
    const randomnum = Math.floor(Math.random() * 6) + 1; // creating random between 1-6 (+1 because without +1, it will randomize 0-5)
    dicevalue.push(randomnum);
  }
  return dicevalue;
}

export default function App(){
  return (
    <>
      <main>
        <div className = "dice-container">
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
        </div>
      </main>
    </>
  )
}