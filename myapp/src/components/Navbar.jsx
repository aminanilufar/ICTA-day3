import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
      <div>
          <AppBar color='success'>
              <Toolbar >
                  <Link to='/h'>
                      <Button variant="text" color='white'>Home</Button>&nbsp;&nbsp;
                  </Link>
                  <Link to='/l'>
                      <Button variant="contained" color='success'>Login</Button>&nbsp;&nbsp;
                  </Link>
                  <Link to='/s'>
                      <Button variant="contained" color='success'>Signup</Button>&nbsp;&nbsp;
                  </Link>
                  <Link to='/t'>
                      <Button variant="contained" color='success'>List</Button>&nbsp;&nbsp;
                  </Link>
                  <Link to='/state'>
                      <Button variant="contained" color='success'>State</Button>&nbsp;&nbsp;
                  </Link>
                  <Link to='/c'>
                      <Button variant="contained" color='success'>Counter</Button>&nbsp;&nbsp;
                  </Link>
                  <Link to='/w'>
                      <Button variant="contained" color='success'>Welcome</Button>&nbsp;&nbsp;
                  </Link>
                  <Link to='/a'>
                      <Button variant="contained" color='success'>Api</Button>&nbsp;&nbsp;
                  </Link>
                  <Link to='/p'>
                      <Button variant="contained" color='success'>Product</Button>&nbsp;&nbsp;
                  </Link>
              </Toolbar>
          </AppBar>
    </div>
  )
}
