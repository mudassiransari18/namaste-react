import Header from "../components/Header"
import { render } from "@testing-library/react"     // for rendering only particular component
// Eg 
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={appRouter} />); 

test("Logo should load on rendering header", () => {
    const header = render(<Header />);
    console.log(header);
})