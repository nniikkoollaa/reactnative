import React from "react";
import {View, StyleSheet, Text, ImageBackground, Dimensions} from "react-native";

const { width } = Dimensions.get('window');

export default class EventSmall extends React.Component{
    render(){
        return <View>
        <ImageBackground 
            source={require('../assets/images/51398338_10161471283725261_2572874934325870592_n.jpg')} 
            style={styles.container}
            imageStyle={{ borderRadius: 15 }}>
            <Text>{this.props.name}</Text>            
            </ImageBackground></View>;
    }
}

const styles = StyleSheet.create({
    container:{        
        backgroundColor: 'blue',
        width: width - 40,
        margin: 5,
        height: 200,
        borderRadius:15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 7 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
      }
});