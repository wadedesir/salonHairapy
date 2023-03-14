import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Preloader
import Preloader from './components/layouts/Preloader';
// Pages
import Home from './components/pages/Home';
import Team from './components/pages/Blogdetail';
import Videos from './components/pages/Videos';
import Contact from './components/pages/Contact';
import Error from './components/pages/Error';
import Salon from './components/pages/Salon';
import Gallerytwo from './components/pages/Gallery';
import Shopleft from './components/pages/Shopleft';

function App() {
  return (
    <Router forceRefresh={true} basename={'/'}>
      <Preloader />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/videos" component={Videos} />
        <Route exact path="/book-appointment" component={Contact} />
        <Route exact path="/salon" component={Salon} />
        <Route exact path="/gallery" component={Gallerytwo} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/items-services/:id" component={Shopleft} />
        <Route exact path="/products/:id" component={Shopleft} />
        <Route exact path="/error" component={Error} />

        <Route exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
