import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import Footer from './componentes/footer/Footer';
import './componentes/footer/Footer.css'
import reportWebVitals from './reportWebVitals';
import Header from './componentes/header/Header'
import './componentes/header/Header.css'
import Imc from './componentes/calculadoraImc/Imc'
import './componentes/calculadoraImc/Imc.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<App />*/}
    <Footer />
  </React.StrictMode>
);

const header = ReactDOM.createRoot(document.getElementById('Header'));
header.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);

const imc = ReactDOM.createRoot(document.getElementById('Imc'));
imc.render(
  <React.StrictMode>
    <Imc />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
