import { View, Text, Pressable, Image, Modal, StyleSheet, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import StoreHeader from '../components/StoreHeader';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TextInput } from 'react-native-paper';
import IconeFontisto from 'react-native-vector-icons/Fontisto';
import IconeIonicons from 'react-native-vector-icons/Ionicons';
import { doc, getDoc, auth, db, collection, query, where, getDocs } from '../firebase/config.js';

const Account = ({ route, navigation }) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState();
  const [showPicker, setShowPicker] = useState(false);
  const [details, setDetails] = useState(false);
  const [formattedDate, setFormattedDate] = useState('--/--/----');
  const [formattedTime, setFormattedTime] = useState('--:--');
  const [servicesData, setServicesData] = useState([]);
  const { id } = route.params;

  const getServices = async () => {
    try {
      const q = query(collection(db, 'services'), where('id_prestataire', '==', id));
      const querySnapshot = await getDocs(q);
      const services = [];
      querySnapshot.forEach((doc) => {
        const { service, description, image, cost, id_prestataire } = doc.data();
        const limitLength = description.length > 40 ? description.substring(0, 40) + '...' : description;
        services.push({ id: id_prestataire, name: service, description: limitLength, image: image, price: cost });
      });
      return services;
    } catch (error) {
      console.error(error);
    }
  };

  const printData = async () => {
    const services = await getServices();
    setServicesData(services);
  };

  useEffect(() => {
    printData();
  }, []);

  const handleVisible = () => {
    setDetails(!details);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(false);
    setDate(currentDate);

    if (mode === 'date') {
      const formattedDate = currentDate.toLocaleDateString();
      setFormattedDate(formattedDate);
    } else if (mode === 'time') {
      const hours = currentDate.getHours().toString().padStart(2, '0');
      const minutes = currentDate.getMinutes().toString().padStart(2, '0');
      const formattedTime = `${hours}:${minutes}`;
      setFormattedTime(formattedTime);
    }
  };

  const dateShower = () => {
    setMode('date');
    setShowPicker(true);
  };

  const timeShower = () => {
    setMode('time');
    setShowPicker(true);
  };

  return (
    <View>
      <ScrollView>
        <StoreHeader route={route} navigation={navigation} />
        {servicesData.map((data) => (
          <View key={data.id} style={styles.Card}>
            <Image style={styles.image} source={{ uri: data.image }} />
            <View style={styles.flex}>
              <View>
                <Text style={styles.title}>{data.name}</Text>
                <Text style={styles.text}>{data.description}</Text>
              </View>
              <View style={styles.space}>
                <Text style={styles.price}>{data.price} XOF</Text>
                <Pressable style={styles.bouton} onPress={handleVisible}>
                  <Text style={styles.value}>Réserver</Text>
                </Pressable>
              </View>
              <Modal animationType='fade' transparent={true} visible={details}>
                {details && (
                  <View style={styles.background}>
                    <View style={styles.box}>
                      <Text style={styles.titre}>Réservation</Text>
                      <View style={styles.all_input}>
                        <TextInput disabled={true} style={styles.input}><Text style={styles.details}>{data.name}</Text></TextInput>
                        <TextInput disabled={true} style={styles.input}><Text style={styles.details}>{data.description}</Text></TextInput>
                        <TextInput disabled={true} style={styles.input}><Text style={styles.details}>{data.price}</Text></TextInput>
                        <View style={styles.date}>
                          <Pressable style={styles.inputs} onPress={dateShower}>
                            <TextInput disabled={true} style={styles.last}><Text style={styles.day}><IconeFontisto name='date' size={16} /> {formattedDate}</Text></TextInput>
                          </Pressable>
                          <Pressable style={styles.inputs} onPress={timeShower}>
                            <TextInput disabled={true} style={styles.last}><Text style={styles.day}><IconeIonicons name='time-outline' size={14} /> {formattedTime}</Text></TextInput>
                          </Pressable>
                        </View>
                      </View>
                      <View style={styles.bouttons}>
                        <Pressable style={styles.btn_cancel} onPress={handleVisible}>
                          <Text style={styles.text_btn}>Retour</Text>
                        </Pressable>
                        <Pressable style={styles.btn_valid} onPress={handleVisible}>
                          <Text style={styles.text_btn}>Valider</Text>
                        </Pressable>
                      </View>
                    </View>
                  </View>
                )}
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
  );
};

const styles = StyleSheet.create({
  Card: {
    marginTop: 5,
    borderBottomWidth: 1,
    borderColor: "#ABA9A9",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingBottom: 10
  },
  title: {
    fontSize: 18,
    fontWeight: "400",
  },
  text: {
    color: "#ABA9A9",
    fontSize: 12,
    width: 150
  },
  bouton: {
    backgroundColor: '#47300D',
    width: 100,
    height: 20,
    color: "#fff",
    borderRadius: 8,
    textAlign: "center",
    alignItems: "center",
    justifyContent: 'center'
  },
  price: {
    color: "#47300D",
    fontSize: 16
  },
  image: {
    height: 60,
    width: 70,
    borderRadius: 8,
    marginLeft: 20,
    backgroundColor: '#ABA9A9'
  },
  value: {
    color: "#fff",
    fontSize: 12
  },
  flex: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
    width: 280
  },
  space: {
    justifyContent: "space-evenly",
    width: '30%',
    alignItems: 'center'
  },
  dateTimePicker: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: '#C5C5C5',
    borderWidth: 1,
    marginVertical: 10,
    height: 43,
  },
  background: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  box: {
    width: '90%',
    height: '40%',
    backgroundColor: 'white',
    alignItems: 'center'
  },
  titre: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 15,
    color: '#47300D'
  },
  all_input: {
    width: '80%',
    marginTop: 10,
    marginBottom: 10
  },
  date: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  input: {
    borderWidth: 1,
    backgroundColor: '#fff',
    height: 40,
    borderColor: "#D9D9D9",
    marginTop: 10,
    borderRadius: 10
  },
  last: {
    backgroundColor: '#fff',
    height: 40,
    borderColor: "#D9D9D9",
    borderRadius: 10,
    alignItems: 'center',
  },
  inputs: {
    borderWidth: 1,
    backgroundColor: '#fff',
    height: 40,
    borderColor: "#D9D9D9",
    marginTop: 5,
    borderRadius: 10,
    width: 140,
  },
  bouttons: {
    width: 200,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: '10%'
  },
  btn_cancel: {
    width: '45%',
    backgroundColor: 'orange'
  },
  btn_valid: {
    width: '45%',
    backgroundColor: 'grey',
  },
  text_btn: {
    color: 'white',
    textAlign: 'center',
    alignContent: 'center',
    marginTop: 5
  },
  day: {
    alignContent: 'center',
    textAlign: 'center',
    marginTop: 10,
    color: '#47300D',
    width: '100%',
  },
  details: {
    marginTop: 10,
    marginLeft: 10,
    color: '#47300D'
  }
});

export default Account;
