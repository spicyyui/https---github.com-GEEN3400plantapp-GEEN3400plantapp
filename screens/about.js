import React from 'react';
import { StyleSheet, View, Text,Image } from 'react-native';

export default function Home({navigation}){
    return(
        <View style={styles.container}>
            <Text>{navigation.getParam('plantName')}</Text>
            <Text>{navigation.getParam('color')}</Text>
            <View style={styles.pict}>
           <Image source={require('../images/shelf1.png')}></Image>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    pict: {
        flex: 100,
        width:1000,
        height: 1000,
        alignItems: 'center'
    },
    titleText: {
        fontSize: 50,
    }
});