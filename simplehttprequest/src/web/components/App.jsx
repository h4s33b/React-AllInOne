import React from 'react';
import axios from 'axios';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { user: [] }
    }

    componentWillMount() {
        axios.get('https://randomuser.me/api/').then((response) => {
            console.log(response);
            this.setState({ user: response.data.results });
        })
    }
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                {this.state.user && this.state.user.length ? this.state.user.map((data, index) => {
                    return <div key={index}>{data.email}</div>
                }) : false
                }
            </div>);
    }
}   