import React from 'react'
import {View,TextInput,Button,StyleSheet} from 'react-native'

const placeLists = (props)=>{
	return(
		<View style={styles.fullWidth}>
          {props.placeName}
        </View>
		)
}
const styles = StyleSheet.create({
  fullWidth:{
    width: '100%'
  }
});
export default placeLists;