import React from "react";
import {
    View,    
    StyleSheet,    
    Animated,
    Easing,
    TouchableOpacity,
} from "react-native";

import UpcommingEvents from "../components/UpcommingEvents";
import FeaturedEvents from "../components/FeaturedEvents";

const featuredEventsCollapsedFlex = 5;
const featuredEventsExpandedFlex = 20;
const animateFeaturedEventsOffsetTrashold = 100;
const animateFeaturedEventsDuration = 300;

class Home extends React.Component{
    static navigationOptions = {
        header: null,
    };

    state = {
        animation: new Animated.Value(featuredEventsCollapsedFlex),
    }

    animateUpcommingEventsFlex = (to) => {
        Animated.timing(this.state.animation, {
            toValue: to,
            duration: animateFeaturedEventsDuration,
            easing: Easing.in(),
        }).start()
    }

    onScroll = (event)=>{
        y = event.nativeEvent.contentOffset.y;         
        if (y > animateFeaturedEventsOffsetTrashold && this.state.animation._value === featuredEventsCollapsedFlex){            
            this.animateUpcommingEventsFlex(featuredEventsExpandedFlex);
        } else if (y <= animateFeaturedEventsOffsetTrashold && this.state.animation._value  === featuredEventsExpandedFlex) {
            this.animateUpcommingEventsFlex(featuredEventsCollapsedFlex);
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={{paddingTop:40}}>                    
                </View>
                <View style={{flex:3}} >
                    <UpcommingEvents></UpcommingEvents>
                </View>
                <Animated.View style={{flex:this.state.animation}}>
                    <FeaturedEvents onScroll={this.onScroll}></FeaturedEvents>
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default Home;