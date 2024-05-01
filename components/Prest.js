import { View, Text, StyleSheet , ScrollView, Pressable, Image } from 'react-native'
import React from 'react'
import { Store } from '../data/Store.js';

const Prest = ({navigation, store}) => {
  return (
    <ScrollView style={styles.all}>
     <View style={styles.container}>
        {store.map((data) => ( 
          <Pressable key={data.id} onPress={() => navigation.push('Account', {id: data.id})}>
            <View style={styles.item}> 
              <Image style={styles.image} source={data.profil}/>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{data.name ? data.name : data.title}</Text> 
                {/* Utilisation de la condition pour afficher name ou title */}
                <Text style={styles.description}>{data.description}</Text>
              </View> 
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
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
