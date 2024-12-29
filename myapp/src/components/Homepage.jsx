import { Button, ButtonGroup, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
    const buttons = [
        <Button key="one">One</Button>,
        <Button key="two">Two</Button>,
        <Button key="three">Three</Button>,
    ];
  return (
      <div>
          <br /><br /><br />
          <Typography variant="h3">Home</Typography><br /><br />
          <Link to='/l'>
              <Button variant="outlined">Login</Button> <br /><br />
          </Link>
          <Link to='/s'>
              <Button variant="outlined">Signup</Button><br /><br />
          </Link>
          <Link to='/t'>
              <Button variant="outlined">List</Button><br /><br />
          </Link>
          <Link to='/state'>
              <Button variant="outlined">State</Button><br /><br />
          </Link>
          <Link to='/c'>
              <Button variant="outlined">Counter</Button><br /><br />
          </Link>
          <Link to='/w'>
              <Button variant="outlined">Welcome</Button><br /><br />
          </Link>
          <Link to='/a'>
              <Button variant="outlined">Api</Button><br /><br />
          </Link>
    </div>
  )
}

export default Homepage
