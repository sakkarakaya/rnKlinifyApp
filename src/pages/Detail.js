import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import DetailCard from '../components/DetailCard'
import Reviews from '../reviews.json'

const Detail = (props) => {

    const [review, setReviews] = useState([]);

    const renderItem = ({item}) => {
        return <DetailCard data={item}/>
    }
    const selectedClinic = props.route.params.selected;

   

    useEffect(() => {
        const myReviews = Reviews[selectedClinic.id]
        setReviews(myReviews)
    }, [])


    return (
        <SafeAreaView>
            <FlatList
                data={review}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
            />
        </SafeAreaView>

    )
}

export default Detail
