import React from "react"
import ReactDOM from "react-dom/client"

const parent = React.createElement(
    "div",
    { id: "parent" },
    [
        React.createElement(
            "div",
            { id: "child" },
            [
                React.createElement("h1", {}, "This is namaste react"),
                React.createElement("h2", {}, "sfrhz")
            ]
        )
    ],
    React.createElement(
        "div",
        { id: "child" },
        [
            React.createElement("h1", {}, "I'm an h1 tag"),
            React.createElement("h2", {}, "I'm an h2 tag")
        ]
    )
);

const heading = React.createElement(
    "h1",
    { id: "heading", xyz: "abc" },
    "Hello World from Vedant"
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);
root.render(parent);
