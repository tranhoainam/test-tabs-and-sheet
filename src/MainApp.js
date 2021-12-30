import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import BottomTabs from './BottomTabs';
import { Context as MainContext } from './context/MainContext';
import Overlays from './Overlays';

const Tab = createBottomTabNavigator();

export default MainApp = () => {

    const { showSheet } = useContext(MainContext)

    const ONE = () => {
        console.log('>>>->>> RENDER one')
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'silver' }}>
                <TouchableOpacity onPress={() => showSheet()} 
                style={{width: 150, height: 50, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', backgroundColor: 'gray'}}>
                    <Text style={{color: 'white'}}>Open Sheet</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const TWO = () => {
        console.log('>>>->>> RENDER two')
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'gray' }}>
                <Text>Two</Text>
            </View>
        )
    }

    const THREE = () => {
        console.log('>>>->>> RENDER three')
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'brown' }}>
                <Text>Three</Text>
            </View>
        )
    }
    console.log('>>> RENDER MAIN APP')
    return (
        <>
            <Tab.Navigator
                initialRouteName={"ONE"}
                screenOptions={{ headerShown: false }}
                style={{ flex: 1 }}
                tabBar={(props) => <BottomTabs {...props} />}
            >
                <Tab.Screen
                    name={"ONE"}
                    component={ONE}
                />
                <Tab.Screen
                    name={"TWO"}
                    component={TWO}
                />
                <Tab.Screen
                    name={"THREE"}
                    component={THREE}
                />
            </Tab.Navigator>
            <Overlays />
        </>
    )
}


const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});