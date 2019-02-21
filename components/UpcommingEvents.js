import React from "react";
import {FlatList, StyleSheet, Dimensions, View, Text} from "react-native";
import EventSmall from "../components/EventSmall";
import {getUpcommingEvents} from "../services/EventsService";

const { width } = Dimensions.get('window');

export default class UpcommingEvents extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            upcommingEvents: []
        };
    }

    async componentDidMount() {
        let events = await getUpcommingEvents();
        this.setState({upcommingEvents: events});
		setTimeout(() => {this.refs.listRef.scrollToOffset({offset: -15}) }, 1) // scroll view position fix
    }

    render(){
        return <View style={styles.container}>
                    <View>
                        <Text style={styles.header}>Upcomming</Text>
                    </View>
                    <View style={styles.divLine}></View>
                    <FlatList 
                        style={styles.container}
                        ref="listRef"
                        data={this.state.upcommingEvents}
                        horizontal={true}
                        decelerationRate={0}
                        snapToInterval={width - 30}
                        snapToAlignment={"center"}
                        contentInset={{
                        top: 0,
                        left: 15,
                        bottom: 0,
                        right: 15,
                        }}
                        renderItem={({item}) =><EventSmall name={item.name} location={item.location} eventId={item._id}></EventSmall>}
                        keyExtractor={(item, index) => index.toString()}>
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