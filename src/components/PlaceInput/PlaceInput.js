import React from 'react'
import {View,TextInput,Button,StyleSheet} from 'react-native'

const placeInput = (props)=>{
	return(
		<View style={styles.inputContainer}>
          <TextInput 
          style={styles.inputText}
          placeholder="An awsom places"
          value={props.textVal}
          onChangeText={props.change} />
       
          <Button 
          color= '#000000'
          onPress={props.press}
          title="Add"/>
        </View>
		)
}

const styles = StyleSheet.create({
 inputText:{
    width:"80%",
  },
  inputContainer:{
    width:'100%',
    justifyContent: 'space-between',
    flexDirection: 'row',  
  },
})
export default placeInput;