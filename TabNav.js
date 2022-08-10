import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation,NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Register from './Register'
import Login from './Login'
import Details from './Form'
import Homepage from './Nav'
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createMaterialBottomTabNavigator();



export default function TabNav() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                // shifting={false}
                // barStyle={{backgroundColor:'#888'}}
                initialRouteName='Login'
                screenOptions={{
                    tabBarActiveBackgroundColor: '#222',
                    tabBarInactiveBackgroundColor: '#4C4C4C',
                    tabBarActiveTintColor: '#fff',
                    tabBarInactiveTintColor: 'orange',
                    // barStyle:{backgroundColor:'#000000'}
                }}>
                <Tab.Screen name="Home" component={Homepage}
                    options={{
                        
                        headerTintColor: 'white',
                        headerStyle: { backgroundColor: 'tomato' },
                        tabBarIcon: ({ focused }) => {
                            return (
                                <Image style={{ height: 25, width: 25, }}
                                    source={!focused ? require('./src/assets/images/home.png') : require('./src/assets/images/home_not.png')} />

                            )
                        },
                        tabBarColor: '#001219',

                    }}
                />

                <Tab.Screen name='Search' component={Search}
                    options={{
                        headerTintColor: 'white',
                        headerStyle: { backgroundColor: 'tomato' },
                        tabBarIcon: ({ focused }) => {
                            return (
                                <Image style={{ height: 25, width: 25 }}
                                    source={focused ? require('./src/assets/images/search.png') : require('./src/assets/images/search_not.png')} />
                            )
                        },
                        tabBarColor: '#370617',
                    }}
                />

                <Tab.Screen name='Register' component={Register}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <Image style={{ height: 25, width: 25 }}
                                    source={focused ? require('./src/assets/images/editn.png') : require('./src/assets/images/edit-not.png')} />
                            )
                        },
                        tabBarColor: '#6a040f',
                    }}
                />
                <Tab.Screen name="Login" component={Login}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <Image style={{ height: 25, width: 25 }}
                                    source={focused ? require('./src/assets/images/user.png') : require('./src/assets/images/user_not.png')} />
                            )
                        },
                        tabBarColor: '#9d0208',
                    }}
                />
                <Tab.Screen name='Details' component={Details}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <Image style={{ height: 25, width: 25 }}
                                    source={focused ? require('./src/assets/images/details.png') : require('./src/assets/images/details_not.png')} />
                            )
                        },
                        tabBarColor: '#005f73',
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

function HomeScreen() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{alignItems:'center'}}>
            
                    <Image style={{height:40,width:40}}
                    source={{uri:'https://cdn-icons-png.flaticon.com/128/1946/1946436.png'}}
                    />
            
            </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text>{'Home'}</Text>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('Login') }}>
                    <Text>{'Login'}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    )
}
function Search({ navigation }) {
    return (
        <View>
            <Text>{'Search here'}</Text>
        </View>
    )
}

// function Register({ navigation }) {
//     return (
//         <View>
//             <Text>{'Register page'}</Text>
//         </View>
//     )
// }
// function Login({ navigation }) {
//     return (
//         <View>
//             <Text>
//                 {'All Downloads'}
//             </Text>
//         </View>
//     )
// }
// function Form({ navigation }) {
//     return (
//         <View>
//             <Text>{'My Account'}</Text>
//         </View>
//     )
// }
