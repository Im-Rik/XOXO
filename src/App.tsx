
import './App.css'
import Block from './components/block'
import { useState, useEffect } from 'react'

//https://chatgpt.com/c/678f0aad-1b40-4752-bc99-66ee74a9eb4d

function App() {

  const [state, setState] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState("X");
  const [won, setWon] = useState(null)



  useEffect(() => {
    const win = checkWinner();
    if(win){
      setTimeout(()=>alert(`Player ${win} wins!`),10)
      setWon(win);  
    }
  }, [state])

  const checkWinner = () => {
    const win = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], //rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], //columns
      [0, 4, 8], [2, 4, 6] //diagonals
    ]

    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i]
      if (state[a] && state[a] == state[b] && state[a] == state[c]) {
        return state[a];
      }
    }
    return false;
  }

  const handleBlock = (index: number) => {

    if(state[index] || won) return;
    const tempState = [...state]
    tempState[index] = currentTurn
    setState(tempState)
    setCurrentTurn(currentTurn === 'X' ? 'O' : 'X');     

  }

  return (
    <>
      <button onClick={
        () => {
          setState(Array(9).fill(null))
          setWon(null);
        }}>Restart</button>
      <div className='row'>
        <Block onClick = {() => handleBlock(0)} value = {state[0]}/>
        <Block onClick = {() => handleBlock(1)} value = {state[1]}/>
        <Block onClick = {() => handleBlock(2)} value = {state[2]}/>
      </div>
      <div className='row'>
        <Block onClick = {() => handleBlock(3)} value = {state[3]}/>
        <Block onClick = {() => handleBlock(4)} value = {state[4]}/>
        <Block onClick = {() => handleBlock(5)} value = {state[5]}/>
      </div>
      <div className='row'>
        <Block onClick = {() => handleBlock(6)} value = {state[6]}/>
        <Block onClick = {() => handleBlock(7)} value = {state[7]}/>
        <Block onClick = {() => handleBlock(8)} value = {state[8]}/>
      </div>
    </>
  )
}

export default App
