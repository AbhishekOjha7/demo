// import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
// import React, { useState } from 'react'

// const Hooks = () => {
//     const[prevstate,newstate]=useState(0);
// const onchange=()=>{
//     newstate(prevstate+1)
// }
//     return (
//         <SafeAreaView>
//             <View>
//                 <TouchableOpacity>
//                     <Text onPress={onchange}>click me</Text>
//                 </TouchableOpacity>
//                 <Text>{prevstate}</Text>
//             </View>
//         </SafeAreaView>

//     )
// }

// export default Hooks

//UseReducer

import React, {useReducer} from "react";
import { SafeAreaView, View ,Text, Button } from "react-native";

const reducer = (state, action) => {
    switch(action.type) {
        case "INCREMENT":
            return {...state, count: state.count + 1};
        case "DECREAMENT":
            return {...state, showText: state.count-1};
        default:
            return state;
}
}
const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0, showText: 0});

    return (
        <SafeAreaView>
            <View>
                <Text>{state.count}</Text>
               <Button onPress={()=>{
                   dispatch({type:"INCREMENT"});
               }} title='INC'/>
               <Button onPress={()=>{
                   dispatch({type:"DECREAMENT"});
               }} title='DEC'/>
               <Text>{state.showText}</Text>

            </View>
        </SafeAreaView>
    )
};

export default UseReducer;

//UseEffect

// import { View, Text, Button, SafeAreaView, FlatList } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import axios from 'axios';

// const Hooks = () => {
//     const [data, setdata] = useState('');
//     const [count, setcount] = useState(0);

    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/comments').then((response) => {
    //         setdata(response.data)
    //         console.log("response part",);
    //     }).catch((err)=>{
    //         console.log("error part",err);
    //     })
    // }, [])

//     useEffect(() => {
//     async function abc(){
//         let resp = await axios.get('https://jsonplaceholder.typicode.com/comments');
//         setdata(resp.data);
//         console.log("response",resp);
        
//     }
//     abc();

// },[])

//     return (
//         <SafeAreaView>
//             <View>
                {/* <Text>{data}</Text>
                <Text>{count}</Text>
                <Button onPress={() => {
                    setcount(count + 1);
                }}
                    title='CLICK ME'
                /> */}
//                 <FlatList
//                 data={data}
//                 renderItem={({item})=>{
//                     return(
//                         <View>
//                           <Text>{item.name}</Text>
//                         </View>
                        
//                     )
//                 }}
//                 />

//             </View>
//         </SafeAreaView>

//     )
// }

// export default Hooks

// import axios from 'axios';
// import React, {useState, useEffect} from 'react';
// import {View, Text} from 'react-native';

// export default function App(){
// const [state, setState] = useState([]);

// useEffect(() => {
//     async function abc(){
//         let resp = await axios.get('https://jsonplaceholder.typicode.com/comments');
//         setState(resp.data);
        
//     }
//     console.log(state)
//     abc();

// },[])

// return(
//     <View style = {{marginTop: 40}}>
        {/* <Text>{state}</Text> */}
//     </View>
//     )
// }

// import { View, Text, SafeAreaView,FlatList } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// const Hooks = () => {
// const[data,setdata]=useState([]);
 
// useEffect(()=>{
//     axios.get('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=d872a232ee86b93604932275031f6bd6')
//     .then((response)=>{
//         setdata(response.data)
//         console.log('new resonse',response.data)
//     })
//     .catch((err)=>{
//         console.log("error part", err)
//     })
// },[])
//   return (
//       <SafeAreaView>
//            <View>
//            <FlatList
//                 data={data.list}
//                 renderItem={({item})=>{
//                     return(
//                         <View>
//                           <Text>{item.main.temp}</Text>
//                         </View>  
//                     )
//                 }}
//                 />
//     </View>
//       </SafeAreaView>
    
//   )
// }

// export default Hooks



