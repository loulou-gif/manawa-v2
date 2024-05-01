import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, Pressable, ScrollView } from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import { Store } from '../data/Store.js';
import Prest from '../components/Prest.js';


const Prestataire = ({navigation}) => {
//   const {id}= route.params;

  // Filtrer les données de Store en fonction de l'ID du service sélectionné
//   const filteredData = Store.filter((data) => data.id_service === id || data.id === data.id);
const [searchPhrase, setSearchPhrase] = useState("");

    // Fonction de gestion de la recherche
    const handleSearch = (text) => {
        setSearchPhrase(text);
    };

    // Fonction de filtrage
    const filterData = (data, searchTerm) => {
        return data.filter(item =>
            item.name && item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    // Données filtrées pour les services
    // const filteredServices = searchPhrase ? filterData(services, searchPhrase) : services;
    
    // Données filtrées pour les prestataires
    const filteredStore = searchPhrase ? filterData(Store, searchPhrase) : Store;

  return (
    <ScrollView>
      <Header/>
      <SearchBar searchPhrase={searchPhrase} setSearchPhrase={setSearchPhrase} onChangeText={handleSearch} />
      <Prest navigation={navigation} store={filteredStore}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
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

export default Prestataire;