import './assets/scss/base.scss';
import Navigation from './components/Navigation'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import PageRenderer from './Page-Renderer'
import Footer from './components/Footer'
import Post from './pages/Post'
import Portfolio from './pages/portfolio'

import {MasonryPost} from './'
function App() {
  return (
    <div className="page-container">
    <div className="content-wrap">
        <Router>
            <div className="App">
                <Navigation />
                <Switch>
                    <Route path="/Portfolio" component={Portfolio} />
                    <Route path="/post/:id" component={Post} />
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
