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
    2. Keys should be to uniquely indetify each component from list (Dont use index as kay). Key should exist on Parent element

5. Lets get hooked
    1. Divide App.js into multiple files.
    2. Named export is used when you want to export multiple items from file. I can only have 1 default export in a file.
    3. Hooks are normal JS functions written by React developers.
    4. Hooks can only be called inside of the body of a function component.
    5. useState -- Maintains the state of the component. useState function returns an array with 2 items. Whenever a state variable updates, react will re render the component.
    6. Dont create state variables (useState) inside if condition, functions and loops

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
        The useEffect is called after every render of the component. 
        1. Everytime a component renders, useEffect will be called if dependency array is not present.
        2. If we pass an empty dependency array, useEffect will be called only once during page load
        3. If we pass a dependency in the dependency array, useEffect will be called everytime the dependency is changed.
    4. CORS issue -- Browsers block us to call apis from one origin to another origin
    5. We cannot update UI using local variables, you will have to use state components.
    6. Whenever state variables update, react triggers a reconciliation cycle (rerenders the component).
    7. React compares the old virtual DOM and new virtual DOM using react fiber (reconciliation cycle) and updates the actual DOM only when there is a change. And only the part 
        that  has changed will be updated. DOM manipulation is very expensive and React is fast in doing this because it checks the virtual DOM.

7. Finding the path
    1. Routing using react-outer-dom. It uses createBrowserRouter and RouterProvider.
    2. useRouteError hooks gives us more info about error.
    3. Dynamic routing

8. Lets get classy
    1. Class based components
    2. constructor, render, componentDidMount, render, conponentDidUpdate
    3. Sequence of events
    4. Child routes

9. Optimizing our app
    1. Create custom hooks
    2. Uncaught Error: Rendered fewer hooks than expected. This may be caused by an accidental early return statement in React Hooks (https://stackoverflow.com/questions/53472795/uncaught-error-rendered-fewer-hooks-than-expected-this-may-be-caused-by-an-acc)
    3. Lazy Loading / Chunking / Code splitting / Dynamic bundling / on Demand Loading / Dynamic import 
    4. Do not lazy import inside a component, because then the lazy module will be lazily downloaded after every render.

10. Jo Dikhta hai wo bikta hai
    1. Material UI, ANT UI, Chakra UI, Tailwind, Styled components
    2. Square bracket notation

11. Data is the new oil
    1. Props drilling issue
    2. Is modifying state of sibling component possible --- No not possible. Manage it in the parent (Also known as lifting the state up).
    3. Use React DEV Tools. 
        a. Components -- Gives details about props and states of the components
        b. Profiler -- Records your flow on the app. (Tracks time taken by components to load etc.)
    4. Passing data from child components to parent (Use event binding)
    5. React Context
        a. React provides a function to create context called createContext and a function to use context called useContext. [For functional components]
        b. There can be multiple contexts.
    6. Context is like a common state for your entire application
    7. You can use contect wherever you want to.
    8. Can we have multiple nested contexts
    9. useContext is a hook, so use it inside the functional comopnent.