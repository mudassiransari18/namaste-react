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
    10. const root = ReactDOM.createRoot(document.getElementById("root"));

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

4. Talk is cheap, show me the code
    1. We made some components like 
        a. AppLayout (Hold entire app like header, body and footer component)
        b. Header (containing logo and nav links)
        c. Body (containing search bar and restaurant card container)
        d. Restaurant card
    2. Keys should be to uniquely indetify each component from list (Dont use index as kay)

5. Lets get hooked
    1. Divide App.js into multiple files.
    2. Named export is used when you want to export multiple items from file. I can only have 1 default export in a file.
    3. Hooks are normal JS functions written by React developers.
    4. Hooks can only be called inside of the body of a function component.
    5. useState -- Maintains the state of the component. useState function returns an array with 2 items. Whenever a state variable updates, react will re render the component.

6. Exploring the world
    1. Monolith vs Microservices
    2. 2 approcahes for making api calls
        a. Load page --> Make API call --> Render
        b. Load page --> Render --> Make API call --> Render
        For react we use second approach.
    3. useEffect hook -- 
        useEffect(()=> {
            console.log("USE EFFECT CALL");
        }, []) 
        The callback function in useEffect will be called after your component renders.
    4. CORS issue -- Browsers block us to call apis from one origin to another origin
    5. We cannot update UI using local variables, you will have to use state components.
    6. Whenever state variables update, react triggers a reconciliation cycle (rerenders the component).
    7. React compares the old virtual DOM and new virtual DOM using react fiber (reconciliation cycle) and updates the actual DOM only when there is a change. And only the part 
        that  has changed will be updated. DOM manipulation is very expensive and React is fast in doing this because it checks the virtual DOM.
    8. 

