import React from "react"

function Button(){
  const [value, setValue] = React.useState('');
  
  function handleClick(){
    setValue("X");
  }
  return(
    <button onClick={handleClick}>{value}</button>
  )
}

export default function Board() {
  return (
    <div className="board">
      <Button />
      <Button/>
      <Button/>
      <Button/>
      <Button/>
      <Button/>
      <Button/>
      <Button/>
      <Button/>
    </div>
  )
}


