import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const PasswordRecoveryPage = ({ navigation }) => {
    const [email, setEmail] = React.useState('');
  return (  
    <View style={styles.container}>
      <Text style={styles.header}>Forgot Password?</Text>
      <Text style={styles.header2}>Enter your last email and we'll send a code to reset your password.</Text>

      <TextInput
          label="Email"
          value={email}
          outlineColor="#000000"         
          activeOutlineColor="#9400de" 
          onChangeText={setEmail}
          mode="outlined"
          style={styles.input}       
          right={<TextInput.Icon icon="email" />}
        />

      <Button mode="contained" onPress={() => alert('Done!!  please check your email BABY for confirmation)} style={styles.button}>
        Submit
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 20,
    marginTop: -200
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingHorizontal: 45,
  },
  header2: {
    fontSize: 12,
    color: '#737272',
    marginBottom: 20,
    paddingHorizontal: 45,
  },
  input: {
    width: '80%',
    marginBottom: 15,
    alignSelf: 'center'
  },
  button: {
    marginTop: 10,
    width: '80%',
    alignSelf: 'center'
  },
});

export default PasswordRecoveryPage;
