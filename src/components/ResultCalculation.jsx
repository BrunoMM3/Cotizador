import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ResultCalculation(props) {
    const {capital,interes,months,total,errorMessage} = props
    
    
  return (
    <View style={styles.container}>
        {total && (
            <View>
            <Text 
                style={[{fontSize:25},{margin:10},{fontWeight:'bold'},{textAlign:'center'}]}
                >COTIZACION
            </Text>
            <Text style={styles.text} >Capital: ${capital}</Text>
            <Text style={styles.text} >Intereses: {interes}%</Text>
            <Text style={styles.text} >Meses: {months}</Text>
            <Text 
                style={[{backgroundColor:'yellow'},{margin:10}]} 
                    > Monto a pagar por mes: ${total.monthlyFee}
            </Text>
            <Text 
                style={[{backgroundColor:'yellow'},{margin:10}]} 
                    >Monto total a pagar: ${total.totalPayable}
            </Text>

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
        flex:0.7,
        backgroundColor:'aqua',
        marginTop:20,
        marginHorizontal:20,
        borderRadius:30,
        alignItems:'center',

    },
    error:{
        color:'#f00',
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center'
    },
    text:{
        margin:10,
        fontSize:15,
        textAlign:'center'

    }
})