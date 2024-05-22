import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { sms } from '../data/sms';

// Fonction pour tronquer le texte
const truncateText = (text, length) => {
  return text.length > length ? text.substring(0, length) + '...' : text;
};

const Sms = () => {
  return (
    <View>
      {sms.map((d) => (
        <TouchableOpacity key={d.id} style={styles.card}>
          <Image style={styles.image} source={d.pp} />
          <View style={styles.info}>
            <Text style={styles.name}>{d.name}</Text>
            <Text style={styles.message}>{truncateText(d.text, 50)}</Text>
          </View>
          <View style={styles.time_box}>
            <Text style={styles.time}>{d.time}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderColor: '#ABA9A9',
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 80,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: '#ABA9A9',
    borderRadius: 25,
    marginLeft: 20,
    marginRight: 20,
  },
  name: {
    fontSize: 16,
    color: '#47300D',
  },
  message: {
    fontSize: 14,
    color: '#ABA9A9',
  },
  time_box: {
    width: 80,
    alignItems: 'center',
    height: 40,
    justifyContent: 'flex-end',
  },
  time: {
    fontSize: 12,
    color: '#ABA9A9',
  },
  info: {
    flex: 1, // to take up the remaining space in the row
  },
});

export default Sms;
