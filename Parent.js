import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Child from './Child'

const Parent = (props) => {
     const obj="i am object"
    return (
        <SafeAreaView>
            <View>
               <Child res={obj}/> 
                <Text>Parent</Text>
            </View>
        </SafeAreaView>

    )
}

export default Parent