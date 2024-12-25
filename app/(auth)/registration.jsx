import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, SafeAreaView, StyleSheet, Alert } from 'react-native';
import { router, Link } from 'expo-router';
import { CustomButton } from '../../components';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const mockUserDatabase = []; // Simulating a database

const Registration = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirm_password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailRegex.test(email));
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  const registerUser = async () => {
    if (!form.email) {
      setErrorMsg('Enter your email');
      return;
    }
    if (!emailValid) {
      setErrorMsg('Invalid email format');
      return;
    }
    if (!form.password || !form.confirm_password) {
      setErrorMsg('Enter your password and confirm it');
      return;
    }
    if (form.password !== form.confirm_password) {
      setErrorMsg('Passwords do not match');
      return;
    }
    if (!validatePassword(form.password)) {
      setErrorMsg(
        'Password must be at least 8 characters, include 1 capital letter and 1 number'
      );
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    // Simulate Backend Database Interaction
    setTimeout(() => {
      const userExists = mockUserDatabase.find((user) => user.email === form.email);
      if (userExists) {
        setErrorMsg('Email is already in use');
      } else {
        mockUserDatabase.push({ email: form.email, password: form.password });
        Alert.alert('Success', 'Registration successful!');
        router.push('./profileSettings');
      }
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logoText}>
        DAUYS<Text style={{ color: '#0D9543' }}>YM</Text>
      </Text>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.errorText}>{errorMsg}</Text>

        <View style={styles.inputWrapper}>
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
        </View>

        <View style={styles.inputWrapper}>
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

        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={form.confirm_password}
            secureTextEntry={!showConfirmPassword}
            onChangeText={(text) => setForm({ ...form, confirm_password: text })}
          />
          <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
            <MaterialIcons
              name={showConfirmPassword ? 'visibility' : 'visibility-off'}
              size={20}
              color="#888"
              style={styles.inputIcon}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={registerUser} disabled={isSubmitting}>
          <LinearGradient
            colors={["#0D9543", "#3FB76F", "#A5E8C0"]} 
            start={{ x: 0.77, y: -0.22 }} 
            end={{ x: 0, y: 1 }} 
            style={styles.registerButton}
          >
            <Text style={styles.registerButtonText}>
              {isSubmitting ? 'Registering...' : 'Sign Up'}
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.orContainer}>
          <Text style={styles.orText}>──────── OR ────────</Text>
          <View style={styles.socialContainer}>
            <FontAwesome name="google" size={32} color="#DB4437" />
            <FontAwesome name="apple" size={32} color="#000000" style={{ marginLeft: 20 }} />
          </View>
        </View>

        <Text style={styles.logInText}>
          Already have an account?{' '}
          <Link href="./login" style={styles.logInLink}>
            Log In
          </Link>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "90%",
    width: "90%",
    marginVertical: "5%",
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
  },
  input: {
    flex: 1,
    height: 50,
  },
  inputIcon: {
    marginLeft: 10,
  },
  registerButton: {
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
  registerButtonText: {
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
  logInText: {
    fontSize: 14,
    color: '#000',
    marginTop: 20,
  },
  logInLink: {
    color: '#0D9543',
    fontWeight: '600',
  },
});

export default Registration;
