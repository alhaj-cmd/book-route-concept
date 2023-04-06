import React from 'react';
import Header from './components/Header'
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      {/* All components pass the header or nav elements */}
      <Header></Header>
      <Outlet></Outlet>
      {/* Show all components pass the footer elements */}
      <Footer></Footer>
    </div>
  );
};

export default App;