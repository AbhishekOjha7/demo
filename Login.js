import { View, Text, SafeAreaView, Image, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, {useState} from 'react'
import {eye} from './src/assets'
import {hide} from './src/assets'
import { useNavigation } from '@react-navigation/native'


const Login = () => {
    const [hidePass, setHidePass] = useState(true);
    const [email, setEmail] = useState('');
    const[image, setImage] = useState(false);
     const [emailValidError, setEmailValidError] = useState('');
     const navigation=useNavigation();

    const handleValidEmail = val => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        
        if (val.length === 0) {
          setEmailValidError('email address must be enter');
        } else if (reg.test(val) === false) {
          setEmailValidError('enter valid email address');
        } else if (reg.test(val) === true) {
          setEmailValidError('');
        }
        }; 
        change=()=>{
            setHidePass(!hidePass)
            setImage(!image);
        };
        sucess=()=>{
            Alert.alert('Login sucesseful')
        }

        const img=image?eye:hide;
    return (
        <SafeAreaView style={styles.parent}>
            <View>
                <Image source={require('./src/assets/icLoginBg_2022-03-24/icLoginBg.png')} />
              
            </View>

            <View style={styles.inner}>
                <Text style={styles.logintext}>{'Login'}</Text>
                <Text style={styles.detailstext}>{'Enter your details to continue'}</Text>
            </View>
            
            <View style={styles.password}>
                <Text>{'Email'}</Text>
                <TextInput
                    placeholder='Email'
                    autoCapitalize='none'
                    value={email}
                    autoCorrect={false}
                    
                    onChangeText={value => {
                        setEmail(value);
                        handleValidEmail(value);
                      }}
                />
            </View>

            {emailValidError ? <Text style={{padding:10,color:'red',paddingLeft:30}}>{emailValidError}</Text> : null}
            <View style={styles.password}>
                <Text style={styles.emailplaceholder}>{'Password'}</Text>
                <TextInput
                    placeholder='Password'
                    secureTextEntry={hidePass ? true : false}
                />

                <TouchableOpacity style={styles.eyeimagetouch} onPress={change}>
                <Image  source={img} style={{height:20,width:20}}/>
                </TouchableOpacity>  
            </View>

            <View style={styles.forget}>
                <TouchableOpacity>
                <Text style={styles.textforget}>{'Forget Password?'}</Text>
                </TouchableOpacity>
                
            </View>

            <View>
                <TouchableOpacity style={styles.login}>

                    <Text onPress={sucess} style={styles.loginbutton}>{'LOGIN'}</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.reg}>
                <TouchableOpacity>
                <Text style={styles.footer}>{'Not Registered Yet?'}</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>{navigation.navigate('Register')}}>
                <Text style={styles.secondfooter}>{'Register'}</Text>
                </TouchableOpacity>
                
                
            </View>
        </SafeAreaView>

    )
}

export default Login
const styles = StyleSheet.create({
    parent:{
    flex:1
    },
    inner:{
        paddingLeft: 30 
    },
    logintext:{
        fontWeight: 'bold', fontSize: 30
    },
    detailstext:{
        color: 'grey', marginTop: 15
    },
    emailplaceholder:{
        color: 'grey' 
    },
    eyeimagetouch:{
        position: 'absolute', top: 20, right: 20
    },
   
    // email: {
    //     height: 60,
    //     marginHorizontal: 20,
    //     borderWidth: 1,
    //     padding: 20,
    //     borderColor: 'grey',
    //     borderRadius: 5,
    //     marginTop: 20,
    // },
    password: {
        height: 60,
        width: '90%',
        marginHorizontal: 20,
        borderWidth: 1,
        padding: 20,
        borderColor: 'grey',
        borderRadius: 5,
        marginTop: 20,
        paddingTop: 10
    },
    forget: {
        marginTop: 20,
        color: 'grey',
        paddingRight: 20,
        alignItems: 'flex-end'
    },
    textforget:{
        color: 'grey', fontWeight: '400' 
    },
    login: {
        backgroundColor: '#fee7a4',
        alignItems: 'center',
        padding: 20,
        margin: 40,
        borderRadius: 10
    },
    loginbutton:{
        fontWeight: 'bold', fontSize: 20 
    },
    reg: {
        alignItems: 'center',
        position:'absolute',
        bottom:'5%',
        width:'100%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    footer:{
        fontSize: 20 ,
        marginBottom:30
    },
    secondfooter:{
        fontSize: 20, 
        fontWeight: 'bold',
        marginBottom:30
    },


})