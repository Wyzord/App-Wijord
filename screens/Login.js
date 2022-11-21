import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Input, NativeBaseProvider, Button, Icon } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


function Login(){
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.Middle}>
                <Text style={styles.LoginText}>Masuk</Text>
            </View>
            <View style={styles.Text2}>
                <Text>Belum punya akun? </Text>
                <TouchableOpacity onPress={()=> navigation.navigate("Signup")}>
                    <Text style={styles.signupText}>Daftar</Text>
                </TouchableOpacity>
            </View>

            {/* Username/Email/Nomor Telepon input field */}
            <View style={styles.buttonStyle}>
                <View style={styles.emailInput}>
                    <Input
                        InputLeftElement={
                           <Icon
                            as={<FontAwesome5 name="user-alt" />}
                            size="sm"
                            m={2}
                            _light={{
                                color:'black',
                            }}
                            _dark={{
                                color:"gray.300"
                            }}
                           /> 
                        }
                        variant = "outline"
                        placeholder='Username/Email/Nomor Telepon'
                        _light={{
                            placeholderTextColor: "blueGray.400"
                        }}
                        _dark={{
                            placeholderTextColor: "blueGray.50",
                        }}
                    />
                </View>
            </View>

            {/* Password Input Field*/}
            <View style={styles.buttonStyleX}>
                <View style={styles.emailInput}>
                    <Input
                        InputLeftElement={
                            <Icon
                                as={<FontAwesome5 name="lock" />}
                                size="sm"
                                m={2}
                                _light={{
                                    color:"black"
                                }}
                                _dark={{
                                    color: "gray.300"
                                }}
                            />
                        }
                        variant = "outline"
                        secureTextEntry={true}
                        placeholder="Kata Sandi"
                        _light={{
                            placeholderTextColor:"blueGray.400",
                        }}
                        _dark={{
                            placeholderTextColor:"blueGray.50"
                        }}
                    />
                </View>
            </View>

            {/*Button */}

            <View style={styles.buttonStyle}>
                <Button style={styles.buttonDesign} onPress={()=> navigation.navigate("Home")}>
                    Masuk
                </Button>

            </View>
        </View>
    )
}

export default ()=> {
    return (
        <NativeBaseProvider>
            <Login/>
        </NativeBaseProvider>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
    },
    LoginText:{
        marginTop: 100,
        fontSize: 30,
        fontWeight: 'bold',
    },
    Middle:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    Text2:{
        flexDirection:'row',
        justifyContent: 'center',
        paddingTop:5
    },
    signupText:{
        fontWeight:'bold'
    },
    emailInput:{
        marginTop:10,
        marginRight:5,
    },
    buttonStyle:{
        marginTop:30,
        marginLeft:15,
        marginRight:15
    },
    buttonStyleX:{
        marginTop: 12,
        marginLeft: 15,
        marginRight: 15,
    },
    buttonDesign:{
        backgroundColor: '#026efd'
    }
})