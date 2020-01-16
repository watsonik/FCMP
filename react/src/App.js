import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Footer, Header, Search } from './components/UI';
import MoviesList from './components/MoviesList/MoviesList';
import ControlBar from './components/ControlBar/ControlBar';
import MovieDetails from './components/MovieDetails/MovieDetails';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="central-wrapper">
                    <Header />
                    <main className="main">
                        <Switch>
                            <Route exact path="/">
                                <Search />
                            </Route>
                            <Route path="/movie/:id">
                                <MovieDetails />
                            </Route>
                        </Switch>
                        <ControlBar />
                        <MoviesList />
                    </main>
                    <Footer />
                </div>
            </Router>
        );
    };
}

export default App;