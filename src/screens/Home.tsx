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
            flex: 1,
        },
        buttonAudio: {
            backgroundColor: '#f00',
            margin: 20,
            padding: 30,
            borderRadius: 50,
            
            // flex: 1,
            // alignItems: 'center',
            // flexDirection: 'column',
            // justifyContent: 'center',
            // alignContent: 'center',

        },
        textButton: {
            color: '#fff',
            fontWeight: '700',
            textTransform: 'uppercase'
        },

        imagesBackground:{

        },
    });

    
    return(
    // <ImageBackground style={styles.backgroundImage} resizeMode="cover" source={require('./../../assets/bg-driver.png')}>
    //     <View>
    //         <Text>teste</Text>
    //     </View>
    // </ImageBackground>
        <ImageBackground style = {styles.backgroundImage} source={require('./../../assets/splash.png')}>
        <View style={styles.container}>
            <TouchableOpacity style={[styles.buttonAudio]}>
                <Text style={styles.textButton}>Cinto de Segurança</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonAudio}>
                <Text style={styles.textButton}>Não esqueça seus pertences</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonAudio}>
                <Text style={styles.textButton}>Boa viagem</Text>
            </TouchableOpacity>
        </View>
        </ImageBackground>
    

    );

  
    

    
}

