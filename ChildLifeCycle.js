import { Text, View } from 'react-native'
import React, { Component } from 'react'

export class childLifeCycle extends Component {

    constructor(props) {
        super(props)
        console.log('constructor props', props);
        this.state = {
             counter: this.props.counter 
            }
    }
    static getDerivedStateFromProps(nextProps) {
        console.log('getDrivedStateFromProps', nextProps);
        return { counter: nextProps.counter }
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate props', nextProps, this.props, nextState, this.state);
        if (nextState.counter > 10) {
            return false
        }
        return true;
    }

    render() {
        console.log('Render',);
        return (
            <View>
                <Text style={{ margin: 50, color: 'red' }}>Hello child here {this.state.counter}</Text>
            </View>
        )
    }
    getSnapshotBeforeUpdate() {
        console.log('getSnapshotBeforeUpdate');
        return null
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    componentDidMount() {
        console.log('componentDidMount');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
}

export default childLifeCycle