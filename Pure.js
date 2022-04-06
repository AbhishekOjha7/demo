//pure component implement

// import { SafeAreaView, Text, View,TouchableOpacity} from 'react-native'
// import React, { Component } from 'react'

// export default class Pure extends React.Component {
//     constructor(props){
//         super(props)
//         this.state={
//             count:0,
//         }
//     };
//     onclick=()=>{
//         this.setState({count:this.state.count+1})
//     }

//   render() {
// console.log("rendering");
//     return (
//         <SafeAreaView style={{flex:1,backgroundColor:'aqua'}}>
//         <View>
//         <Text>Count value:{this.state.count}</Text>
//         </View>
//         <TouchableOpacity>
//             <Text onPress={this.onclick} style={{textAlign:'center',justifyContent:'center',}}>CLICKME</Text>
//         </TouchableOpacity>
//         </SafeAreaView>

//     )
//   }
// }

// import { SafeAreaView, SectionList, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
// import React, { Component } from 'react'

// const header = ({ section }) => {
// let res = JSON.stringify(section);
// let obj = res.find(obj => obj.key == '1');
// let obj=Object.values(res)
//     return (
//         <Text style={styles.head}>{section.title.value}</Text>
//     )
// }

// export default class Pure extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//              Data :[
//                 {
//                     title: { key: '1', value: 'test1', description: 'test demo testing1' },
//                     data: ["Pizza", "Burger", "Risotto"]
//                 },
//                 {
//                     title: { key: '1', value: "Sides", description: 'test demo testing2' },
//                     data: ["French Fries", "Onion Rings", "Fried Shrimps"]
//                 },
//                 {
//                     title: { key: '1', value: "Drinks", description: 'test demo testing3' },
//                     data: ["Water", "Coke", "Beer"]
//                 },
//                 {
//                     title: { key: '1', value: "Desserts", description: 'test demo testing4' },
//                     data: ["Cheese Cake", "Ice Cream"]
//                 }
//             ]

//         } 
//     } 
//  Add=()=>{
//      const x={
//         title: { key: '1', value: 'Drinks', description: 'test demo testing1' },
//         data: ["Pizza", "Burger", "Risotto"]
//     }
// this.setState({Data:this.toAdd(x)})
//     }
// toAdd=(x)=>{
//     for(let i=0;i<this.state.Data.length;i++){
//         if(x.title.value==this.state.Data[i].title.value){
//            this.state.Data[i].data= [...this.state.Data[i].data,...x.data]
//             return this.state.Data
//         }
//     }
//     return [...this.state.Data,x]

// }

//     render() {
//         return (
//             <SafeAreaView style={{flex:1,color:'black'}}>
//                 <TouchableOpacity>
//                     <Text onPress={this.Add}>Add me</Text>
//                 </TouchableOpacity>
//                 <SectionList
//                 sections={this.state.Data}
//                  renderItem={({item}) => {
//                     //  let ans=item.slice(0,2);
//                         return (
//                             <Text style={styles.items}>{item}</Text>
//                         )
//                     }}
//                     renderSectionHeader={header}

//                 />

//             </SafeAreaView>
//         )
//     }
// }
// const styles = StyleSheet.create({
//     head:{
//         fontSize:40,
//         backgroundColor:'black',textAlign:'center',
//         borderWidth:1,
//         color:'red'

//     },
//     items:{
//         fontSize:20,
//         textAlign:'center'
//     }
// })


import { SafeAreaView, Text, View, Image, FlatList, StyleSheet } from 'react-native'
import React, { Component } from 'react'

const data = [
    {
        url: 'https://i.ytimg.com/vi/56evm-ai7DI/maxresdefault.jpg',
    },
    {
        url: 'https://mc.webpcache.epapr.in/mcms.php?size=large&in=https://mcmscache.epapr.in/post_images/website_326/post_26215020/full.jpg',
    },
    {
        url: 'https://www.koimoi.com/wp-content/new-galleries/2021/05/amazon-prime-videos-the-family-man-season-2-trailer-gets-a-phenomenal-response-5-million-views-in-just-5-hours-001.jpg',
    },
    {
        url: 'https://images-na.ssl-images-amazon.com/images/I/91j9NqPez3L._RI_.jpg',
    },
]

export default class Pure extends Component {
    render() {
        return (
            <SafeAreaView style={{ backgroundColor: 'black', flex: 1 }}>
                <View>
                    <Image
                        style={{ width: 100, height: 50, alignSelf: 'center', resizeMode: 'contain' }}
                        source={{
                            uri: 'https://amazonuk.gcs-web.com/system/files-encrypted/nasdaq_kms/inline-images/Prime_Video_Logo.png'
                        }}
                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ padding: 10, margin: 10, marginLeft: 20 }}>
                        <Text style={{ color: 'white' }}>Home</Text>
                    </View>
                    <View style={{ padding: 10, margin: 10 }}>
                        <Text style={{ color: 'white' }}>TV Shows</Text>
                    </View>
                    <View style={{ padding: 10, margin: 10 }}>
                        <Text style={{ color: 'white' }}>Movies</Text>
                    </View>
                    <View style={{ padding: 10, margin: 10, marginLeft: 10 }}>
                        <Text style={{ color: 'white' }}>Kids</Text>
                    </View>
                </View>

                <View>
                    <FlatList
                        horizontal
                        data={data}
                        renderItem={({ item }) => (
                            <View>

                                <Image
                                    style={{ width: 400, height: 200, alignSelf: 'center' }}
                                    source={{
                                        uri: item.url
                                    }}
                                />
                            </View>
                        )}
                    />
                </View>
              
              <View>
                
              </View>
                <View style={styles.footer}>
                    <View style={{ padding: 10 }}>
                    <Image style={{width:30,height:40,resizeMode:'contain'}} source={require('./src/assets/amazon/home.png')}/>
                        <Text style={{ color: 'white', fontWeight: '600' }}>Home</Text>
                    </View>
                    <View style={{ padding: 10 }}>
                        <Text style={{ color: 'white', fontWeight: '600' }}>Channels</Text>
                    </View>
                    <View style={{ padding: 10 }}>
                        <Text style={{ color: 'white', fontWeight: '600' }}>Find</Text>
                    </View>
                    <View style={{ padding: 10 }}>
                        <Text style={{ color: 'white', fontWeight: '600' }}>Downloads</Text>
                    </View>
                    <View style={{ padding: 10 }}>
                        <Text style={{ color: 'white', fontWeight: '600' }}>My Stuff</Text>
                    </View>
                </View>


            </SafeAreaView>

        )
    }
}
const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: 20,
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
})