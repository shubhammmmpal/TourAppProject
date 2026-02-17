import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { styles } from './styles';
import AppText from '../../components/AppText/AppText';

const SplashScreen = () => {
	return (
		<View style={styles.container}>
			<StatusBar
				translucent
				backgroundColor="transparent"
				barStyle={'light-content'}
			/>
			<AppText size={24} color={'white'} family='AvenirHeavy'>Tour App</AppText>
		</View>
	);
}


export default SplashScreen;
