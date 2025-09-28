import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage.jsx'
import { Route, Switch } from 'react-router-dom';
import ServicePage from './pages/ServicePage.jsx';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/service' component={ServicePage} />
      </Switch>
    </div>
  );
}

export default App;
