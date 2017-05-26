import React from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class App extends React.Component {

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
            <View>
                {this.state.user && this.state.user.length ? this.state.user.map((data, index) => {
                    return <Text key={index}>{data.email}</Text>
                }) : false
                }
            </View>);
    }
}

export default App;