import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, StyleSheet, Alert } from 'react-native';
import { Link, router } from 'expo-router';
import { CustomButton } from '../../components';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

// Simulated user database for login testing
const mockUserDatabase = [
  { email: 'darigasss@mail.ru', password: 'password123' },
];

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });
  const [emailValid, setEmailValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailRegex.test(email));
  };

  const handleLogin = () => {
    if (!form.email) {
      setErrorMsg('Enter your email');
      return;
    }
    if (!emailValid) {
      setErrorMsg('Email is incorrect');
      return;
    }
    if (!form.password) {
      setErrorMsg('Enter your password');
      return;
    }

    setErrorMsg('');

    // Simulate login by checking the mock database
    const user = mockUserDatabase.find(
      (user) => user.email === form.email && user.password === form.password
    );

    if (user) {
      Alert.alert('Success', 'Login successful!');
      router.push('../(tabs)/home'); // Redirect to the home page
    } else {
      setErrorMsg('Password is incorrect');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logoText}>
        DAUYS<Text style={{ color: '#0D9543' }}>YM</Text>
      </Text>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Log In</Text>
        <Text style={styles.errorText}>{errorMsg}</Text>

        {/* Email Field */}
        <View
          style={[
            styles.inputWrapper,
            errorMsg === 'Email is incorrect' || errorMsg === 'Enter your email'
              ? styles.errorBorder
              : null,
          ]}
        >
          <TextInput
            style={styles.input}
            placeholder="E-Mail"
            value={form.email}
            onChangeText={(text) => {
              setForm({ ...form, email: text });
              validateEmail(text);
            }}
            keyboardType="email-address"
          />
          {emailValid && <FontAwesome name="check-circle" size={20} color="#0D9543" style={styles.inputIcon} />}
          {!emailValid && form.email.length > 0 && (
            <FontAwesome name="times-circle" size={20} color="red" style={styles.inputIcon} />
          )}
        </View>

        {/* Password Field */}
        <View
          style={[
            styles.inputWrapper,
            errorMsg === 'Enter your password' || errorMsg === 'Password is incorrect'
              ? styles.errorBorder
              : null,
          ]}
        >
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={form.password}
            secureTextEntry={!showPassword}
            onChangeText={(text) => setForm({ ...form, password: text })}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <MaterialIcons
              name={showPassword ? 'visibility' : 'visibility-off'}
              size={20}
              color="#888"
              style={styles.inputIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Forgot Password */}
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity onPress={handleLogin} disabled={isSubmitting}>
          <LinearGradient
            colors={["#0D9543", "#3FB76F", "#A5E8C0"]} 
            start={{ x: 0.77, y: -0.22 }} 
            end={{ x: 0, y: 1 }} 
            style={styles.loginButton}
          >
            <Text style={styles.loginButtonText}>
              {isSubmitting ? 'Logging in...' : 'Log In'}
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* OR Section */}
        <View style={styles.orContainer}>
          <Text style={styles.orText}>──────── OR ────────</Text>
          <View style={styles.socialContainer}>
            <FontAwesome name="google" size={32} color="#DB4437" />
            <FontAwesome name="apple" size={32} color="#000000" style={{ marginLeft: 20 }} />
          </View>
        </View>

        {/* Sign Up Link */}
        <Text style={styles.signUpText}>
          Don’t have an account?{' '}
          <Link href="./registration" style={styles.signUpLink}>
            Sign Up
          </Link>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "80%",
    width: "90%",
    marginVertical: "10%",
    marginHorizontal: "5%",
    backgroundColor: "white",
  },
  logoText: {
    fontSize: 18,
    color: '#000',
    textAlign: 'left',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#0D9543',
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginVertical: 10,
    width: '80%',
    backgroundColor: '#F9F9F9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  errorBorder: {
    borderColor: 'red',
  },
  input: {
    flex: 1,
    height: 50,
  },
  inputIcon: {
    marginLeft: 10,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginRight: '10%',
    color: '#0D9543',
    fontWeight: '500',
    marginBottom: 20,
  },
  loginButton: {
    width: '100%',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Comfortaa",
  },
  orContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  orText: {
    fontSize: 14,
    color: '#888',
  },
  socialContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  signUpText: {
    fontSize: 14,
    color: '#000',
    marginTop: 20,
  },
  signUpLink: {
    color: '#0D9543',
    fontWeight: '600',
  },
});

export default Login;
