// import React from 'react';
// import {
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,
//   TouchableHighlight,
//   Image,
//   TouchableOpacity,
//   Alert,
//   FlatList,
//   SectionList,
// } from 'react-native';
// import axios from 'axios';
// const App= props => {
//   const data = [
//     {
//         Name: 'Abhishek Ojha',
//         Dept: "ReactNative",
//         Empid: 'AI1579',
//     },
//     {
//         Name: 'prakhar',
//         Dept: "ReactNative",
//         Empid: 'AI1575',
//     },
//     {
//         Name: 'karan',
//         Dept: "Ios",
//         Empid: 'AI1549',
//     },
//     {
//         Name: 'Ayush Mishra',
//         Dept: "Ios",
//         Empid: 'AI3579',
//     },
//     {
//         Name: 'shivam',
//         Dept: "android",
//         Empid: 'AI1579',
//     },
// ];
//   const renderData = ({item}) => {
//     return(
//       <View style={styles.cardObjectConatiner}>
//           <Text style={styles.titleStyle}>{item.Name}</Text>
//           <Text style={styles.valueStyle}>{item.Empid}</Text>
//         </View>
//     )
//   }
//   const renderSectionHeader = ({ section: { date } }) => {
//     return (
//       <Text style={styles.sectionText}>
//         {date}
//       </Text>
//     );
//   };

//   let formatData = React.useMemo(() => {
//     // this gives an object with dates as keys
//     if (data.length == 0) return [];
//     console.log('data',data)
//     const groups = data.reduce((groups, item) => {
//       console.log('groups_item',groups,item)
//       const date = item.Dept;
//       if (!groups[date]) {
//         groups[date] = [];
//       }
//       groups[date].push(item);
//       return groups;
//     }, {});

//     console.log('groups',groups)

//     // Edit: to add it in the array format instead
//     const groupArrays = Object.keys(groups).map(date => {
//       console.log('date',date);
//       return {
//         date,
//         data: groups[date],
//       };
//     });
//     console.log('Here',groupArrays )
//     return groupArrays;
//   }, [data]);

//   return (
//     <View style={styles.container}>
//       <SectionList
//         sections={formatData} //{DATA}
//         renderItem={renderData}
//         renderSectionHeader={renderSectionHeader}
//         keyExtractor={(item, index) => `item-${index}`}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     marginTop: 100,
//   },
//   shadow: {
//     shadowColor: 'red',
//     shadowOffset: {width: 0, height: 3},
//     shadowRadius: 4.65,
//     shadowOpacity: 1,
//     // alignSelf:'center',
//     position: 'absolute',
//     top: 60,
//   },
//   center: {
//     color: 'red',
//     height: 20,
//     alignSelf: 'center',
//     marginVertical: 20,
//   },
//   flatListColumnStyle: {
//     justifyContent: 'space-between',
//     marginTop: 16,
//     // backgroundColor:'green',
//     borderWidth: 2,
//   },
//   flatlistContainer: {
//     paddingHorizontal: 18,
//     width: '100%',
//     // backgroundColor:'red'
//   },
//   cardObjectConatiner: {
//     width: 160,
//     alignSelf:'center',
//   },
//   titleStyle: {
//     color: 'black',
//     fontSize: 12,
//   },
//   valueStyle: {
//     fontSize: 13,
//     marginTop: 5,
//   },
//   separator: {
//     height: 16,
//     backgroundColor:'green'
//   },
//   sectionText: {
//     fontSize: 12,
//     paddingVertical: 10,
//     alignSelf: 'center',
//     backgroundColor:'aqua'
//   }
// });

// export default App;





// FLATLIST USED IN API DATA

// import { FlatList, SafeAreaView, Text, View } from 'react-native'
// import React, { Component } from 'react'
// import axios from 'axios'

// export default class App extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             data:[],
//         }
//     }
//     callApi=()=>{
//         axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
//             this.setState({data:response.data})
//             console.log(response.data);
//         })
//     }
//   render() {
//     return (

//    <SafeAreaView>
//  <Text onPress={()=>{this.callApi()}}>{'\n'}CLICK ME</Text>

//  <FlatList
//     data={this.state.data}
//     renderItem={({item})=>{
//         return(
//             <View>
// <Text>{item.id}</Text>
// <Text>{item.name}</Text>
// <Text>{item.email}</Text>
//             </View>

//         )
//     }}
//  />
//    </SafeAreaView>

//     )
//   }
// }

// import { View, Text, TouchableOpacity, FlatList,SafeAreaView } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// export default function App() {
//   const[data,setnewData]=useState([]);
//   const [counter, setCounter] = useState(false);
//   useEffect(()=>{
//     console.log(counter)
//     if(counter === true){
//       axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
//         setnewData(response.data)
//     })
//   }else{
//     setnewData([])
//   }
// }, [counter])
//   onclick = ()=>{
//     !counter?setCounter(true):setCounter(false);
//   }

//   return (
//     <SafeAreaView>
//    <TouchableOpacity>
//       <View>
//         <Text onPress={onclick}>CLICKME</Text>
//       </View>
//     </TouchableOpacity>

//     <FlatList
//     data={data}
//     renderItem={({item})=>{
//       return(
//         <View>
//           <Text>{item.name}</Text>
//           <Text>{item.email}</Text>
//         </View>

//       )
//     }}
//     />
//     </SafeAreaView>



//   )
// }


