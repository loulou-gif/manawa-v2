// Signup.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, TextInput, Pressable, TouchableOpacity, Modal, ScrollView } from 'react-native';
import IndicatorSearch from '../components/indicatorSearch.js';
import {app, auth, createUserWithEmailAndPassword} from '../firebase/config.js'
// import Recaptcha from 'react-native-recaptcha-v3';
import { scale, verticalScale } from 'react-native-size-matters';

const Signup = ({navigation}) => {
  const image = require("../assets/images/background/second.png");
  
  const [phone, setPhone] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signup = async () =>{
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Message: User has been created successfully');
      navigation.push('Login');
    } catch (error) {
      setErrorMessage(error.message);
      console.error('Error: ', error);
    }
  }

  const handleVisible =()=> {
    setPhone(!phone)
  }
  return (
    <View style={styles.Card}>
      <ImageBackground source={image} style={styles.background} resizeMode="cover">
        <View style={styles.display} >
          <View style={styles.header}>
            <Text style={styles.inscriptionColor}>INSCRIPTION</Text>
          </View>
        </View>
        <View style={styles.box_inputs}  >
            <View style={styles.input}>
              {/* <View style={styles.phone}>
                <TouchableOpacity onPress={handleVisible} style={styles.indicator}><Text style={styles.color}>+225</Text></TouchableOpacity>
                <TextInput style={styles.phone_input} keyboardType='phone-pad'/>
              </View> */}
              <View style={styles.phone}>
                <TextInput style={styles.phone_input} value={email} keyboardType='email-address' onChangeText={(text)=> setEmail(text)} placeholder='Email'/>
              </View>
              <View style={styles.phone}>
                <TextInput style={styles.phone_input} value={password} secureTextEntry={true} onChangeText={(text)=> setPassword(text)} placeholder='Mot de passe' />
              </View>
                <Pressable style={styles.buttons} onPress={signup}><Text style={styles.textButton}>S'INSCRIRE</Text></Pressable>
                
              <View style={styles.text}>
                <Text style={styles.p}>Déjà un compte?<Text onPress={() => navigation.navigate("Login")} style={styles.connexionColor}> Connectez-vous</Text></Text>
              </View>
            </View>
        </View>
        {/* <Modal animationType='fade' transparent={true} visible={phone}>
            <View style={styles.container}>
              <View style={styles.box}>
                  <IndicatorSearch/>
                  <ScrollView style={styles.indicators}>
                      <TouchableOpacity onPress={handleVisible} style={styles.indic}><Text >+225 Ivory Coast</Text></TouchableOpacity>
                  </ScrollView>
              </View>
            </View>
        </Modal> */}
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  h1:{
    fontSize: 26,
    fontWeight:"bold",
  },
  inscriptionColor:{
    color: "#fff",
    fontSize: scale(30),
    fontWeight:"bold",
  },
  connexionColor:{
    color: "#FFA012",
    fontSize: scale(16),
  },
  header:{
    // marginTop: 150,
    justifyContent:"center",
    // flexDirection:"row",
    width:verticalScale(260),
    height:scale(50),
    // borderWidth:1,
  },
  first_p:{
    width:330,
    height:37,
    fontSize:16,
    color:"#E5E5E5",
    marginTop:10,
  },
  p:{
    width:272,
    height:37,
    textAlign:"center",
    fontSize:scale(14), 
    color:"#E5E5E5",
    marginTop:10,
  },
  display:{
    alignItems:"center",
    marginTop:scale(-230)
  },
  text:{
    alignItems:"center",
    height:'auto',
    // borderWidth:1,
  },
  box_inputs:{
    alignItems:"center",
  },
  input:{
    // borderWidth:1,
    width:'100%',
    height:scale(50),
    // backgroundColor: "#E5E5E5",
    marginTop: scale(50),
    borderRadius: 8,
    marginBottom:scale(10),
  },
  inputs:{
    // borderWidth:1,
    width:330,
    height:50,
    backgroundColor: "#fff",
    // marginTop: 150,
    borderRadius: 8,
    marginBottom:10,
    paddingLeft: 20,
    marginBottom: 20
  },
  button:{
    // borderWidth:1,
    width:330,
    height:50,
    // backgroundColor: "#E5E5E5",
    marginTop: '5%',
    borderRadius: 8,
    marginBottom:10,
  },
  textButton:{
    color: "#fff",
    fontSize:scale(18)
  },
  buttons:{
    backgroundColor: "#DE9F42",
    height:scale(45),
    borderRadius:8,
    alignItems:'center',
    justifyContent:'center',
  },
  phone:{
    width:scale(300),
    height:scale(50),
    backgroundColor:'white',
    flexDirection:'row',
    // padding:5,
    // justifyContent:'center',
    alignItems:'center',
    borderRadius:8,
    marginBottom:'5%'
  },
  indicator:{
    width:scale(75),
    borderRightWidth:1,
    height:scale(40),
    borderColor:'#ABA9A9',
    justifyContent:'center',
    alignItems:'center'
  },
  phone_input:{
    width:'100%',
    height:scale(50),
    // borderWidth:1,
    paddingLeft:scale(10),
  },
  box:{
    width:'70%',
    height:'50%',
    backgroundColor:'white',
    borderRadius:5
  },
  container:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgba(0, 0, 0, 0.3)',
    height:'100%'
  },
  indicators:{
    width:'100%',
    height:scale(50),
    // borderWidth:1,
  },
  indic:{
    width:'100%',
    height:scale(50),
    borderBottomWidth:1,
    justifyContent:'center',
    paddingLeft:25,
    borderColor:'#ABA9A9',
  },
  color:{
    color:'#ABA9A9'
  },
  Card:{
    height:scale(740),
    width:scale(350)
  },
  background:{
    width:scale(350),
    height:scale(740),
    alignItems:'center',
    justifyContent:'center',
  }
})

export default Signup;
