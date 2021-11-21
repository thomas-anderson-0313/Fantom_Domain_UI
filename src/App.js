import React from 'react';
import Logo from './components/Logo';
import SearchButton from './components/SearchButton/SearchButton';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <div style={{ background: 'lightblue', padding: '25px 35px' }}>
        <Logo />
      </div>
      <section className="App" tabIndex="-1" id="gatsby-focus-wrapper">
        {/* <SearchButton /> */}
      </section>
      <Footer />
    </div>
  );
}

export default App;
