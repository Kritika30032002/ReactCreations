import { Template } from "./components/template"
import React from "react";
import { Die } from "./components/die"
import {nanoid} from 'nanoid'
import Confetti from "react-confetti"
export default function App () {
  
  const [tenzies, setTenzies] = React.useState(false);

  const [dice, setDice] = React.useState(allNewDice())
  React.useEffect(()=>{
    const allHeld =   dice.every(die=> die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if (allHeld & allSameValue){
      setTenzies(true)
      console.log("You won!");
    }
  }, [dice])

  function allNewDice(){
    const newDice = [];
    for(let i = 0; i<10; i++){
      newDice.push({
        value: Math.floor(Math.random()*6)+1, 
        isHeld: false,
        id: nanoid()
      })

    }
    return newDice
  }
  
  function rollDice(){
    if(!tenzies){
    setDice(oldDice => oldDice.map(die=>{
      return die.isHeld ? 
      die:
      {value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()}

    }))
  } else{
    setTenzies(false)
    setDice(allNewDice())
  }
  }

  function holdDice(id){
    setDice(oldDice=>  oldDice.map(die=>{
      return die.id === id ?
       {...die, isHeld: !die.isHeld}: 
      die
    }))
    
}
  const dieElements = dice.map(die=> 
  <Die key = {die.id} value = {die.value} isHeld = {die.isHeld} holdDice = {()=>holdDice(die.id)}/>)



return(
  <main>
  <p>Tenzi is a dice game where players try to be the first to roll all ten of their dice to show the same number. The game is played with two or more players, and each player gets ten dice.</p>
    {tenzies ? <Confetti/> : ""}
    <Template/>
    <div className = "DieContainer">
    {dieElements}
    </div>
    <br/>
    <button className = "roll" onClick={rollDice}>
      {tenzies ? "New Game" : "Roll!"}
    </button>
  </main>
)

}