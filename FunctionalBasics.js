// import { View, Text, SafeAreaView, TouchableOpacity, Button } from 'react-native'
// import React, { useState } from 'react'

// const FunctionalBasics = () => {
//     const [count, setcount] = useState(0);
//     return (
//         <SafeAreaView>
//             <View>
//                 <Text>FunctionalBasics</Text>
//                 <Text>{count}</Text>
//                 {/* <TouchableOpacity>
//                     <View>
//                         <Text onPress={()=>{
//                             setcount(count+1)
//                         }}>CLICK ME</Text>
//                     </View>
//                 </TouchableOpacity> */}
// <Button title="updat me" onPress={()=>{
//     setcount(count+1)
// }}/>             
//             </View>
//         </SafeAreaView>

//     )
// }
// export default FunctionalBasics


// import { View, Text } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import axios from 'axios';

// export default function FunctionalBasics() {
//     const [currentstate,newstate]=useState(0);
//    useEffect(()=>{
//        axios.get('https://jsonplaceholder.typicode.com/users').then(resp)
//    })
//   return (

//     <View>
//       <Text>FunctionalBasics</Text>
//     </View>
//   )
// }