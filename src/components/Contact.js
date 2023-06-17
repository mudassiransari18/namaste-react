const Child = ({propss, onClickFunction}) => {
    const btnClick = () => {
        onClickFunction("hello")
    }
    return (
        <div>
            <h1>{propss}</h1>
            <button onClick={() => btnClick()}>NEW BUTTON</button>
        </div>
    )
}


export default Contact = () => {

    const childToParent = (event) => {
        console.log(event);
    }
    return (
        <div>
            <h1>Contact US</h1>

            <div className="mt-5">
                <Child propss = "THis is prop from parent to child" onClickFunction={childToParent} />
            </div>
        </div>
    )
}