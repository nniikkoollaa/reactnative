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

const { width } = Dimensions.get('window');

class Home extends React.Component{
    static navigationOptions = {
        header: null,
    };

    items = [
        {
            _id: 1,
            name: "Event 1 name",
            description: "Event 1 description"
        },
        {
            _id: 2,
            name: "Event 2 name",
            description: "Event 2 description"
        },
        {
            _id: 3,
            name: "Event 3 name",
            description: "Event 3 description"
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
                <View style={{flexGrow:20, paddingTop:30}}>
                    <Text>Home</Text>
                </View>
                <FlatList 
                    ref="listRef"
                    style={{flexGrow:40}} 
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
                    renderItem={({item}) => 
                        <View style={styles.view}><Text>{item.name}</Text></View>
                    }
                    keyExtractor={(item, index) => index.toString()}>
                </FlatList>
                <FlatList style={{flexGrow:40}}
                    data={this.items}
                    renderItem={(item)=><Event name={item.name}></Event>}
                    keyExtractor={(item, index) => index.toString()}>
                </FlatList>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1        
    },
    eventTile: {
        width:30,
        height: 30,
        margin:3,
        backgroundColor:"#ff0000"
    },
    view: {        
        backgroundColor: 'blue',
        width: width - 40,
        margin: 5,
        height: 200,
        borderRadius: 10,
        //paddingHorizontal : 30
      }
});

export default Home;