import { useRouteError } from "react-router-dom"

export default ErrorComponent = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1>Oops</h1>
            <h2>Something went wrong</h2>
        </div>
    )
}