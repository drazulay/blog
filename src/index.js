import React from "react";
import ReactDOM from "react-dom";

import Blog from "./routes/blog";
import About from "./routes/about";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import 'normalize.css';
import './styles.css';

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
        console.log('Registered ServiceWorker');
    }).catch(function(err) {
        console.log('Error Registering ServiceWorker: ', err);
    });
}

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="AppHeader">
          <h1 className="AppTitle">@drazulay</h1>
          <div className="Menu">
            <Link to="/" className="MenuItem">
              About
            </Link>
            <Link to="/blog" className="MenuItem">
              Blog
            </Link>
          </div>
        </div>
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/" component={About} />
      </div>
    </Router>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
