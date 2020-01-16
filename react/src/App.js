import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { Footer, Header } from './components/UI';
import { fetchMovies } from './redux';
import MoviesList from './components/MoviesList/MoviesList';
import ControlBar from './components/ControlBar/ControlBar';
import MovieDetails from './components/MovieDetails/MovieDetails';
import NotFound from './components/NotFound/NotFound';
import Search from './components/Search/Search';

const mapDispatchToProps = dispatch => ({
  fetchMovies: searchQuery => dispatch(fetchMovies(searchQuery)),
})

class App extends Component {
  constructor({ fetchMovies }) {
    super();
    this.fetchMovies = fetchMovies;
  }

  componentDidMount() {
    if (location.pathname.includes('/search')) {
      const searchQuery = location.search.split('=');
      if (searchQuery[1]) {
        this.fetchMovies(searchQuery[1]);
      }
    }
  }

  render() {
    return (
      <div className="central-wrapper">
        <Header />
          <main className="main">
            <Switch>
              <Route exact path="/(|search)/">
                <Search />
                <ControlBar />
                <MoviesList />
              </Route>
              <Route path="/movie/:id">
                <MovieDetails />
                <ControlBar />
                <MoviesList />
              </Route>
              <Route >
                <NotFound />
              </Route>
            </Switch>
          </main>
        <Footer />
      </div>
    );
  };
}

export default withRouter(connect(null, mapDispatchToProps)(App));