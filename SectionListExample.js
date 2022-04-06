import { FlatList, SafeAreaView, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import axios from 'axios'


export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            dyntxt: 'Read more',
            len: 2,
            counter: 2,
            isFetching: false,
        };
    }
    updateMyview = () => {    //setstate is asynchronous sbse pehle if loop chlega tab ye setstate chlta hai
        this.setState({ counter: this.state.counter + 1 })
        if (this.state.counter % 2 == 0) {
            this.setState({ dyntxt: 'Read less' });
            this.setState({ len: 6 })

        }
        else {
            this.setState({ dyntxt: 'Read more' });
            this.setState({ len: 2 })
        }
    }
    componentDidMount() {
        this.callingData();
    }
    callingData = () => {
        axios.get('https://newsapi.org/v2/top-headlines?apiKey=8c9242e500994d45b177b72715f94c2b&country=in&page=2').then((response) => {
            this.setState({ data: response.data.articles })
            console.log(response.data);
        }
        );
    }
    header = () => {
        return (
            <View
                style={{ height: 45, width: '100%', backgroundColor: 'aqua', justifyContent: 'center', alignItems: 'center', }}>
                <Text style={styles.news}>Today News</Text>
            </View>
        )
    }
    refresh() {
        this.setState({ isFetching: true }, function () {
            this.callingData();
        });
    }


    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                {/* <Text onPress={() => { this.callingData() }} style={styles.button}>Get user Data </Text> */}

                <FlatList
                    //    horizontal //used for netflix scroll
                    //    showsHorizontalScrollIndicator={false}
                    // inverted //used for last to first

                    onRefresh={() => this.refresh()}
                    refreshing={this.state.isFetching}

                    ListHeaderComponent={this.header()}

                    data={this.state.data}
                    renderItem={({item}) => {
                        return (

                            <View style={styles.body}>
                                <Image
                                    style={styles.image}
                                    source={{ uri: item.urlToImage }} />

                                <View style={{}}>
                                    <Text style={{ color: 'black', fontSize: 15, textAlign: 'center' }}>{item.source.name}</Text>
                                </View>

                                <View>
                                    <Text style={{ color: 'black', fontSize: 15, textAlign: 'center' }}>{item.author}</Text>
                                </View>
                                <View>
                                    <Text style={{ color: 'black', fontSize: 15, textAlign: 'center' }}>{item.title}</Text>

                                    <View>
                                        <Text numberOfLines={this.state.len} style={{ color: 'black', fontSize: 15, textAlign: 'center' }}>{item.description}</Text>
                                    </View>
                                    <View>
                                        <TouchableOpacity>
                                            <Text style={{ color: 'red', margin: 5 }} onPress={() => {
                                                this.updateMyview()
                                            }}>{this.state.dyntxt}</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>




                            </View>
                        )

                    }}
                />
            </SafeAreaView>

        )
    }
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
        color: 'red',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
    },
    body: {
        borderWidth: 1,
        margin: 10,
        backgroundColor: 'gray',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
    },
    details: {
        fontSize: 20,
        textAlign: 'center',

    },
    image: {
        width: 150,
        height: 100,
        paddingTop: 16,
        marginTop: 16,
        alignSelf: 'center',

    },
    news: {
        fontSize: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
    },

})