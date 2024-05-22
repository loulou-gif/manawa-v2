import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet, Pressable } from 'react-native';
import PagerView from 'react-native-pager-view';

const Carrousel = ({ navigation, services }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const pagerRef = useRef(null);
    const [visiblePages, setVisiblePages] = useState([0, 1, 2]); // Index des pages visibles

    // const FilterData = services

    // Défilement automatique du carrousel
    useEffect(() => {
        const interval = setInterval(() => {
            if (currentPage < services.length - 1) {
                pagerRef.current.setPage(currentPage + 1);
                setCurrentPage(currentPage + 1);
            } else {
                pagerRef.current.setPage(0);
                setCurrentPage(0);
            }
        }, 5000); // Interval de 3 secondes

        return () => clearInterval(interval);
    }, [currentPage, services.length]);

    // Mise à jour des pages visibles
    const updateVisiblePages = (position) => {
        const startIndex = Math.max(position - 1, 0);
        const endIndex = Math.min(position + 1, services.length - 1);
        setVisiblePages([...Array(endIndex - startIndex + 1).keys()].map(i => i + startIndex));
    };

    return (
        <View style={styles.container}>
            <PagerView style={styles.pagerView} ref={pagerRef} initialPage={0} onPageSelected={(event) => {
                setCurrentPage(event.nativeEvent.position);
                updateVisiblePages(event.nativeEvent.position);
            }}>
                {services.map((data) => (
                    <View key={data.id} style={styles.page}>
                        <Pressable onPress={() => navigation.navigate('Boutique', { id: data.id })}>
                            <ImageBackground style={styles.Card} source={data.image}>
                                <View style={styles.titleBox}>
                                    <Text style={styles.title}>{data.name}</Text>
                                </View>
                            </ImageBackground>
                        </Pressable>
                    </View>
                ))}
            </PagerView>
            <View style={styles.pageIndicatorContainer}>
                {visiblePages.map((pageIndex) => (
                    <View key={pageIndex} style={[styles.pageIndicator, currentPage === pageIndex && styles.currentPageIndicator]} />
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    pagerView: {
        height: 200,
        borderWidth:1,
        marginBottom:35
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5, // Ajustez l'espace horizontal entre les éléments
    },
    Card: {
        width: 350,
        height: 150,
        borderRadius: 8,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        resizeMode: "cover",
        marginTop: 20,
    },
    title: {
        fontSize: 20,
        color: "#fff",
        marginLeft: 10,
        opacity: 1
    },
    titleBox: {
        justifyContent: "center",
        backgroundColor: "#7A4D09",
        opacity: 0.8,
        width: 350,
        height: 40,
        marginTop: 110,
    },
    pageIndicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
    },
    pageIndicator: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginTop:10,
        backgroundColor: '#ccc',
        marginHorizontal: 5,
    },
    currentPageIndicator: {
        backgroundColor: '#7A4D09', // Couleur différente pour la page actuelle
    },
});

export default Carrousel;
