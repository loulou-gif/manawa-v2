import { View, Text, Pressable, Image, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import  Header  from '../components/Header'
// import SearchBar from '../components/SearchBar'
import StoreHeader from '../components/StoreHeader'
import { product } from '../data/Product'
import DateTimePicker from '@react-native-community/datetimepicker';
import Message from '../components/Message'
import {doc, getDoc, auth, db,  collection, query, where, getDocs } from '../firebase/config.js'

const Accounts = ({route, navigation}) => {
  const [date, setDate] = useState(new Date())
  const [showPicker, setShowPicker] = useState(false)
  const {id} = route.params;
  FilterData = product.filter((data) => data.id_store === id)
  

  const onChange = (event, updateDate) =>{
    const currentDate = updateDate || date;
    setShowPicker(false),
    setDate(currentDate)
  }
  console.log(id)
  const showDataPicker =()=>{
    setShowPicker(true)
  }
  return (
    <View>  
      {/* <Header/> */}
      <ScrollView>
      <StoreHeader route={route} id={id} navigation={navigation}/>
      {FilterData.map((data)=> (
        <View key={data.id} style={styles.Card} >
          <Image style={styles.image} source={data.image}/>
          <View style={styles.flex} >
            <View >
              <Text style={styles.title}>{data.name} </Text>
              <Text style={styles.text}>{data.description}</Text>
            </View>
            <View style={styles.space} >
              <Text  style={styles.price}>{data.price}</Text>
              <Pressable style={styles.bouton} onPress={showDataPicker}>
                <Text style={styles.value} >Réserver</Text>
              </Pressable>
            </View>
            {showPicker && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode="date"
                is24Hour={true}
                display="default"
                onChange={onChange}
                style={styles.dateTimePicker}
              />
            )}
          </View>
        </View>
      ))}
      </ScrollView>
      <Message navigation={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({
  Card:{
    marginTop:5,
    borderBottomWidth:1,
    borderColor:"#ABA9A9",
    flexDirection: "row",
    flexWrap:"wrap",
    marginTop:10,
    paddingBottom:10
  },
  title:{
    fontSize:18,
    fontWeight:"400",
  },
  text:{
    color:"#ABA9A9",
    fontSize:12,
    width:150
  },
  bouton:{
    backgroundColor:'#47300D',
    width:100,
    height:20,
    color:"#fff",
    borderRadius:8,
    textAlign:"center",
    alignItems:"center"
  },
  price:{
    color:"#47300D",
    fontSize:16
  },
  image:{
    height:70,
    width:70,
    borderRadius:8,
    marginLeft:20
  },
  value:{
    textAlign:"center",
    color:"#fff",
    fontSize:12
  },
  flex:{
    flexDirection: "row",
    flexWrap:"wrap",
    justifyContent:"space-between",
    marginLeft: 20,
    marginRight:20,
    width: 280
  },
  space:{
    justifyContent:"space-evenly",
  },
  dateTimePicker: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: '#C5C5C5',
    borderWidth: 1,
    marginVertical: 10,
    height: 43,
   },
})

export default Accounts