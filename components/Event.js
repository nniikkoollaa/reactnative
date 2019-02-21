import React from "react";
import {View, StyleSheet, Text, ImageBackground} from "react-native";

export default class Event extends React.Component{
    render(){
        return <View>
        <ImageBackground 
            style={styles.container}
            imageStyle={{ borderRadius: 15 }}>
            <Text>{this.props.name}</Text>            
            </ImageBackground></View>;
    }
}

const styles = StyleSheet.create({
    container:{
        margin:20,
        height:150,        
        backgroundColor:"#0022ff",
        borderRadius:15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 7 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    }
});