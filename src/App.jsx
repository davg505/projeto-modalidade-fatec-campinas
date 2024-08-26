import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Router } from './Router';

const App = () => {

  return (
    <BrowserRouter  basename="/projeto-modalidade-fatec-campinas/">
    <Router/>
    </BrowserRouter>
  )
}

export { App };

