import { Outlet } from "react-router-dom";
import React from "react";
export default class About extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.fetchData();
      }

    async fetchData() {
        const data = await Promise.all([fetch('https://catfact.ninja/fact'), fetch('https://api.publicapis.org/entries')]);
        console.log(data);
    }

    render() {
        return (
            <>
                <div>
                    <h1>About Us</h1>

                </div>
    
                <Outlet />
            </>
        )
    }
}