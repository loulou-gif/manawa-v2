import { View, Text, Pressable, Image,Modal, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import  Header  from '../components/Header'
// import SearchBar from '../components/SearchBar'
import StoreHeader from '../components/StoreHeader'
import { product } from '../data/Product'
import DateTimePicker from '@react-native-community/datetimepicker';
import { TextInput } from 'react-native-paper'
import IconeFontisto from 'react-native-vector-icons/Fontisto'
import IconeIonicons from 'react-native-vector-icons/Ionicons'
const Account = ({route, navigation}) => {
  const [date, setDate] = useState(new Date())
  const [mode, setMode] = useState()
  const [showPicker, setShowPicker] = useState(false)
  const [details, setDetails] = useState(false)
  const {id} = route.params;
  FilterData = product.filter((data) => data.id_store === id)

  const handleVisible= () =>{
    setDetails(!details)
  }

  const onChange = (event, updateDate) =>{
    const currentDate = updateDate || date;
    setShowPicker(false),
    setDate(currentDate)
  }

  const dateShower =()=>{
    setMode('date')
    setShowPicker(true)
  }
  const timeShower =()=>{
    setMode('time')
    setShowPicker(true)
  }

  // const showDataPicker =()=>{
  //   setShowPicker(true)
  // }
  return (
    <View>  
      {/* <Header/> */}
      <ScrollView>
      <StoreHeader navigation={navigation}/>
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
              <Pressable style={styles.bouton} onPress={handleVisible}>
                <Text style={styles.value} >Réserver</Text>
              </Pressable>
            </View>
            <Modal animationType='fade' transparent={true} visible={details}>
               {details &&
                  <View style={styles.background}>
                    <View style={styles.box}>
                        <Text style={styles.titre}>Réservation</Text>
                        <View style={styles.all_input}>
                          <View style={styles.input} ><Text>{details.name}</Text></View>
                          <View style={styles.input} ><Text>{details.description}</Text></View>
                          <View style={styles.input} ><Text>{details.price}</Text></View>
                          <View style={styles.date}>  
                            <Pressable style={styles.inputs} onPress={dateShower} ><Text style={styles.day}><IconeFontisto name='date' size={16} /> 11/11/2111</Text></Pressable>
                            <Pressable style={styles.inputs} onPress={timeShower} ><Text style={styles.day}><IconeIonicons name='time-outline' size={16} style={{marginTop:50}}/> 11:11</Text></Pressable>
                          </View>
                          {/* <TextInput style={styles.input} value={date} onPressIn={showDataPicker}/> */}
                          {/* <TextInput value={}/> */}
                        </View>
                        <View style={styles.bouttons}>
                          <Pressable style={styles.btn_cancel} onPress={handleVisible}>
                            <Text style={styles.text_btn}>Retour</Text>
                          </Pressable >
                          <Pressable style={styles.btn_valid} onPress={handleVisible}>
                            <Text style={styles.text_btn}>Valider</Text>
                          </Pressable>
                        </View>
                    </View>
                  </View>
                }
            </Modal>
            {showPicker && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
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
   background:{
    alignItems:'center',
    justifyContent:'center',
    height:'100%',
    width:'100%',
    backgroundColor:'rgba(0,0,0,0.2)',
   },
   box:{
    width:'90%',
    height:'40%',
    backgroundColor:'white',
    alignItems:'center'
   },
   titre:{
    textAlign:'center',
    fontSize:25,
    marginTop:15
   },
   all_input:{
    width:'80%',
    marginTop:10,
    marginBottom:10
   },
   date:{
    flexDirection:'row',
    width:'100%',
    marginBottom:10,
    justifyContent:'space-between',
   },
   input:{
    borderWidth:1,
    backgroundColor:'#fff',
    height:40,
    borderColor:"#D9D9D9",
    marginTop:10,
    borderRadius:10
   },
   inputs:{
    borderWidth:1,
    backgroundColor:'#fff',
    height:40,
    borderColor:"#D9D9D9",
    marginTop:5,
    borderRadius:10,
    width:140,
   },
   bouttons:{
    // borderWidth:1,
    width:200,
    flexDirection:'row',
    justifyContent:'space-around',
    height:'10%'
   },
   btn_cancel:{
    // borderWidth:1,
    width:'45%',
    backgroundColor:'orange'    
   },
   btn_valid:{
    // borderWidth:1,
    width:'45%',
    backgroundColor:'grey' ,   
   },
   text_btn:{
    color:'white',
    textAlign:'center',
    alignContent:'center',
    marginTop:5
   },
   day:{
    alignContent:'center',
    textAlign:'center',
    marginTop:10,
    color:'#ABA9A9',
    width:'100%',
   }
})

export default Account