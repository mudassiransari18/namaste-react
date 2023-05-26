# Namaster react

1. Inception    
    1. document.createElement(tagName) --> using js
    2. Append everything in <div id= "root"></div>
    3. Use CDN links to use React and React DOM
    4. Use React.createElement(tagName, attribute object, children)
    5. <div id="parent">
            <div id="child">
                <h1>hii</h1>
            </div>
        </div>
        For this structure use React.createElement("div", { id: "parent", }, React.createElement("div", { id: "child" }, React.createElement("h1", {}, "Parent-child")))
    6. Use React.createRoot(document.getElementById)

2. Igniting our app
    1. git init.
    2. Make master branch as main branch since github supports that. (Use git branch -M main)
    3. Create a new github repo
    4. git remote add origin https://github.com/mudassiransari18/namaste-react.git
    5. Push everything to github.
    6. npm init ---  and Package.json (configuration for npm) and package-lock.json(Keeping record of exact version)
    7. Dev dependency and Dependency.  Also (^ for minor upgrade and ~ for major upgrade)
    8. Use Parcel as bundler
    9. npm for installing and npx for executing.
    10. Browser script cannot have import and export. (Use type="module" in script tag since import/export are modules and not plain js code.)

3. Laying the foundation
    1. React element is just a plain js object and not an html element. It will become html element when we render the react element on DOM.
    2. JSX -- it is not HTML (Its html like syntax). Not a part of react. React can be written without JSX. Its make it easy to create React elements.
    3. <h1> Hello from JSX</h1> ==> This is not a valid JS code. Then how it run on browser ? 
        a. Parcel transpiles it  (converted to code which browsers can understands.)
        b. For transpiling, parcel uses Babel.
    4. React.createElement(tagName, attribute object, children) --> React element (JS object) --> Rendered as HTML
       JSX --> Babel converts it --> React.createElement(tagName, attribute object, children) --> React element (JS object) --> Rendered as HTML
    5. Babel takes in JSX and converts it into browser copatible JS.
    6. Component Composition -- Using one component in another 
    7. We can add component in React element and vice versa.
    8. We can use a component in multiple ways 
        a. <Title />
        b. <Title> </Title>
        c. { Title() } since every functional component is a function.
    9. JSX can only have a single parent at root. Else use fragment.

