import React from 'react';
import { SafeAreaView, Text } from 'react-native';

// {"review_id":1189,
// "Name":"AMEOS Hospital Alfeld",
// "Sterne":5,
// "Datum":"2 weeks ago",
// "Deutsch":" Wurde heute von Dr. O. Tebbi und einer sehr netten Krankenpflegerin nach einem kleineren Unfall wieder \"zusammengeflickt\".  Oft sind Ärzte in Krankenhäusern unfreundlich und man fühlt sich wie ein  Störfaktor. Das war heute nicht der Fall, ich habe mich gut aufgehoben gefühlt. Würde ja schreiben \"komme gern wieder!\" aber wer will das schon? ;)",
// "Von":"Google"}

const DetailCard = (props) => {
    return (
        <SafeAreaView>
            
            <Text>{props.data.review_id}</Text>
            <Text>{props.data.Name}</Text>
            <Text>{props.data.Sterne}</Text>
            <Text>{props.data.Datum}</Text>
            <Text>{props.data.Deutsch}</Text>
            <Text>{props.data.Von}</Text>
            
           
        </SafeAreaView>
    )
}

export default DetailCard
