
import { Button, StyleSheet, Text, View } from 'react-native';
import colors from './src/utils/colors'
import {useState}from 'react'
import Form from './src/components/Form'
import Footer from './src/components/Footer';
import ResultCalculation from './src/components/ResultCalculation';
import { useEffect } from 'react';


export default function App() {

  const [capital, setCapital] = useState(null)
  const [interes, setInteres] = useState(null)
  const [months, setMonths] = useState(null)
  const [total, setTotal] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  const calcular = () => {
    setTotal(null)
    setErrorMessage('')
    if (!capital) {
      setErrorMessage('falta el capital')
    } else if(!interes){
      setErrorMessage('falta el interes')
    } else if(!months){
      setErrorMessage('falta elegir los meses')
    }else{
      //console.log(capital,interes,months)
      const i = interes/100
      const fee = capital / ((1 - Math.pow(1+i,-months)) / i)
      
      setTotal({
        monthlyFee:fee.toFixed(2),
        totalPayable: (fee*months).toFixed(2)
      })
      
      
    } 
  }
  useEffect(() => {
      calcular();
    
  }, [interes,capital,months])

  return (
    <>
      
      <View style={styles.container}>
        <Text
          style={[{fontSize:25},{margin:10},{fontWeight:'bold'},{bottom:130},{color:'cornsilk'}]}
          >Prestamos
        </Text>
        <Form 
        setCapital={setCapital} 
        setInteres={setInteres} 
        setMonths={setMonths} 
        
        />
      </View>
        <ResultCalculation
        capital={capital}
        interes={interes}
        months={months}
        total={total}
        errorMessage ={errorMessage}

        />
      
        <Footer 
          calcular={calcular}
          
          />
      

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:0.7,
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    alignItems: 'center',
    height:200,
    borderRadius:30,
    justifyContent: 'center',
  },
  text:{
    fontSize:25,
    color:"#fff",
    fontWeight:'black'
  }
});
