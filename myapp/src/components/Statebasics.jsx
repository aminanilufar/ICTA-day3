import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
    var [name, setname] = useState("Nilufar")
    var[nval,sval]=useState()
          const setval=(e)=>{
              console.log(e.target.value)
              setname(e.target.value)
          }
    const SubHandler= () => {
        sval(name)
    }


    return (
        <div>
            <br /><br />
            <Typography variant='h3'>Welcome {nval}</Typography>
            <TextField variant='outlined' onChange={setval} />
            <br /><br />
            <Button variant='contained'  onClick={SubHandler}>Enter</Button>
        </div>
  )
}

export default Statebasics
