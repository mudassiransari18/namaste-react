import { Outlet } from "react-router-dom";
import React from "react";
export default class About extends React.Component {

    constructor(props) {
        super(props);
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