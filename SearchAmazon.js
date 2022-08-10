// import { View, Text } from 'react-native'
// import React from 'react'
// import { NavigationContainer, useNavigation } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { Button } from 'react-native-paper';
// import { SafeAreaView } from 'react-native-safe-area-context';

// const Stack=createNativeStackNavigator();


// const SearchAmazon = () => {
//   return (
//       <NavigationContainer>
//       <Stack.Navigator>
//                 <Stack.Screen name="Search" component={SearchScreenAmazon}
//                 options={{
//                   headerTintColor: 'black',
//                   headerStyle: { backgroundColor: 'aqua' },
//                   title:'Search page', 
//                 }}/>
//          <Stack.Screen name="Searching" component={Searching}/>

//       </Stack.Navigator>
//      </NavigationContainer> 

//   )
// };
// function SearchScreenAmazon({navigation}){
//     return(
//         <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'yellow'}}>
//            <View style={{justifyContent:'center',alignItems:'center'}}>
//             <Text>SEARCH HERE</Text>
//             <Button style={{backgroundColor:'green',marginVertical:5}} color='white'
//              title='Search button'
//             onPress={()=>{
//                 navigation.navigate('Searching');
//             }}
//             />
//         </View>
//         </SafeAreaView>

//     )
// }

// function Searching({navigation}){
// return(
//     <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//     <View >
//      <Text>SEARCHing HERE</Text>
//      <Button
//      title= 'Searching'
//      onPress={()=>{
//          navigation.navigate('Searching');
//      }}
//      />
//  </View>
//  </SafeAreaView> 
// )
//     }

// export default SearchAmazon

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Article Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
