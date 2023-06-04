import React from "react";
import Shimmer from "./Shimmer";

export default class Profile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            obj: null
        };
    }

    async componentDidMount() {
        const data =  await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        this.setState({
            obj: json
        })
    }

    render () {
        return this.state.obj ? (
            <div>
                <h2>Profile</h2>
            </div>
        ) : <Shimmer />;
    }
}