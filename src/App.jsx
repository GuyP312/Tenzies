import React from 'react';
import Die from './Components/Die';
import { nanoid } from "nanoid";
export default function App(){
  function generateAllValueDice(){ // return an array of object with value , id and isHeld
    const dicevalue = [];
    for(let i=0; i<10;i++){
      const randomnum = Math.floor(Math.random() * 6) + 1; // creating random number between 1-6 (+1 because without +1, it will randomize 0-5)
      dicevalue.push({value:randomnum,isHeld:false,id:nanoid()});
    }
    return dicevalue;
  }
  const [dicevalues, setdicevalues] = React.useState(generateAllValueDice); // set the array value to equal a state and then map it and send in random value as prop
  const displaydice = dicevalues.map((die)=>{
    return <Die key = {die.id} value={die.value} isHeld={die.isHeld}/>
  })

  function newdice(){ // set the array to have new value and then update state
    setdicevalues(generateAllValueDice)
  }

  return (
    <>
      <main>
        <div className = "dice-container">
          {displaydice}
          
        </div>
        <button onClick = {newdice} className = "roll">Roll</button>
      </main>
    </>
  )
}