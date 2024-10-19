import React from 'react';
import './App.css';
import Login from './login.js';
import Register from './registration.js';
import Header from './header.js';
import './header.css';
import Footer from './footer.js';
import Menu from './menu.js'; 


function App() {
  return (
    <div className="App">
      <h1>Welcome to My App</h1>
      <Header />
      <Menu />
      <Login />
      <Register />
      <Footer />
      
      
    </div>
  );
}
export default App;

