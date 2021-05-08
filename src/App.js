import './assets/scss/base.scss';
import Navigation from './components/Navigation'
import {BrowserRouter as Router, Switch, Route, Redirect, useRouteMatch} from 'react-router-dom'
import PageRenderer from './Page-Renderer'
import Footer from './components/Footer'
import Post from './components/Post'
import MasonryPost from './components/Masonry-post'

function App() {
  return (
    <div className="page-container">
    <div className="content-wrap">
        <Router>
            <div className="App">
                <Navigation />
                <Switch>
                    <Route path="/:page" component={PageRenderer} />
                    <Route path="/" render={() => <Redirect to="/home" />} />
                    <Route component={() => 404} />
                </Switch>
            </div>
        </Router>
    
    </div>
        <Footer />
    </div>

  );
}

export default App;
