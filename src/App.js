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
        <Route path="/team" component={Team} />

        <Route path="/gallery1" component={Gallerytwo} />
        <Route path="/gallery2" component={Gallerytwo} />
        <Route path="/gallery3" component={Gallerytwo} />
        <Route path="/gallery4" component={Gallerytwo} />

        <Route path="/products-services&kstar" component={Shopleft} />
        <Route path="/products-services&beauty" component={Shopleft} />
        <Route path="/products-services&braid-extensions" component={Shopleft} />
        <Route path="/products-services&braid-naturals" component={Shopleft} />
        <Route path="/products-services&colors" component={Shopleft} />
        <Route path="/products-services&cuts-trims" component={Shopleft} />
        <Route path="/products-services&locs" component={Shopleft} />
        <Route path="/products-services&presses" component={Shopleft} />
        <Route path="/products-services&relaxers" component={Shopleft} />
        <Route path="/products-services&sets" component={Shopleft} />
        <Route path="/products-services&twists-naturals" component={Shopleft} />
        <Route path="/products-services&wash-treatments" component={Shopleft} />
        <Route path="/products-services&weaves" component={Shopleft} />
        <Route path="/products-services&kids-corner" component={Shopleft} />
        {/* <Route path="/products-services-beauty" component={Shopleft} /> */}

        <Route exact path="/error" component={Error} />

        <Route exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
