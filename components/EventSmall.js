import React from "react";
import {View, StyleSheet, Text, ImageBackground, Dimensions} from "react-native";

const { width } = Dimensions.get('window');

export default class EventSmall extends React.Component{
    render(){
        return <View style={styles.container}>
            <View>
                <Text style={styles.eventName}>{this.props.name}</Text>
            </View>
            <View>
                <Text style={styles.eventLocation}>{this.props.location}</Text>
            </View>
        <ImageBackground 
            source={require('../assets/images/51398338_10161471283725261_2572874934325870592_n.jpg')} 
            style={styles.image}
            imageStyle={{ borderRadius: 15 }}>
            </ImageBackground></View>;
    }
}

const styles = StyleSheet.create({
    container:{        
        width: width - 40,
        margin: 5,
      },
      eventName:{
          fontWeight:'bold'
      },
      eventLocation: {
          color:'gray'
      },
      image:{
          flexGrow:20,
        borderRadius:15,
        width: width - 40,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 7 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
      }
});