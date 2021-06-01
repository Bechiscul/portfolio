import React from "react";
import ReactDOM from "react-dom"

import "tailwindcss/tailwind.css"

const App = () => {
    return(
        <h1>Hello From React!</h1>
    );
}

ReactDOM.render(<App />, document.getElementById("app"));