// import { Text, View ,StyleSheet,SectionList,FlatList,Image} from 'react-native'
// import React, { Component } from 'react'
// import axios from 'axios'

// export default class App extends Component {
//     constructor(){
//         super()

//         this.state={
//             newData:[]
//         }

//     }
/*       newData:[
          {
            title: "Main dishes",
            data: ["Pizza", "Burger", "Risotto"]
          },
          {
            title: "Sides",
            data: ["French Fries", "Onion Rings", "Fried Shrimps"]
          },
          {
            title: "Drinks",
            data: ["Water", "Coke", "Beer"]
          },
          {
            title: "Desserts",
            data: ["Cheese Cake", "Ice Cream"]
          }
        ]
  }
}
*/

// componentDidMount(){
//     console.log('api call')

//      axios.get('https://newsapi.org/v2/everything?q=tesla&from=2022-02-14&sortBy=publishedAt&apiKey=3729db0cc0ab433a99504ba4e3895150').then((response)=>{

//         //  this.setState({newData:response.data.articles})
//         this.setState({newData:response.data.articles.reduce((prev,curr)=>{
//             let newObj=prev.find(x=>x.author===curr.author)
//             if(!newObj){
//                 newObj={title:curr.author,data:[]}
//                 prev.push(newObj)
//             }
//             newObj.data.push(curr)
//             return prev
//         },[])})
//      })

//      console.log('after api')
// }
//   render() {
//     console.log(this.state.newData)
//     return (
//       <View style={styles.main}>
// {/*             <FlatList

//                 data={this.state.newData}

//                 renderItem={({ item }) => {

//                     return(

//                     <View>
//                         <Text>{item.title}</Text>
//                         <Text>{item.data}</Text>
//                     </View>
//                     )
//                 }}

// /> */}
//         <SectionList
//          sections={this.state.newData}

//          renderItem={({item})=>{
//              return(
//              <View style={styles.section}>
//                <Text>appp</Text>
//                  <Image style={{width:'100%',height:200 ,}} source={{uri:item.urlToImage}}/>
//                  <Text>{item.title}</Text>
//                  <Text>{item.description}</Text>
//              </View>
//              )
//          }}
//          renderSectionHeader={({section:{title}})=>{

//     return( <Text style={styles.header} >{title}</Text>)

//          }}

//         />


//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//     main:{
//         paddingTop:40,
//     },
//     header:{
//         borderWidth:1,
//         backgroundColor:'#FFAB4C',
//         textAlign:'center'

//     },
//     section:{
//         borderWidth:1,
//         backgroundColor:'#FF5F7E',
//     },
//   })



import { FlatList, SafeAreaView, Text, View, StyleSheet, onEndReached } from 'react-native'
import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      isFetching: false
    }
    this.offset = 50;
  }
  componentDidMount() {
    this.callApi();
  }
  callApi = () => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      // .then((response) => {
        
      // })
      // .catch(error => {
      //   console.error(error);
      // });
    .then((response) => {
      this.setState({ data: response.data})
      console.log(response.data);
    })
  }
  onEndReached = () => {
    // this.setState([...data,...data.slice(this.offset,(this.offset+50))])
    alert("hey you got it");
  }
  refresh() {
    this.setState({ isFetching: true }, function () {
      this.callApi();
    });
  }
  render() {
    return (

      <SafeAreaView style={{ backgroundColor: '#C3E5AE' }}>
        {/* <Text onPress={()=>{this.callApi()}}>{'\n'}CLICK ME</Text> */}

        <FlatList
          onRefresh={() => this.refresh()}
          refreshing={this.state.isFetching}
          data={this.state.data}
          renderItem={({ item }) => {
            return (
              <View style={styles.Main}>
                <Text style={styles.child}>{item.id}{'\t'}{item.email}</Text>
                {/* <Text>{item.name}</Text> */}
                {/* <Text>{item.email}</Text> */}
              </View>
            )
          }}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={0.5}
        />
      </SafeAreaView>

    )
  }
}
const styles = StyleSheet.create({
  Main: {
    borderWidth: 1,
    backgroundColor: '#C3E5AE'
  },
  child: {
    backgroundColor: '#F1E1A6',
    fontWeight: 'bold',

  }
})


// import { View, Text,FlatList,StyleSheet, SafeAreaView} from 'react-native'
// import React, { useEffect,useState } from 'react'
// import axios from 'axios'


// export default function App() {
//     const [count,setCount]=useState(50)
//     const [myData,setMyData]=useState([])

// useEffect(()=>{
//      URL ='https://jsonplaceholder.typicode.com/comments';
//     axios
//     .get(URL)
//         .then((response)=>{
            
//             setMyData(response.data.slice(0,count))
//         })
// },[])

//   return (
//     <SafeAreaView >
//       <FlatList
//       data={myData}
      
//       renderItem={({item})=>{
//           return (<View>

//               <Text></Text>
//               <Text>{item.id}. {item.email}</Text>
//           </View>)
//       }}

//       onEndReached={()=>{

//           axios.get(URL).then((response)=>{
              
//               setMyData([...myData,...response.data.slice(count,count+50)])
//               setCount(count+50)
//           })
//          alert('got it')
//       }}
//       onEndReachedThreshold={0}
//       />
//     </SafeAreaView>

//   )
// }

// const styles = StyleSheet.create({

//     main:{
//         paddingVertical:40,
//     }
    
// })

