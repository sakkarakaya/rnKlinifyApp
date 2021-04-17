import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, Image, StyleSheet, Dimensions, View, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import Cliniclist from '../main.json';
import ClinicCard from '../components/ClinicCard'

const Restaurants = (props) => {

    const [myClinics, setMyClinics] = useState([]);

    const selectedCity = props.route.params.selected;

    const renderItem = ({ item }) => {
        return <TouchableOpacity onPress={() => props.navigation.navigate('Detail', {selected: item})}>
            <ClinicCard data={item} />
        </TouchableOpacity>
    }

    useEffect(() => {
        const filteredValue = Cliniclist.filter((item) => {
            return selectedCity.value == item.stadt
        })
        setMyClinics(filteredValue)
    }, [])

    return (
        <SafeAreaView>
            <Text>{selectedCity.value}</Text>
            <FlatList
                data={myClinics}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
                
            />

        </SafeAreaView>
    )
}

export default Restaurants

const styles = StyleSheet.create({
    image: {
        height: Dimensions.get('window').height * 0.25,
    },
    textContainer: {
        padding: 10
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textScore: {
        fontStyle: 'italic'
    }
})