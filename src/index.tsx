import Footer from 'components/Footer';
import Header from 'components/Header';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <Footer />
  </React.StrictMode>
);
