import React from "react";
import {FlatList, StyleSheet,  View, Text} from "react-native";
import Event from "../components/Event";
import {getFeaturedEvents} from "../services/EventsService";

export default class UpcommingEvents extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            featuredEvents: []
        };
    }

    async componentDidMount() {
        let events = await getFeaturedEvents();
        this.setState({featuredEvents: events});		
    }

    render(){
        return <View style={styles.container}>
                    <View>
                        <Text style={styles.header}>Featured</Text>
                    </View>
                    <View style={styles.divLine}></View>
                    <FlatList
                        data={this.state.featuredEvents}
                        renderItem={({item})=><Event name={item.name} location={item.location} eventId={item._id}></Event>}
                        keyExtractor={(item, index) => index.toString()}
                        onScroll={this.props.onScroll}>
                    </FlatList>
                </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    header: {
        fontSize:30,
        marginTop: 10,
        marginLeft:20,
        borderColor:'black',
    },
    divLine:{
        height:1,
        backgroundColor:'#ccc',
        marginTop:5,
        marginBottom:5,
        marginLeft:15,
        marginRight:15
    }
});