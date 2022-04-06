import React from 'react';

import {View, Text,TouchableOpacity} from 'react-native';
import ChildLifeCycle from './ChildLifeCycle';

class ParentClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        couter : 0
    }
  }

 

  render() {
    return (
      <View style = {{margin : 50}}>
        <Text> Hello parent {this.state.couter} </Text>
        <TouchableOpacity onPress={ () => this.setState({couter : this.state.couter + 1})}>
            <Text>Click me</Text>
        </TouchableOpacity>
        <ChildLifeCycle counter = {this.state.couter} />
      </View>
    );
  }

  



}

export default ParentClass;