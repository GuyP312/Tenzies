import React from 'react';
import Die from './Components/Die';
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
export default function App(){
  function generateAllValueDice(){ // return an array of object with value , id and isHeld
    const dicevalue = [];
    for(let i=0; i<10;i++){
      const randomnum = Math.floor(Math.random() * 6) + 1; // creating random number between 1-6 (+1 because without +1, it will randomize 0-5)
      dicevalue.push({value:randomnum,isHeld:false,id:nanoid()});
    }
    return dicevalue;
  }
  const [score,setscore] = React.useState(0);
  const [dicevalues, setdicevalues] = React.useState(()=> generateAllValueDice()); // set the array value to equal a state and then map it and send in random value as prop
  const Newgamefocus = React.useRef(null);
  const displaydice = dicevalues.map((die)=>{
    return <Die key = {die.id} id ={die.id} value={die.value} isHeld={die.isHeld} hold={hold}/>
  })

  function newdice(){ // set the object to only get new value when isHeld is false
    if(dicevalues.every(dice=>!(dice.isHeld))){
      setscore(prevscore=>0)
    }
    else{
      setscore(prevscore=>prevscore+1)
    }
    if(gameWon){
      setdicevalues(()=> generateAllValueDice())
      setscore(prevscore=>0)
    }
    setdicevalues(prevdice=>prevdice.map(item=>{
      return item.isHeld === false ? {...item,value: Math.floor(Math.random() * 6) + 1} : item
    })) 
  } 
  function hold(id){
    setdicevalues(prevdice=>prevdice.map(item=>{
      return item.id === id ? {...item,isHeld:!item.isHeld} : item 
    }))
  }

  const gameWon =(dicevalues.every(dice=>dice.isHeld)) && (dicevalues.every(dice=>dice.value))  // check if every dice is held and the same value
  React.useEffect(()=>{
    if (gameWon){
      Newgamefocus.current.focus()
    }
  },[gameWon])

  return (
    <>
      <main>
        {gameWon && <Confetti />}
        <h1 className="title">Tenzies</h1>
        <p className="instructions">{gameWon ? `You roll ${score} times. Try again for even lower rolls!` : "Roll until all dice are the same. Click each die to freeze it at its current value between rolls."}</p>
        <div className = "dice-container">
          {displaydice}
        </div>
        <button ref = {Newgamefocus} onClick = {newdice} className = "roll">{gameWon ? "New Game" : "Roll"}</button>
        <p className ="tracker">{gameWon ? null : `Number of Roll : ${score}`}</p>
      </main>
    </>
  )
}