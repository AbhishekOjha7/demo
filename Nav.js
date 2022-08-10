import {
    FlatList,
    Image,
    Modal,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Button,Animated
  } from 'react-native';
import * as React from 'react';
import { useState } from 'react';
import {useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const MyStack = () => {
  

  return (
    // <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen}
                options={{
                  headerTintColor: 'black',
                  headerStyle: { backgroundColor: 'aqua' },
                  title:'Home page', 
                }}
                 />
        <Stack.Screen name="Details" component={DetailsScreen}
        options={{ headerStyleInterpolator: forFade }}/>
        <Stack.Screen name="Search" component={SearchScreen}/>
      </Stack.Navigator>
    //  </NavigationContainer> 
  );
};


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details',{names: ''})}
      />
      <Button
     title='go to search page'
     onPress={()=>{navigation.navigate('Search')}}
     />
    </View>
  );
}
function DetailsScreen({ navigation,route}) {
  const {names}=route.params;
  const [count,setCount]=useState(true);
  const navigat = useNavigation();

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>{JSON.stringify(names)}</Text>
        <Button
        
          title="Go to Details... again"
          onPress={() =>{ 
            if(count){
            navigation.setParams({
            names:'ojha abhishek'
          })}else{
            navigation.setParams({
              names:'ojha'
            })
          }
          setCount(!count)
        }}
        />
    <Button
     title='go to search page'
     onPress={()=>{navigation.navigate('Search')}}
     />
      </View>
    );
  }

  function SearchScreen(){
    // const navigation = useNavigation();
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text>searching page</Text>
       <Button
     title='go to Homepage'
     onPress={()=>{navigation.navigate('Home')}}/>
    
      </View>
    )
  }
  const forFade = ({ current, next }) => {
    const opacity = Animated.add(
      current.progress,
      next ? next.progress : 0
    ).interpolate({
      inputRange: [0, 1, 2],
      outputRange: [0, 1, 0],
    });
  
    return {
      leftButtonStyle: { opacity },
      rightButtonStyle: { opacity },
      titleStyle: { opacity },
      backgroundStyle: { opacity },
    };
  };

  export default MyStack;