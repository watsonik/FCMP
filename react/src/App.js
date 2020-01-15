import React, { Component } from 'react';
import movies from '../tempdata';
import {
  Footer,
  Header,
} from './components/UI';
import MoviesList from './components/MoviesList/MoviesList'

class App extends Component {
  state = {
    movies: movies,
  }

  render() {
    return (
      <>
        <Header />
        <MoviesList />
        <Footer />
      </>
    );
  }
}

export default App;
