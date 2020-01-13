import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

export default function Home(){
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        backgroundImage: {
            width: '100%',
            height: '100%',
        },
        buttonAudio: {
            backgroundColor: '#f00',
            margin: 10,
            padding: 20,
            borderRadius: 40,
            
            // flex: 1,
            // alignItems: 'center',
            // flexDirection: 'column',
            // justifyContent: 'center',
            // alignContent: 'center',

        },
    });

    
    return(
    // <ImageBackground style={styles.backgroundImage} resizeMode="cover" source={require('./../../assets/bg-driver.png')}>
    //     <View>
    //         <Text>teste</Text>
    //     </View>
    // </ImageBackground>

    <View style={styles.container}>
        <TouchableOpacity style={styles.buttonAudio}>
            <Text>Cinto de Segurança</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonAudio}>
            <Text>Cinto de Segurança</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonAudio}>
            <Text>Cinto de Segurança</Text>
        </TouchableOpacity>
    </View>
    );

  
    

    
}

