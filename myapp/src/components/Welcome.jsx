import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Welcome = () => {
    var [name, setname] = useState()
    const react = () => {
        setname("React")
    }
    const angular = () => {
        setname("Angular")
    }
    const vue = () => {
        setname("Vue")
    }
    useEffect(() => {
        angular()
    },[])
  return (
      <div>
          <br /><br />
          <Typography variant='h2'>Welcome to {name} </Typography>
          <Button variant='contained' onClick={react}>REACT</Button>&nbsp;&nbsp;
          <Button variant='contained' color='error' onClick={angular}>ANGULAR</Button>&nbsp;&nbsp;
          <Button variant='contained' color='secondary' onClick={vue}>VUE</Button>
    </div>
  )
}

export default Welcome
