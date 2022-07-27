import React ,{useState} from 'react';
import theme from './theme';
import {ThemeProvider} from '@mui/material/styles';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Cart from './Cart';






function App() {
  const [cart,setCart]=useState([])
  return (
    
      <ThemeProvider theme={theme}>
       
        <Router>
        <Header cart={cart} setCart={setCart} />
          <Switch>
            <Route exact path="/" element={<Home cart={cart} setCart={setCart} />} />
            <Route exact path="/cart" element={<Cart cart={cart} setCart={setCart} />}  />
          </Switch>
        </Router>

      </ThemeProvider>
    
  )
}

export default App