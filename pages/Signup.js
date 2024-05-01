import { View, Text,StyleSheet, Button, ImageBackground, TextInput, Pressable } from 'react-native'
import React from 'react'
import PhoneInput from "react-native-phone-number-input";
// import { Colors } from "react-native/Libraries/NewAppScreen";


const Signup = ({navigation}) => {
  const image = require("../assets/images/background/second.png");
  return (
    <View style={{}}>
      <ImageBackground source={image} style={{ width:"auto", height:900}} resizeMode="cover">
        <View style={styles.display} >
          <View style={styles.header}>
          <Text onPress={() => navigation.navigate("Signup")} style={styles.inscriptionColor}>Inscription |</Text><Text onPress={() => navigation.navigate("Login")} style={styles.connexionColor}>Connexion</Text></View>
        </View>
        <View style={styles.display}>
          <Text style={styles.p}>Eos suscipit nostrum in temporibus dolores ut natus saepe.</Text>
        </View>
        <View style={styles.display}  >
          <View style={styles.input}>
            <TextInput style={styles.inputs} placeholder='Nom de famille'/>
            <TextInput style={styles.inputs}  placeholder='Prénoms'/>
            <PhoneInput placeholder='' />            
          </View>
          <View style={styles.button}>
            {/* <Button title="SUIVANT" color="#DE9F42" onPress={() => navigation.navigate("Otpconnexion")} /> */}
            <Pressable style={styles.buttons} onPress={() => navigation.navigate("Otpcode")}><Text style={styles.textButton}>SUIVANT</Text></Pressable>
          </View>
        </View>
          
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
    color: "#FFA012",
    fontSize: 26,
    fontWeight:"bold",
  },
  connexionColor:{
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight:"bold",
  },
  header:{
    marginTop: 150,
    justifyContent:"space-around",
    flexDirection:"row",
    width:290,
    height:30,
  },
  p:{
    width:272,
    height:37,
    textAlign:"center",
    fontSize:16,
    color:"#E5E5E5",
    marginTop:10,
  },
  display:{
    alignItems:"center",
    // height:30,
  },
  input:{
    // borderWidth:1,
    width:330,
    height:50,
    // backgroundColor: "#E5E5E5",
    marginTop: 130,
    borderRadius: 8,
    marginBottom:10,
  },
  inputs:{
    // borderWidth:1,
    width:330,
    height:50,
    backgroundColor: "#fff",
    // marginTop: 150,
    // borderRadius: 8,
    marginBottom:10,
    paddingLeft: 20,
    marginBottom: 20
  },
  button:{
    // borderWidth:1,
    width:330,
    height:50,
    // backgroundColor: "#E5E5E5",
    marginTop: 160,
    borderRadius: 8,
    marginBottom:10,
  },
  textButton:{
    textAlign:"center",
    color: "#fff",
    alignItems:"center",
    alignContent:"center",
    flex:1,
    justifyContent:"center",
    margin:15
  },
  buttons:{
    backgroundColor: "#DE9F42",
    height:50
  }

})


export default Signup