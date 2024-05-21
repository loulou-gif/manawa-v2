import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import { services } from '../data/services';
import Carrousel from '../components/Carrousel';
import Prest from '../components/Prest';
import { Store } from '../data/Store';
import Message from '../components/Message';

const Services = ({ navigation }) => {
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
    const filteredServices = searchPhrase ? filterData(services, searchPhrase) : services;
    
    // Données filtrées pour les prestataires
    const filteredStore = searchPhrase ? filterData(Store, searchPhrase) : Store;

    return (
        <View style={styles.container}>
            <Header />
            <SearchBar searchPhrase={searchPhrase} setSearchPhrase={setSearchPhrase} onChangeText={handleSearch} />
            <Carrousel navigation={navigation} services={filteredServices} />
            <Text style={styles.prestTitle}>Prestataires</Text>
            <ScrollView style={styles.prestContainer}>
                <Prest navigation={navigation} store={filteredStore} />
            </ScrollView>
            <Message navigation={navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    prestContainer: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    prestTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        paddingHorizontal: 20,
        color:'#7A4D09'
    },
});

export default Services;
