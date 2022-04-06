import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function App() {
    const [count, setCount] = useState(1)
    const [myData, setMyData] = useState([])

    useEffect(() => {
        URL = 'https://api.instantwebtools.net/v1/passenger?page=${1}&size=100';
        axios
            .get(URL)
            .then((response) => {
                setMyData(response.data.data)
            })
    }, [])
    header = () => {
        return (
            <View
                style={{ height: 45, width: '100%', backgroundColor: '#DAB88B', justifyContent: 'center', alignItems: 'center', }}>
                <Text style={styles.news}>Passenger Details</Text>
            </View>
        )
    }

    return (
        <SafeAreaView  style={{flex:1,backgroundColor:'#F3E9DD'}}>
            <FlatList

                ListHeaderComponent={this.header()}
                data={myData}

                renderItem={({ item }) => {
                    return (
                    <View style={{borderWidth:1,alignItems:'center'}}>
                        <Text>{item.name}</Text>
                        <Text>{item.airline[0].name}</Text>
                    </View>)
                }}

                onEndReached={() => {

                    axios.get(URL).then((response) => {

                        setMyData([...myData, ...response.data.slice(count, count + 10)])
                        setCount(count + 10)
                    })
                    alert('got it')
                }}
                onEndReachedThreshold={0}
            />
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({

    main: {
        paddingVertical: 40,
    }

})