import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../utils/colors'

export default function Footer({calcular}) {
  return (
    <View style={styles.viewFooter}>
      <TouchableOpacity 
      style={styles.button}
      onPress={calcular} >
        <Text style={styles.text} >CALCULAR</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    viewFooter:{
        backgroundColor:colors.PRIMARY_COLOR_DARK,
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        position:'absolute',
        alignItems:'center',
        justifyContent:'center',
        bottom:0,
        width:'100%',
        height:100
    },
    text:{
        fontWeight:'bold',
        fontSize:20,
        color:'white',
        textAlign:'center'        
    },
    button:{
        backgroundColor:colors.PRIMARY_COLOR,
        width:'80%',
        padding:15,
        borderRadius:20,
    }
})