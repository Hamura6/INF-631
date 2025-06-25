import React from 'react';
import Header from './components/header/Header';
import Card from './components/card/Card';
import WebCreation from './components/body/Creation';
import Products from './components/products/Products';
import News from './components/news/News';
import Footer from './components/footer/Footer';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Card/>
        <WebCreation />
        <Products />
        <News />
      </main>
      <Footer />
    </div>
  );
}

export default App;