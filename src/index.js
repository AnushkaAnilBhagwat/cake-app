import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import Navbar from './Navbar';

ReactDOM.render(
  <>
    <Navbar/>,
    <Home image = {`${process.env.PUBLIC_URL}/assets/cartoon-cupcake-removebg-preview.png`} />
    <Home image = {`${process.env.PUBLIC_URL}/assets/rainbow-cupcake.jpg`} />
  </>,
  document.getElementById("root")
)
 