import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ResultCalculation(props) {
    const {capital,interes,months,total,errorMessage} = props

  return (
    <View style={styles.container}>
        {total && (
            <View>
            <Text>Resultado Total</Text>
            <Text>{capital}</Text>
            <Text>{}</Text>
            </View>
            )}
        <View  > 
            <Text style={styles.error}>{errorMessage}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:0.5,
        backgroundColor:'aqua',
        marginTop:30,
        marginHorizontal:30
    },
    error:{
        color:'#f00',
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center'
    }
})