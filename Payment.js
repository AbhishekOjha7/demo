import { SafeAreaView, Text, StyleSheet, View, Image, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React, { Component } from 'react'

export default class Payment extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'aqua' }}>
                <View style={styles.inner}>
                    <View style={styles.inner1}>
                        <Image
                            style={styles.arrow}
                            source={{
                                uri: 'https://www.nicepng.com/png/detail/405-4058644_long-arrow-left-comments-long-left-arrow-icon.png'
                            }}
                        />
                        <Text style={styles.header}
                            onPress={() => Alert.alert("payment mode")}>{'Select Payment'}</Text>
                    </View>
                </View>

                <ScrollView>
                    <View>
                        <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold' }}>Total</Text>
                        <Text style={{ textAlign: 'center', fontSize: 40 }}>$209.05</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.box}>
                            <Image
                                style={styles.image}
                                source={{
                                    uri: ('https://www.kindpng.com/picc/m/13-130835_credit-card-credit-card-vector-png-transparent-png.png'
                                    )
                                }} />
                            <Text style={{ textAlign: 'center', fontSize: 20, marginTop: 10, color: 'blue' }}
                                onPress={() => Alert.alert("Hey,you clicked on credit")}>Credit</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.box}>
                            <Image
                                style={styles.image}
                                source={{
                                    uri: ('https://www.pngitem.com/pimgs/m/534-5347835_pos-debit-card-machine-hd-png-download.png'
                                    )
                                }} />
                            <Text style={{ textAlign: 'center', fontSize: 20, color: 'blue' }}
                                onPress={() => Alert.alert("Hey,you clicked on Atm")}>Atm</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.box}>
                            <Image
                                style={styles.image}
                                source={{
                                    uri: ('https://toppng.com/uploads/preview/objects-indian-money-1156291578514po2bkmwk.png'
                                    )
                                }} />
                            <Text style={{ textAlign: 'center', fontSize: 20, color: 'blue' }}
                                onPress={() => Alert.alert("Hey,you clicked on cash")}>Cash</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.box}>
                            <Image
                                style={styles.image}
                                source={{
                                    uri: ('https://www.pngkit.com/png/full/12-121972_gift-card-png-image-gift-card.png'

                                    )
                                }} />
                            <Text style={{ textAlign: 'center', margin: 5, fontSize: 20, color: 'blue' }}
                                onPress={() => Alert.alert("Hey you got a gift card")}>Gift card</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>

        )
    }
}
const styles = StyleSheet.create({
    inner: {
        // marginTop:10
    },
    header: {
        fontSize: 30,
        //  paddingLeft: 40,
        textAlign: 'center',
        // justifyContent:'center',
        fontWeight: '800',
    },
    inner1: {
        height: 70,
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: 'aqua',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 2,

        elevation: 5,
    },
    arrow: {
        height: 30,
        width: 50,
        resizeMode: 'contain',
        borderWidth: 1,
        position: 'absolute',
        left: 7,
        // top:15,
    },
    image: {
        height: 120,
        width: 120,
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        margin: 18,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 20
    },

})