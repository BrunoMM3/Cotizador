import { StyleSheet, TextInput,Text, View } from 'react-native'
import React,{useState} from 'react'
import colors from '../utils/colors'
import {Picker} from '@react-native-picker/picker';

//instalar picket 
//https://yarnpkg.com/package?q=react%20native%20picker%20pic&name=%40react-native-picker%2Fpicker
//Getting started
//Usage

export default function Form(props) {

    const {setCapital,setInteres,setMonths}= props

    const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <View style = {styles.viewForm}>
        
        <View style={styles.viewInputs}>
            <TextInput 
            placeholder='Cantidad a pedir'
            keyboardType='numeric'
            onChange={e =>setCapital( e.nativeEvent.text)}
            style={styles.input}
            ></TextInput>
            <TextInput 
            placeholder='Interes %'
            keyboardType='numeric'
            onChange={e =>setInteres( e.nativeEvent.text)}
            style={[styles.input,styles.inputPercentage]}
            ></TextInput>
        </View>
        <View>
            <Picker
            style ={PickerStyles.input}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>{
                setSelectedLanguage(itemValue)
                setMonths(itemValue)
            }
            }>
                <Picker.Item label='Selecciona los meses' value={null}/>
                <Picker.Item label="3 meses" value={3} />
                <Picker.Item label="6 meses" value={6} />
                <Picker.Item label="9 meses" value={9} />
                <Picker.Item label="12 meses" value={12} />
                <Picker.Item label="24 meses" value={24} />
                
            </Picker>

        </View>
        <View>
            <Text>S = {selectedLanguage}</Text>
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    viewForm:{
        position:'absolute',
        bottom:0,
        paddingHorizontal:50,
        height:240,
        width: '85%',
        backgroundColor : colors.PRIMARY_COLOR,
        borderRadius:30,
        
    },
    viewInputs:{
        flexDirection:'row'

    },
    input:{
        backgroundColor:'#fff',
        height:100,
        width:'60%',
        marginBottom:10,
        marginTop:10,
        color:'#000',
        borderWidth:2,
        borderColor:colors.PRIMARY_COLOR,
        borderRadius:5,
        textAlign:'center',
        marginRight:5,
        paddingHorizontal:10
    },
    inputPercentage:{
        width:'40%',
        marginLeft:5
    }
})

const PickerStyles = StyleSheet.create({
    input:{
        backgroundColor:'aqua',
        borderWidth:5,
        borderColor:'black',
        paddingVertical:10,
    }
})