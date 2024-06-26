import { View, Text, StyleSheet , ScrollView, Pressable, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import {doc, getDoc, auth, db,  collection, query, where, getDocs } from '../firebase/config.js'



const Prest = ({navigation}) => {
  const [prestData, setPrestData] = useState([]);
  const getPrestataire = async() =>{
    try{
      const q = query(collection(db,'Store'))
      const querySnapshot = await getDocs(q)
      const  prest = []
      querySnapshot.forEach((doc) => {
        const {name, description, logoUri, closingTime, openingTime, id_prestataire} = doc.data()
        const limitLength = description.length > 50 ? description.substring(0, 50) + '...' : description;
        prest.push({id: id_prestataire, name: name, description: limitLength, logo: logoUri, ouverture: openingTime, fermeture: closingTime})
      })
      return prest
    }catch(error){

    }
  }
  const printData = async () => {
    const prest = await getPrestataire();
    setPrestData(prest);
}

  console.log(prestData)

  useEffect(() => {
      printData();
  }, []);
  return (
    <View style={styles.all}>
     <View style={styles.container}>
        {prestData.map((data) => ( 
          <Pressable key={data.id} onPress={() => navigation.push('Account', {id: data.id})}>
            <View style={styles.item}>  
              <Image style={styles.image} source={{uri: data.logo}}/>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{data.name ? data.name : "Nom du store"} {console.log(data.id)} </Text> 
                {/* Utilisation de la condition pour afficher name ou title */}
                <Text style={styles.description}>{data.description} </Text>
              </View> 
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    // all:{
    //     marginTop: -110,
    // },
    container: {
      marginTop: 20,
    },
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#E5E5E5',
    },
    image: {
      width: 70,
      height: 70,
      borderRadius: 8,
      backgroundColor:'#ABA9A9'
    },
    textContainer: {
      marginLeft: 10,
    },
    title: {
      fontSize: 16,
      color: 'black',
    },
    description: {
      fontSize: 12,
      color: '#ABA9A9',
      width: 250,
    },
  });

export default Prest