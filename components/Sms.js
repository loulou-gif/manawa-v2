import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {sms} from '../data/sms';

const Sms = () => {
  return (
    <View>
      {sms.map((d) =>(
        <TouchableOpacity key={d.id} style={styles.card}>
            <Image style={styles.image} source={d.pp} ></Image>
            <View style={styles.info}>
                <Text style={styles.name}>{d.name}</Text>
                <Text style={styles.message}>{d.text}</Text>
            </View>
      </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
    card:{
        borderColor:'#ABA9A9',
        borderBottomWidth:1,
        flexDirection:'row',
        height:80,
        alignItems:'center'
    },
    image:{
        width:50,
        height:50,
        backgroundColor:'#DE9F42',
        borderRadius:25,
        marginLeft:10,
        marginRight:10
    },
    name:{
        fontSize:16,
        color:'#47300D',
    },
    message:{
        fontSize:14,
        color:'#ABA9A9',
    },
})

export default Sms