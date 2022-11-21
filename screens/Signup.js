import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Input, NativeBaseProvider, Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';


function Signup(){
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.Middle}>
                <Text style={styles.LoginText}>Daftar</Text>
            </View>
            <View style={styles.Text2}>
                <Text>Sudah memiliki akun? </Text>
                <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
                    <Text style={styles.signupText}>Masuk</Text>
                </TouchableOpacity>
            </View>

            {/* Nama Lengkap input field */}
            <View style={styles.buttonStyle}>
                <View style={styles.emailInput}>
                    <Input
                        variant = "outline"
                        placeholder='Nama Lengkap'
                        _light={{
                            placeholderTextColor: "blueGray.400"
                        }}
                        _dark={{
                            placeholderTextColor: "blueGray.50",
                        }}
                    />
                </View>
            </View>

            {/* Email input field */}
            <View style={styles.buttonStyle}>
                <View style={styles.emailInput}>
                    <Input
                        variant = "outline"
                        placeholder='Email'
                        _light={{
                            placeholderTextColor: "blueGray.400"
                        }}
                        _dark={{
                            placeholderTextColor: "blueGray.50",
                        }}
                    />
                </View>
            </View>

            {/* Username input field */}
            <View style={styles.buttonStyle}>
                <View style={styles.emailInput}>
                    <Input
                        variant = "outline"
                        placeholder='Username'
                        _light={{
                            placeholderTextColor: "blueGray.400"
                        }}
                        _dark={{
                            placeholderTextColor: "blueGray.50",
                        }}
                    />
                </View>
            </View>

            {/* Nomor Telepon input field */}
            <View style={styles.buttonStyle}>
                <View style={styles.emailInput}>
                    <Input
                        variant = "outline"
                        placeholder='Nomor Telepon'
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

            {/* Confirm Password Input Field*/}
            <View style={styles.buttonStyleX}>
                <View style={styles.emailInput}>
                    <Input
                        variant = "outline"
                        secureTextEntry={true}
                        placeholder="Konfirmasi Kata Sandi"
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
                <Button style={styles.buttonDesign} onPress={()=> navigation.navigate("Login")}>
                    Daftar
                </Button>

            </View>
        </View>
    )
}

export default ()=> {
    return (
        <NativeBaseProvider>
            <Signup/>
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
        marginTop:12,
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