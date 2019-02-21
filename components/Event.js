import React from "react";
import {View, StyleSheet, Text, ImageBackground} from "react-native";

export default class Event extends React.Component{
    render(){        
        return <View>
        <ImageBackground 
            style={styles.image} 
            source={{uri:'https://raw.githubusercontent.com/nniikkoollaa/reactnative/master/assets/images/' + this.props.eventId + '.jpg'}} 
            imageStyle={{ borderRadius: 15 }}>
            <Text></Text>            
            </ImageBackground></View>;
    }
}

const styles = StyleSheet.create({
    image:{
        margin:20,
        width:undefined,
        height:250,  
        flexGrow:20,        
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
      }
});