import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1> Hello from JSX</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));

const TitleComponent = () => {
    return <p>This is the title</p>
}

const hello = ( <span> This is span </span> );

const number = 1000;
const HeaderComponent = () => {
    return (
        <div>
            <TitleComponent />
            <h3> { number } </h3>
            { hello }
            <h1>Hello from component</h1>
        </div>
    )
}

root.render(<HeaderComponent />); 