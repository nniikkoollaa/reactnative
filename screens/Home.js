import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    FlatList,
    Dimensions,
} from "react-native";
import Event from "../components/Event";
import EventSmall from "../components/EventSmall"

const { width } = Dimensions.get('window');

class Home extends React.Component{
    static navigationOptions = {
        header: null,
    };

    items = [
        {
            _id: 1,
            name: "Novi Sad AI #4.0 Event",
            location: "Startit Centar Novi Sad",
            date: "02/27/2019",
            description: "Event 1 description"
        },
        {
            _id: 2,
            name: "Vlatko Stefanovski Akustični Koncert",
            location: "Srpsko Narodno Pozoriste",
            date: "02/10/2019",
            description: "Event 1 description"
        },
        {
            _id: 3,
            name: "Green Love / Deborah De Luca",
            location: "SPENS Novi Sad",
            date: "03/09/2019",
            description: "Event 1 description"
        },
    ];

    componentDidMount() {
		setTimeout(() => {this.refs.listRef.scrollToOffset({offset: -15}) }, 1) // scroll view position fix
    }
    
    renderList(){       
        return this.items.map(item=>{
            return (<Event key={item._id} name={item.name}>                
            </Event>);
        });
    };

    render(){
        return(
            <View style={styles.container}>
                <View style={{paddingTop:30}}>
                    <Text style={styles.header}>Home</Text>
                </View>
                <View style={{flex:2}} >
                <FlatList 
                    ref="listRef"
                    data={this.items}
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
                    renderItem={({item}) =><EventSmall name={item.name} location={item.location}></EventSmall>}
                    keyExtractor={(item, index) => index.toString()}>
                </FlatList>
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