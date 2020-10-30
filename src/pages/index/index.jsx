import React, { Component } from 'react';
import { Route } from "react-router-dom";
const User = ({ match }) => <p>{match.params.id}</p>;
class A extends Component {
    render() {
        return (
            <div>
                <div>index</div>
            </div>
        )
    }
}
export default A