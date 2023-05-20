

// create this type of structure
{/* <div id="parent">
    <div id="child">
        <h1>hii</h1>
    </div>
</div> */}

const parent = React.createElement("div", { id: "parent", }, React.createElement("div", { id: "child" }, React.createElement("h1", {}, "Parent-child")));


const heading = React.createElement("h2", {id: "heading"}, "Hello World from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); 