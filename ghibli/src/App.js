import './index.css';
import Navbar from './Navbar';
import {Route, Switch } from 'react-router-dom'
import MovieList from './MovieList';
import Movie from './Movie';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={MovieList}/>
        <Route exact path='/:id' component={Movie}/>
        {/* <Route exact path='/characters' component={}/>
        <Route exact path='/characters' component={}/>
        <Route exact path='/characters' component={}/> */}
      </Switch>
    </div>
  );
}
 
export default App;
