import React from "react";
import Shimmer from "./Shimmer";

export default class Profile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            obj: 1
        };
    }

    async componentDidMount() {
        // const data =  await fetch("https://api.github.com/users/akshaymarch7");
        // const json = await data.json();
        // this.setState({
        //     obj: json
        // })
        console.log("componentDidMount");
    }

    increment() {
        let a = this.state.obj;
        this.setState({
            obj: 2
        })
    }

    render () {
        return this.state.obj ? (
            <div>
                <h2>Profile</h2>
                <p>{ this.state.obj }</p>
                <button onClick={ () => this.increment() }>Increment</button>
            </div>
        ) : <Shimmer />;
    }
}