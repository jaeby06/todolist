import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Login({ navigation }) {
  return (
    <ImageBackground 
      source={require('./bg.jpg')} 
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text variant="headlineMedium" style={styles.loginText}>Let's get started</Text>
        </View>
        <TextInput 
          label="Username, or Email" 
          mode="outlined" 
          style={styles.input} 
        />
        <TextInput 
          label="Password" 
          mode="outlined" 
          secureTextEntry 
          style={styles.input} 
        />
        <Button 
          mode="contained" 
          style={styles.button} 
          onPress={() => navigation.navigate('Dashboard')}
        >
          Login
        </Button>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',   
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    alignItems: 'center', 
    marginBottom: 20,
  },
  loginText: {
    fontWeight: 'bold',
  },
  input: {
    marginBottom: 16,
    width: '90%',
    alignSelf: 'center', 
  },
  button: {
    marginBottom: 16,
    width: 180, 
    alignSelf: 'center', 
  },
});
