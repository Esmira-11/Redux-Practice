import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from "react-redux";


function Navbar() {

  let basketProducts = useSelector((state) => state);
  let dispatch = useDispatch();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{background:'#8C01FA',top:0,width:'100%'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            E-commerce
            <Link to='/products'><Button  style={{marginLeft:40,color:'#fff'}}>Products</Button></Link> 
          </Typography>
         
          
         
          <div className="nav-backet">
            <span style={{fontSize:16}}>{basketProducts.length}</span>
            <Link to='/backet'><ShoppingCartIcon style={{fill:'#fff'}}/></Link> 
          </div>
          

        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar