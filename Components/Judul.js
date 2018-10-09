import React,{Component}from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

export default class Judul extends Component{
	redirect()
	{
		Alert.alert("This Button is ready")

	}
	render(){
		return(
				<View style={styles.container}>
					<Text style={warna.yoi}> Selamat Datang Awali, </Text>
                    <Text style={salon.iya}> Nama    : Awalisyah Nafi'unisa </Text>
                    <Text style={salon.iya}> Kelas   : XI RPL 4 </Text>
                     <Text style={salon.iya}> No.absen : 07 </Text>
                    <Text style={salon.iya}> SMK Telkom Purwokerto </Text>
					<Text style={{ marginBottom : 100}}></Text>
					<Button title="					Next					" color="#123456" onPress ={() => {this.redirect()}}/>
				</View>
			)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  }
});
const warna = {
	yoi : {
		color : "#654",
		fontSize : 20,
		fontWeight : 'bold',
	}
}
const salon = {
	iya : {
		color : "#654",
		fontSize : 14,
	}
}