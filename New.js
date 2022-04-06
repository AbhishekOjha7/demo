import {
    FlatList,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, {useRef, useState} from 'react';
  
  export default function StudentList() {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailValidError, setEmailValidError] = useState('');
    const [nameValidError, setNameValidError] = useState('');
    const [list, setList] = useState([]);
    const [object, setObject] = useState({});
    const [disabled1, setDisabled1] = useState(true);
    const [disabled2, setDisabled2] = useState(true);
    const [forEdit, setForEdit] = useState(false);
    const [button, setButton] = useState('Add Details');
  
    const flatlist = useRef();

    const handleValidName = () => {
      let reg1 = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
      reg1.test(name) ? setDisabled1(false) : setDisabled1(true);
      return reg1.test(name);
    };
  const handleValidEmail = () => {
      let reg = /^\w+([\.-]?\w+)*@[a-z]+mail*(\.\w+)+$/;
      reg.test(email) ? setDisabled2(false) : setDisabled2(true);
      return reg.test(email);
    };
  
    const addEntry = () => {
      if (forEdit) {
        let i = list.findIndex(id => id == object);
        list.splice(i, 1);
        setList([...list]);
        setObject({});
        setButton('Add Details');
        setForEdit(false);
      }

      let x = list.map(item => item.stemail == email);
      if (!x.includes(true)) {
        setList([...list, {stname: name, stemail: email}]);
        flatlist.current.scrollToEnd();
        setEmail('');
        setName('');
        setDisabled1(true);
        setDisabled2(true);
      }
      else{
        setEmailValidError('\u26A0 Email Already Exists')
      }
    };
  
    const editCard = (edName, edEmail) => {
      setButton('Update Details');
      setName(edName);
      setEmail(edEmail);
      setForEdit(true);
      setObject({stname: edName, stemail: edEmail});
      setDisabled1(false);
      setDisabled2(false);
    };
  
    const deleteEntry = i => {
      list.splice(i, 1);
      setList([...list]);
    };
  
    return (
      <SafeAreaView style={styles.parentContainer}>
        {/* Fixed Section */}
        <Text style={styles.headingFixed}>Form</Text>
        <View style={styles.containerFixed}>
          <TextInput
            style={styles.nameInput}
            value={name}
            placeholder="Name"
            autoCapitalize="none"
            onChangeText={value => {
              setName(value);
              handleValidName()
                ? setNameValidError(' ')
                : setNameValidError('\u26A0 Enter Valid Name');
            }}
          />
          <Text style={styles.alert}>{nameValidError}</Text>
          <TextInput
            style={styles.emailInput}
            value={email}
            placeholder="Email"
            autoCapitalize="none"
            onChangeText={value => {
              setEmail(value);
              handleValidEmail()
                ? setEmailValidError(' ')
                : setEmailValidError('\u26A0 Enter Valid Email');
            }}
          />
          <Text style={styles.alert}>{emailValidError}</Text>
          {/* {check} */}
          <TouchableOpacity
            style={styles.addItem}
            activeOpacity={0.6}
            disabled={disabled1 || disabled2}
            onPress={addEntry}>
            <Text>{button}</Text>
          </TouchableOpacity>
        </View>
  
        {/* List section */}
        <View style={styles.containerList}>
          <View style={styles.listHeading}>
            <Text style={styles.listHead}>{'Student List'}</Text>
          </View>
          <FlatList
            ref={flatlist}
            data={list}
            renderItem={({item, index}) => {
              return (
                <View style={styles.card}>
                  <Text style={styles.cardtext}>Name: {item.stname}</Text>
                  <Text style={styles.cardtext}>Email: {item.stemail}</Text>
                  <TouchableOpacity
                    onPress={() => {
                      let index = list.findIndex(ele => (ele == item));
                      deleteEntry(index);
                    }}
                    style={styles.delete}>
                  <Image style={styles.deleteIcon} source={require('./src/assets/images/delete.png')}/>
                    {/* <Text style={styles.deleteIcon}>{'\u2716'}</Text> */}
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      editCard(item.stname, item.stemail);
                    }}
                    style={styles.edit}>
                    <Image style={styles.editIcon} source={require('./src/assets/images/edit.png')}/>
                    {/* <Text style={styles.deleteIcon}>{'\u270E'}</Text> */}
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    parentContainer: {
      flex: 1,
      backgroundColor: '#111111',
      alignItems: 'center',
    },
    containerFixed: {
      flex: 0.25,
      marginTop: '1%',
      width: '95%',
      backgroundColor: '#222222',
      alignSelf: 'center',
      alignItems: 'center',
      paddingVertical: '3%',
      borderWidth: 2,
      borderRadius: 15,
      marginHorizontal: '2%',
      borderColor: '#51C4D3',
      shadowColor: '#51C4D3',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.45,
      shadowRadius: 6.84,
      elevation: 5,
    },
    headingFixed: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 24,
      fontFamily: 'HoeflerText-Black',
      textDecorationLine: 'underline',
      width: '40%',
      paddingVertical: '2%',
      marginVertical: '2%',
      color: '#51C4D3',
      // backgroundColor: '#345B63',
      shadowColor: '#51C4D3',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.45,
      shadowRadius: 6.84,
      elevation: 5,
    },
    nameInput: {
      width: '65%',
      borderWidth: 1,
      borderRadius: 5,
      marginTop: '2%',
      padding: '2%',
      backgroundColor: '#aaaaaa',
    },
    emailInput: {
      width: '65%',
      borderWidth: 1,
      borderRadius: 5,
      marginTop: '2%',
      padding: '2%',
      backgroundColor: '#aaaaaa',
    },
    alert: {
      color: '#ff0000',
      fontWeight: '600',
      height: '10%',
    },
    addItem: {
      backgroundColor: '#35858B',
      padding: 10,
      borderRadius: 5,
      borderWidth: 2,
      borderColor: '#ffffff88',
    },
    containerList: {
      flex: 0.75,
      width: '95%',
      backgroundColor: '#51C4D366',
      marginTop: '3%',
      borderRadius: 15,
      borderColor: '#51C4D377',
      borderWidth: 2,
    },
    listHead: {
      color: '#51C4D3',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 20,
      fontFamily: 'HoeflerText-Black',
      marginVertical: '3%',
      textDecorationLine: 'underline',
      shadowColor: '#51C4D3',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.45,
      shadowRadius: 6.84,
      elevation: 5,
    },
    card: {
      backgroundColor: '#222222',
      margin: '1%',
      padding: '4%',
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
    delete: {
      width: '6%',
      height: '55%',
      position: 'absolute',
      right: '2%',
      top: '25%',
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent:'center',
      borderRadius: 10,
    },
    deleteIcon: {
      height: '60%',
      width: '60%',
    },
    edit: {
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
    editIcon: {
      height: '60%',
      width: '60%',
    },
    cardtext: {
      color: '#D8E3E7',
      fontWeight: '600',
    },
  });
  