import './index.css';
import Navbar from './Navbar';
import {Route, Switch } from 'react-router-dom'
import MovieList from './MovieList';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={MovieList}/>
      </Switch>
    </div>
  );
}
 
export default App;
