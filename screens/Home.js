import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    FlatList,
    Dimensions,
} from "react-native";

import UpcommingEvents from "../components/UpcommingEvents";

import Event from "../components/Event";

class Home extends React.Component{
    static navigationOptions = {
        header: null,
    };

    render(){
        return(
            <View style={styles.container}>
                <View style={{paddingTop:30}}>
                    <Text style={styles.header}>Home</Text>
                </View>
                <View style={{flex:2}} >
                    <UpcommingEvents></UpcommingEvents>
                </View>
                <View style={{flex:5}}>
                <FlatList
                    data={this.items}
                    renderItem={(item)=><Event name={item.name}></Event>}
                    keyExtractor={(item, index) => index.toString()}>
                </FlatList>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        fontSize:40,
        marginTop: 10,
        marginLeft:5
    }
});

export default Home;