"use client"
// using client side for the purpose of time
// it would be better to use here a middleware 
// that would provide pathname at server side

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

// onboarding team is the owner of the code 
// therefore they need to approve any changes made in this file
// this ensures team alignment
const optOutPaths: String[] = [
  'diagram'
]

function Navbar(): ReactNode {
  const pathname = usePathname()

  for (const path in optOutPaths) {
    if (path.includes(pathname)) {
      return null
    }
  }
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Plan A
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar;
