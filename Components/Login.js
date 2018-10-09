import React, {Component} from 'react';
import {
    StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity, Alert
} from 'react-native';

export default class Login extends Component {
    render() {
      return (
          <View style={styles.container}>
            <Image 
                style={{width:100,height:100}}
                source={require('./ad.jpg')} />
            <TextInput
                style = {styles.inputBox}
                placeholder="Telepon atau Email"
            />
            <TextInput
                style = {styles.inputBox}
                placeholder="Password"
                secureTextEntry={true}
            />
                <Button
                onPress ={() =>{this.props.navigation.navigate('Judul')}}
                style ={styles.button}
                title="                    Masuk                   "
                color="#123456"
                />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
	    flex: 1,
	    justifyContent: 'center',
	    alignItems: 'center',
	    backgroundColor: '#ffffff'
	},

	inputBox:{
		width: 250,
		fontSize: 13,
		color: '#123456'
    },
    button: {
        width: 250,
		height: 40,
		alignItems: 'center',
		backgroundColor: '#ffffff',
		marginVertical: 10,
		paddingHorizontal: 60,
        flexDirection : 'row', 
        justifyContent : 'space-between'
    }
});