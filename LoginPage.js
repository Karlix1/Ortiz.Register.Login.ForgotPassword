import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { TextInput, Button, Text, Checkbox, Provider as PaperProvider} from 'react-native-paper';


const LoginPage = ({ navigation }) => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [rememberMe, setRememberMe] = React.useState(false);
    const handleSignUpPress = () => {
        navigation.navigate("Signup");
      };

  return (
    <PaperProvider>
      <View style={styles.container}>
      <Image source={require('./assets/BDO logo.png')} style={styles.logo} />
        <Text style={styles.header}>BDO ACCOUNT LOGIN</Text>

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

        <View style={styles.options}>
          <View style={styles.rememberMe}>
            <Checkbox
              status={rememberMe ? 'checked' : 'unchecked'}
              onPress={() => setRememberMe(!rememberMe)}
            />
            <Text>Remember me</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Recover Account')}>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <Button mode="contained" style={styles.loginAccountButton} onPress={() => alert('Funtion not added yet!')}>
          Login
        </Button>
        <View style={styles.signUp}>
            <Text style={styles.text}>Don't have an account?{' '}
            <Text style={styles.signUp} onPress={handleSignUpPress}>
            Sign up</Text>
            </Text>
        </View>

        <TouchableOpacity onPress={() => alert('owshie')}>
          <Text style={styles.terms}>Terms and Conditions</Text>
        </TouchableOpacity>
        <Text style={styles.header2}>Registration-Login-ForgotPassword App By Carl Anthony S. Ortiz | BSIT-3R13</Text>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
        marginTop: -200
    },
    logo: {
        width: 100,      
        height: 100,     
        marginBottom: 20,
        borderRadius: 40, 
      },
    header: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    header2: {
      fontSize: 10,
      fontWeight: 'bold',
      marginBottom: 20,
      position: 'absolute',  
      bottom: 0,             
      alignSelf: 'center',
    },
    
    input: {
      width: '80%',
      marginBottom: 15,
    },
    options: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%',
      alignItems: 'center',
      marginBottom: 20,
    },
    rememberMe: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    forgotPassword: {
      color: '#0066cc',
      fontSize: 14,
    },
    loginAccountButton: {
      width: '80%',
      paddingVertical: 5,
      backgroundColor: '#9400de',
    },
    signUp: {
      marginTop: 15,
      color: '#0066cc',
      fontSize: 15,
    },
    terms: {
      marginTop: 15,
      color: '#999',
      fontSize: 12,
    },
  });

export default LoginPage;
