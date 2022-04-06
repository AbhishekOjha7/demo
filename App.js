import { View, Text, SafeAreaView,StyleSheet, TouchableOpacity,Alert, ScrollView} from 'react-native'
import React from 'react'

export default function App() {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'aqua'}}>
       <View style={styles.heading}>
      <Text>My name is Abhishek Ojha</Text>
      <View>
      <TouchableOpacity>
      <Text style={styles.onpress}
     onPress={() => Alert.alert("hey you pressed me")}>click me</Text>
    </TouchableOpacity>
      </View>
   
    </View>
    <ScrollView style={{flex:0.5}}>
    <View style={{flex:0.5,backgroundColor:'white'}}>
      <Text style={{textAlign:'center'}}>employee details</Text>
      </View>
      <View>
        <Text>Spravdi, the Center for Strategic Communications in Ukraine, has said that Japan has stopped importing oil to Russia for oil processing plants. The country has also imposed sanctions against the citizens and companies of the Russian Federation and Belarus. The oligarchs Rotenberg, Gennady Timchenko and Alisher Usmanov, Putin's press secretary Peskov, head of Chechnya Ramzan Kadirov and others have gone to the sanctions list.

Canada has also imposed sanctions on Russian propagandists and officials, supporting Susplne.

Australia has introduced exchanges against the Russian military forces, high-ranking Russian military and others "to establish a strategic interest for Russia".
Russia-Ukraine news: Russia announced yet another temporary ceasefire and the establishment of safe corridors to allow civilians to flee the besieged Ukrainian cities of Kyiv, Mariupol, Kharkiv, and Sumy on Monday. However, Vladimir Putin's forces continued to launch a few Ukrainian cities with rockets as fierce fights continued elsewhere. The two sides met for a third round of talks at the Belarus-Poland border as the war entered its 12th day. Ukraine President Volodymyr Zelenskyy sought stricter international sanctions and trade embargo against Russia. Meanwhile, the European Council said Ukraine's application for an EU membership will be discussed soon. Stay tuned to Indiatoday.in for the latest news on the Russia-Ukraine war.
Russia-Ukraine news: Russia announced yet another temporary ceasefire and the establishment of safe corridors to allow civilians to flee the besieged Ukrainian cities of Kyiv, Mariupol, Kharkiv, and Sumy on Monday. However, Vladimir Putin's forces continued to launch a few Ukrainian cities with rockets as fierce fights continued elsewhere. The two sides met for a third round of talks at the Belarus-Poland border as the war entered its 12th day. Ukraine President Volodymyr Zelenskyy sought stricter international sanctions and trade embargo against Russia. Meanwhile, the European Council said Ukraine's application for an EU membership will be discussed soon. Stay tuned to Indiatoday.in for the latest news on the Russia-Ukraine war.

</Text>
      </View>
      </ScrollView>
    </SafeAreaView>
   
  )
}
const styles = StyleSheet.create({
   heading:{
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
    flex:2 
   },
   onpress:{
     color:'red',
     marginTop:10,
   }
})