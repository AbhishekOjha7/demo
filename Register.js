import { View, Text, SafeAreaView, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { eye } from './src/assets'
import { hide } from './src/assets'
import { tic } from './src/assets'
import { circle } from './src/assets'
import { useNavigation } from '@react-navigation/native'



const Login = () => {
    const [hidePass, setHidePass] = useState(true);
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(false);
    const [emailValidError, setEmailValidError] = useState('');
    const [passError, setPassError] = useState('');
    const [password, passwordError] = useState('');
    const [confirmPassword, confirmPasswordError] = useState('');
    const [check, unCheck] = useState(true);
    const [imag, changeImage] = useState(false);
    const [register, setregister] = useState(true);
    const navigation = useNavigation();


    const passwordValidation = () => {
        if (password === confirmPassword && password.length != 0) {
            return true;
        }
        else {
            return false;
        }
    }

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
    change = () => {
        setHidePass(!hidePass)
        setImage(!image);
    };

    change1 = () => {
        setHidePass(!hidePass)
        setImage(!image);
    }


    const img = image ? eye : hide;

    const img1 = imag ? tic : circle;

    onchangeCheck = () => {
        unCheck(!check)
        changeImage(!imag)
        setregister(!register)
    }
    return (
        <SafeAreaView style={styles.parent}>

            <Image style={styles.img} source={require('./src/assets/icLoginBg_2022-03-24/icLoginBg.png')} />

            <View style={styles.inner}>
                <Text style={styles.logintext}>{'Register'}</Text>
                <Text style={styles.detailstext}>{'Enter your details to continue'}</Text>
            </View>
            <View style={styles.password}>
                <Text>{'Name'}</Text>
                <TextInput
                // placeholder={'Name'}
                />
            </View>


            <View style={styles.password}>
                <Text>{'Email'}</Text>
                <TextInput
                    // placeholder='Email'
                    autoCapitalize='none'
                    value={email}
                    autoCorrect={false}
                    onChangeText={value => {
                        setEmail(value);
                        handleValidEmail(value);
                    }}
                />
            </View>

            {emailValidError ? <Text style={{ padding: 10, color: 'red', paddingLeft: 30 }}>{emailValidError}</Text> : null}

            <View style={styles.password}>
                <Text>{'Password'}</Text>
                {/* <Text style={styles.emailplaceholder}>{'Password'}</Text> */}
                <TextInput
                    value={password}
                    // placeholder='Password'
                    secureTextEntry={hidePass ? true : false}
                    onChangeText={(value) => {
                        passwordError(value)
                    }}
                />

                <TouchableOpacity style={styles.eyeimagetouch} onPress={change}>
                    <Image source={img} style={{ height: 20, width: 20 }} />
                </TouchableOpacity>
            </View>

            <View style={styles.password}>
                <Text>{' Confirm Password'}</Text>
                <TextInput
                    value={confirmPassword}
                    // placeholder='Confirm Password'
                    secureTextEntry={hidePass ? true : false}
                    onChangeText={(value) => {
                        confirmPasswordError(value);
                    }}
                />
                <TouchableOpacity style={styles.eyeimagetouch} onPress={change1}>
                    <Image source={img} style={{ height: 20, width: 20 }} />
                </TouchableOpacity>
            </View>
            <Text style={{ paddingHorizontal: 10, color: 'red', paddingLeft: 30 }}>{passError ? passError : ' '}</Text>
            <View style={styles.forget}>
                <TouchableOpacity onPress={onchangeCheck}>
                    <Image source={img1} style={{ height: 20, width: 20, resizeMode: 'contain', marginRight: 5 }} />
                </TouchableOpacity>
                <Text style={styles.textforget}>{'Agree to terms of Service & Privacy Policy'}</Text>
            </View>

            <View>
                <TouchableOpacity disabled={register} onPress={() => { passwordValidation() ? setPassError(' ') : setPassError('Password must match') }} style={styles.login}>

                    <Text style={styles.loginbutton}>{'REGISTER'}</Text>

                </TouchableOpacity>
            </View>

            <View style={styles.reg}>
                <TouchableOpacity>

                    <Text style={styles.footer}>{'Already have an account?'}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('Login')}}>
                    <Text style={styles.secondfooter}>{'Login'}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    )
}

export default Login
const styles = StyleSheet.create({
    parent: {
        flex: 1
    },
    inner: {
        marginTop: '30%',
        paddingLeft: 30
    },
    logintext: {
        fontWeight: 'bold', fontSize: 30
    },
    detailstext: {
        color: 'grey', marginTop: 15
    },
    emailplaceholder: {
        color: 'grey'
    },
    eyeimagetouch: {
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
        marginTop: 15,
        paddingTop: 10,
    },
    forget: {
        marginBottom: 10,
        color: 'grey',
        paddingRight: 20,
        alignItems: 'center',
        flexDirection: 'row',
        // marginHorizontal: 45,

        justifyContent: 'center',
    },
    textforget: {
        color: 'grey', fontWeight: '400',
        flexDirection: 'row',
        marginTop: 5
    },
    login: {
        backgroundColor: '#fee7a4',
        alignItems: 'center',
        padding: 20,
        marginHorizontal: 40,
        marginVertical: 5,
        borderRadius: 10
    },
    loginbutton: {
        fontWeight: 'bold', fontSize: 15,
    },
    reg: {
        alignItems: 'center',
        // position: 'absolute',
        // bottom: '5%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    footer: {
        fontSize: 20
    },
    secondfooter: {
        fontSize: 25, fontWeight: 'bold'
    },
    img: {
        height: '28%',
        width: '100%',
        position: 'absolute',

    }


})