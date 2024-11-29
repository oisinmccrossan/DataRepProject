import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import Read from './components/Read';

function App() {
  return (
    <div>
      <NavigationBar />
      <Header />
      <Content />
      <Read />
      <Footer />
    </div>
  );
}

export default App;