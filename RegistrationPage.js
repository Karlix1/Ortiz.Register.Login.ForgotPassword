import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput, Button, Avatar, Text, Checkbox} from 'react-native-paper';

const RegistrationPage = ({ navigation }) => {
    const [email, setEmail] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [ConfirmPassword, setConfirmPassword] = React.useState('');
    const [rememberMe, setRememberMe] = React.useState(false);

  return (
    <View style={styles.container}>
      <Avatar.Icon size={80} icon="account" style={{ backgroundColor: '#777777', marginBottom: 30, alignSelf: 'center'}} />
      <Text style={styles.header}>Create an Account</Text>
      
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
        <TextInput
          label="Username"
          value={username}
          outlineColor="#000000"         
          activeOutlineColor="#9400de" 
          onChangeText={setUsername}
          mode="outlined"
          style={styles.input}       
          right={<TextInput.Icon icon="account" />}
        />
        <TextInput
          label="Password"
          value={password}
          outlineColor="#000000"         
          activeOutlineColor="#9400de" 
          onChangeText={setPassword}
          mode="outlined"
        secureTextEntry

          style={styles.input}       
          right={<TextInput.Icon icon="key" />}
        />
        <TextInput
        label="Confirm Password"
        value={ConfirmPassword}
        outlineColor="#000000"         
        activeOutlineColor="#9400de" 
        onChangeText={setConfirmPassword}
        mode="outlined"
        secureTextEntry
        style={styles.input}       
        right={<TextInput.Icon icon="key" />}
      />
        <View style={styles.options}>
          <View style={styles.rememberMe}>
            <Checkbox
              status={rememberMe ? 'checked' : 'unchecked'}
              onPress={() => setRememberMe(!rememberMe)}
            />
            <Text>I have read and agree to the</Text>
          </View>
          <TouchableOpacity onPress={() => alert('I love you <3')}>
            <Text style={styles.terms}>terms of service.</Text>
          </TouchableOpacity>
        </View>
      <Button mode="contained" onPress={() => alert('Your registration has been successfull! <3')} style={styles.button}>
        Sign up
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
    marginBottom: 15,
    paddingHorizontal: 45,
    },
options: {
    flexDirection: 'row',
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: -10
    },
rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30
    },
  input: {
    width: '80%',
    marginBottom: 15,
    alignSelf: 'center'
  },
  terms: {
    marginHorizontal: -25,
    color: '#0066cc',
  },
  button: {
    marginTop: 10,
    width: '80%',
    alignSelf: 'center'
  },
});

export default RegistrationPage;
