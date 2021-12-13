import NavBar from './components/navbar';
import HomePage from './homePage';
import NoTimeToDiePage from './NoTimeToDiePage';
import BookingNoTimeToDiePage from './BookingNoTimeToDiePage';
import OpeningTimes from './openingTimes';
import ScreenListings from './screenListingsPage';
import AboutPage from './aboutPage';
import ContactPage from './ContactPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FilmClassificationPage from './FilmClassificationPage';
import Discussion from "./components/Discussion";
import HowToGetHerePage from './HowToGetHerePage';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movie/no_time_to_die">
          <NoTimeToDiePage />
        </Route>
        <Route path="/booking/no_time_to_die">
          <BookingNoTimeToDiePage />
        </Route>
        <Route path="/OpeningTimes">
          <OpeningTimes />
        </Route>
        <Route path="/ScreenListings">
          <ScreenListings />
        </Route>
        <Route path="/About">
          <AboutPage />
        </Route>
        <Route path="/FilmClassification">
          <FilmClassificationPage />
        </Route>
        <Route path="/Contact">
          <ContactPage />
        </Route>
        <Route path="/Discussion">
          <Discussion />
        </Route>
        <Route path="/HowToGetHere">
          <HowToGetHerePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
