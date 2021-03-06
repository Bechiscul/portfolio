import React from "react";
import ReactDOM from "react-dom"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Nav from "./components/Nav"
import Index from "./pages/Index"
import NotFound from "./pages/NotFound"

import "tailwindcss/tailwind.css"

const App = () => {
    return(
        <React.StrictMode>
            <Router>
                <Switch>
                    <Route path="/" exact component={Index} />
                    <Route path="/index.html" exact component={Index} />
                    <Route path="" component={NotFound} />
                </Switch>
            </Router>
        </React.StrictMode>
    );
}

ReactDOM.render(<App />, document.getElementById("app"));