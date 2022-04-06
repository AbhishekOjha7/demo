import { View, Text } from 'react-native'
import React from 'react'

const Child = (props) => {
  return (
    <View>
      {/* <Text>Child</Text> */}
      <Text>{props.res}
          </Text>
    </View>
  )
}

export default Child