import React from 'react'

import {View, Text,StyleSheet,useColorScheme,TextInput} from 'react-native'

function AppPro(): JSX.Element{
    const isDarkMode=useColorScheme() === 'dark'
    return (
        <View style={styles.container}>
        <Text style={isDarkMode ? styles.whiteText: styles.darkText}>
        Bonjour Amane Ba
        </Text>
        <TextInput>
        vOTRE NOM
        </TextInput>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        fontSize:19
    },
    whiteText:{
        color:'#FFFFFF'
    },
    darkText:{
        color:'#000000'
    }
}

)
export default AppPro;