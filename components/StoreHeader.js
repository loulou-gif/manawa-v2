import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const StoreHeader = ({navigation}) => {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/images/background/background.png")}/>
      <View style={styles.bottom}>
        <View style={styles.flex}>
            <Image source={require('../assets/images/Profils/p8.png')} />
            <View styles={styles.text}>
                <Text style={styles.title}>Salon de coiffure</Text>
                <Text style={styles.state}>Ouvert (09:00 - 20:30)</Text>
            </View>
        </View>
        <View style={styles.flex} >
            <Text style={styles.cursor} onPress={() => navigation.navigate('Account')} >Services</Text>
            <Text style={styles.menu} onPress={() => navigation.navigate('Aperçu')}>Aperçu</Text>
            <Text style={styles.menu} onPress={() => navigation.navigate('Avis')}>Avis</Text>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:126,
        backgroundColor:'#ABA9A9'
    },
    state:{
        color:"green",
        fontSize:12,
    },
    title:{
        fontSize:20,
    },
    flex:{
        flexDirection: "row",
        justifyContent:"space-evenly",
        width:250,
        marginTop:15,
        marginBottom:5,
    },
    bottom:{
        borderBottomWidth: 1,
        borderBlockColor:'#ABA9A9',
    },
    text:{
        marginBottom:50,
    },
    menu:{
        fontSize:16,
    },
    menuMain:{
        fontSize:16,
        color:"#DE9F42"
    },
    cursor:{
        fontSize:16,
        color:"#DE9F42",
    }
})

export default StoreHeader