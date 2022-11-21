import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Input, NativeBaseProvider, Button, Icon } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


function Home(){
    const navigation = useNavigation ();
    return (
        <View>
            <Icon style={styles.menuIcon}
        as={<FontAwesome5 name="bars" />}
        size="md"
        m={2}
        _light={{
            color:"black"
        }}
        _dark={{
            color: "gray.300"
        }}
        />
    </View>
    )
}

export default ()=> {
    return (
        <NativeBaseProvider>
            <Home/>
        </NativeBaseProvider>
    )
}

const styles= StyleSheet.create({
    menuIcon:{
        marginTop: 50,
        marginLeft: 25
    }
})