import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import IconeIonicons from 'react-native-vector-icons/Ionicons';
import IconeFoundation from 'react-native-vector-icons/Foundation';

const Conversation = ({ d, onClose }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => onClose(null)}>
          <IconeIonicons name='arrow-back' size={20} style={styles.color} />
        </TouchableOpacity>
        <Image style={styles.image} source={d.pp}/>
        <Text style={styles.text_header}>{d.name}</Text>
      </View>
      <View style={styles.conversation}></View>
      <View style={styles.input}>
        <View style={styles.media}>
          <TouchableOpacity style={styles.icon}>
            <IconeFoundation name='photo' size={24} style={styles.color_media} />
          </TouchableOpacity>
          <TouchableOpacity>
            <IconeIonicons name='camera' size={24} style={styles.color_media} />
          </TouchableOpacity>
        </View>
        <TextInput style={styles.champs} placeholder='' multiline={true} />
        <TouchableOpacity style={styles.send}>
          <IconeIonicons name='send' size={12} style={styles.color} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: 'white',
    width:'100%'
  },
  header: {
    height: 50,
    backgroundColor: '#7A4D09',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginLeft: 10,
    marginRight: 10,
  },
  text_header: {
    fontSize: 20,
    color: 'white',
    marginLeft:-5
  },
  conversation: {
    flex: 1,
    backgroundColor: 'white',
  },
  input: {
    flexDirection: 'row',
    borderWidth: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    borderColor: '#ABA9A9',
    height: 50,
  },
  champs: {
    flex: 1,
    height: '65%',
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 10,
    borderColor: '#ABA9A9',
    borderWidth: 1,
    paddingLeft:10,
    color:'#7A4D09'
  },
  media: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  send: {
    width: 35,
    height: 35,
    borderRadius: 25,
    backgroundColor: '#DE9F42',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  color: {
    color: 'white',
  },
  color_media: {
    color: '#ABA9A9',
  },
  icon: {
    marginRight: 5,
    marginLeft: 5
  },
  image: {
    width: 40,
    height: 40,
    backgroundColor: '#ABA9A9',
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 20,
  },
});

export default Conversation;
