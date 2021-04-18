import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import DetailCard from '../components/DetailCard'
import Reviews from '../reviews.json'
import ClinicCard from '../components/ClinicCard'
import Cliniclist from '../main.json';

const Detail = (props) => {

    const [review, setReviews] = useState([]);

    const renderItem = ({item}) => {
        return <DetailCard data={item}/>
    }
    const selectedClinic = props.route.params.selected;

   const MyClinic = () => {
       return <ClinicCard data={Cliniclist[selectedClinic.id]}/>
   }

    useEffect(() => {
        const myReviews = Reviews[selectedClinic.id]
        setReviews(myReviews)
    }, [])


    return (
        <SafeAreaView>
            <View style={styles.textContainer}>
                <Text style={styles.textHeader}>Details</Text>
                <Text>{review.length} reviews found</Text>
            </View>
            
            <FlatList
                data={review}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
                ListHeaderComponent={MyClinic}
            />
        </SafeAreaView>

    )
}

export default Detail

const styles = StyleSheet.create({
    textContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        padding: 5
    },
    textHeader: {
        
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
      
})