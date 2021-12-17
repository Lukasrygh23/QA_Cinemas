import NavBar from './components/navbar';
import HomePage from './homePage';
import NotFound from './NotFound';
import Footer from './components/Footer';
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
import LocalVenuesPage from "./LocalVenuesPage";
import DunePage from './DunePage';
import BookingDunePage from './BookingDunePage';
import EternalsPage from './EternalsPage';
import BookingEternalsPage from './BookingEternalsPage';
import TheLastDuelPage from './TheLastDuelPage';
import BookingTheLastDuelPage from './BookingTheLastDuel';
import SpidermanNoWayHomePage from './SpidermanNoWayHomePage';
import BookingSpidermanNoWayHomePage from './BookingSpidermanNoWayHome';
import TheMatrixResurrectionsPage from './TheMatrixResurrectionsPage';
import BookingTheMatrixResurrectionsPage from './BookingTheMatrixResurrectionsPage';
import TheKingsManPage from './TheKingsManPage';
import BookingTheKingsManPage from './BookingTheKingsMan';
import TheBatmanPage from './TheBatmanPage';
import BookingTheBatmanPage from './BookingTheBatman';
import CommentModeration from "./CommentModeration";
import ScrollToTop from './components/ScrollToTop';
import { useState } from 'react';
import SearchPage from './SearchPage';
import data from './json/KeywordsSearch.json'

function App() {

  const [userInput, setUserInput] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [awaitUserInput, setAwaitUserInput] = useState(true)

  const handleUserInput = (e) => {
    setUserInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchTerm(userInput);
    setAwaitUserInput(false)
  }

  if (awaitUserInput) {
    return (
      <Router>
        <ScrollToTop />
        <NavBar handleSubmit={handleSubmit} handleUserInput={handleUserInput} />
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
          <Route path="/movie/dune">
            <DunePage />
          </Route>
          <Route path="/booking/dune">
            <BookingDunePage />
          </Route>
          <Route path="/movie/eternals">
            <EternalsPage />
          </Route>
          <Route path="/booking/eternals">
            <BookingEternalsPage />
          </Route>
          <Route path="/movie/the_last_duel">
            <TheLastDuelPage />
          </Route>
          <Route path="/booking/the_last_duel">
            <BookingTheLastDuelPage />
          </Route>
          <Route path="/movie/spiderman_no_way_home">
            <SpidermanNoWayHomePage />
          </Route>
          <Route path="/booking/spiderman_no_way_home">
            <BookingSpidermanNoWayHomePage />
          </Route>
          <Route path="/movie/the_matrix_resurrections">
            <TheMatrixResurrectionsPage />
          </Route>
          <Route path="/booking/the_matrix_resurrections">
            <BookingTheMatrixResurrectionsPage />
          </Route>
          <Route path="/movie/the_kings_man">
            <TheKingsManPage />
          </Route>
          <Route path="/booking/the_kings_man">
            <BookingTheKingsManPage />
          </Route>
          <Route path="/movie/the_batman">
            <TheBatmanPage />
          </Route>
          <Route path="/booking/the_batman">
            <BookingTheBatmanPage />
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
          <Route path="/LocalVenues">
            <LocalVenuesPage />
          </Route>
          <Route path="/secretModBackend">
            <CommentModeration />
          </Route>
          <Route>
            <NotFound/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    );
  } else {
    return (
      <Router>
        <ScrollToTop />
        <Switch>
          <SearchPage
            searchTerm={searchTerm}
            data={data}
            handleUserInput={handleUserInput}
            userInput={userInput}
            handleSubmit={handleSubmit}
          />
        </Switch>
      </Router>
    );
  }

}



export default App;

