import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, FlatList, Alert, Image } from 'react-native'
import React, { useState, useRef } from 'react'



const Form = () => {
    const [name, setName] = useState('');
    const [nameValidError, setNameValidError] = useState('');
    const [email, setEmail] = useState('');
    const [emailValidError, setEmailValidError] = useState('');
    const [data, newData] = useState([]);
    const [diabled1, setDisabled1] = useState(true);
    const [disabled2, setDisabled2] = useState(true);
    const [button, setButton] = useState('Add Details');
    const [index,setIndex]=useState(-1);
    const refindex = useRef()
    handleValidName = () => {
        let reg1 = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        reg1.test(name) ? setDisabled1(false) : setDisabled1(true);
        return reg1.test(name);
    };

    const handleValidEmail = () => {
        let reg = /^\w+([\.-]?\w+)*@[a-z]+mail*(\.\w\w+)+$/;
        reg.test(email) ? setDisabled2(false) : setDisabled2(true);
        return reg.test(email);
    };

    const add = () => {
         if(button=='Add Details'){
            if (data.length > 0) {
                let i = data.findIndex((e) => {
                    return (e.email == email)
    
                })
                if (i < 0) {
                    newData([...data, { name: name, email: email }])
                    refindex.current.scrollToEnd();
                    setName('');
                    setEmail('');
                    // setDisabled1(true);
                    // setDisabled2(true);
    
                }
                else {
                    Alert.alert("email already exist")
                }
            }
            else {
                newData([{ name: name, email: email }])
                setName('');
                setEmail('');
                setDisabled1(true);
                setDisabled2(true);
    
            }
         }
         else{
             data[index].name=name;
             data[index].email=email;
             setButton('Add Details')
             setName('');
             setEmail('');
           
         }
        


        //  newData([...data, { name: name, email: email }])

    }


    

   

    const deleteEntry = (i) => {
        data.splice(i, 1);
        newData([...data]);
    }
    return (
        <SafeAreaView style={styles.parent}>
            <Text style={styles.head}>Form</Text>
            <View style={styles.child}>

                <TextInput
                    style={styles.inner}
                    value={name}
                    placeholder="Name"
                    autoCapitalize='none'
                    onChangeText={value => {
                        setName(value);
                        handleValidName() ? setNameValidError(' ') : setNameValidError('\u26A0 Enter Valid Name');
                    }}
                />
                <Text style={styles.nameerror}>{nameValidError}</Text>

                <TextInput
                    style={styles.emailInput}
                    value={email}
                    placeholder="Email"
                    autoCapitalize='none'
                    onChangeText={value => {
                        setEmail(value);
                        handleValidEmail()
                            ? setEmailValidError(' ')
                            : setEmailValidError('Enter Valid Email');
                    }}
                />
                <Text style={styles.emailerror}>{emailValidError}</Text>
                <TouchableOpacity
                    style={styles.adddetails}
                    disabled={diabled1 || disabled2}
                    onPress={add}>
                    <Text style={styles.button}>{button}</Text>
                </TouchableOpacity>
            </View>



            <View style={styles.studentlist}>
                <View>
                    <Text style={styles.childstudent}>{'Student List'}</Text>
                </View>

                <FlatList
                    ref={refindex}
                    data={data}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.card}>
                                <Text style={styles.namedesign}>Name:{item.name}</Text>
                                <Text style={styles.emaildesign}>Email:{item.email}</Text>
                                <TouchableOpacity
                                    onPress={() => {
                                        deleteEntry({ index });
                                    }}
                                    style={styles.delete}>
                                    <Image style={styles.deleteicon} source={require('./src/assets/icLoginBg_2022-03-24/delete.png')} />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={()=>{
                                    let i=data.findIndex(ele=>ele==item)
                                    setIndex(i);
                                  setButton('update details')
                                  setName(data[i].name);
                                  setEmail(data[i].email);
                                  setDisabled1(false);
                                  setDisabled2(false)
                                }} style={styles.edit}>
                                    <Image style={styles.editicon} source={require('./src/assets/icLoginBg_2022-03-24/edit.png')} /> 
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />
            </View>
        </SafeAreaView>

    )
}

export default Form
const styles = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: '#203239'
    },
    child: {
        flex: 0.30,
        backgroundColor: '#9ADCFF',
        alignItems: 'center',
        paddingVertical: '3%',
        borderWidth: 1,
        borderRadius: 20
    },
    head: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        color: '#EEEDDE',
        textDecorationLine: 'underline',
        shadowColor: '#51C4D3',
        marginBottom: 10,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.45,
        shadowRadius: 6.84,
        elevation: 5,

    },
    inner: {
        width: '65%',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: '2%',
        padding: '2%',
    },
    nameerror: {
        color: '#ff0000',
        fontWeight: '600',
        height: '10%',
    },
    emailInput: {
        width: '65%',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: '2%',
        padding: '2%',
    },
    emailerror:
    {
        color: '#ff0000',
        fontWeight: '600',
        height: '10%',
    },
    adddetails: {
        backgroundColor: '#FFF89A',
        padding: 10,
        marginTop: 10,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.45,
        shadowRadius: 6.84,
        elevation: 5,
        borderRadius: 10
    },
    studentlist: {
        flex: 0.7,
        backgroundColor: '#FFE4C0',
        marginTop: '3%',

        borderWidth: 2,

    },
    button: {
        fontSize: 20, justifyContent: 'center', textAlign: 'center',

    },
    childstudent: {
        justifyContent: 'center', alignSelf: 'center',
        fontSize: 30,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.45,
        shadowRadius: 6.84,
        elevation: 5,
        textDecorationLine: 'underline'
    },
    card: {
        backgroundColor: '#FFBBBB',
        margin: '1%',
        padding: '2%',
        borderColor: '#51C4D3aa',
        borderWidth: 2,
        borderRadius: 10,
        shadowColor: '#51C4D3',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4.84,

        elevation: 5,

    },
    namedesign: {

    },
    emaildesign: {

    },
    delete: {
        width: '6%',
        height: '55%',
        position: 'absolute',
        right: '2%',
        top: '25%',
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    deleteicon: {
        height: '60%',
        width: '60%',
    },
    edit:{
        width: '6%',
    height: '60%',
    backgroundColor: '#51C4D3',
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 10,
    position: 'absolute',
    right: '10%',
    top: '25%',
    },
    editicon:{
        height: '60%',
        width: '60%',
    }



})