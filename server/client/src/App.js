import CarouselGallery from './components/CarouselGallery';
import NavBar from './components/navbar';
import Home from './homePage';
import OpeningTimes from './openingTimes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/OpeningTimes">
            <OpeningTimes />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
