import React from 'react';
import Die from './Components/Die';
export default function App(){
  function generateAllValueDice(){ // return an array of random numbers between 1-6 of length 10
    const dicevalue = [];
    for(let i=0; i<10;i++){
      const randomnum = Math.floor(Math.random() * 6) + 1; // creating random number between 1-6 (+1 because without +1, it will randomize 0-5)
      dicevalue.push(randomnum);
    }
    return dicevalue;
  }
  const [dicevalues, setdicevalues] = React.useState(generateAllValueDice);
  const displaydice = dicevalues.map((die)=>{
    return <Die number={die}/>
  })

  return (
    <>
      <main>
        <div className = "dice-container">
          {displaydice}
        </div>
      </main>
    </>
  )
}