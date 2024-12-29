import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
  var [count, setCount] = useState(0)
    const handleInc = () => {
        setCount(count + 1)
    }
    const handleDec = () => {
        setCount(count - 1)
    }
  const reset = () => {
    setCount(0)
  }
    
  return (
    <div>
      <center>
      <br /><br />
      <Typography variant='h3'>Counter <br />{count}</Typography>
      <Button size='large' variant='contained' onClick={handleDec}>-</Button>&nbsp;&nbsp;
      <Button size='large' variant='contained' onClick={handleInc}>+</Button><br /><br />
      <Button size='large' variant='contained' color='success' onClick={reset}>RESET</Button>
      </center>
    </div>
  )
}

export default Counter
