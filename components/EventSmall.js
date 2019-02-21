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
            source={{uri:'https://raw.githubusercontent.com/nniikkoollaa/reactnative/master/assets/images/' + this.props.eventId + '.jpg'}} 
            style={styles.image}
            imageStyle={{ borderRadius: 5 }}>
            </ImageBackground></View>;
    }
}

const styles = StyleSheet.create({
    container:{        
        width: width - 40,
        margin: 5,
      },
      eventName:{
          fontWeight:'bold',
          fontSize:20,
      },
      eventLocation: {
          color:'gray',
      },
      image:{
        marginTop:10,
        marginBottom:7,
        flexGrow:20,
        width: width - 40,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
      }
});