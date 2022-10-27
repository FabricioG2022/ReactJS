import Navbar from './Components/navbar';
import ItemListContainer from './Container/itemListContainer';
import ItemDetailContainer from './Container/itemDetailContainer';
import imagen2 from './img/gamer.png'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <h1 className="titulo">GAMING ARGENTINA <img src={imagen2} alt="" /></h1>
      <Navbar/>
        <Switch>
          <Route path='/' ><ItemListContainer/></Route>
          <Route path='/category/:id'> <ItemListContainer/></Route>
          <Route path='/item/:id'> <ItemDetailContainer/></Route>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
