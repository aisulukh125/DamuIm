import React, { useState } from 'react';
import { View, Text, TextInput, SafeAreaView, StyleSheet, Alert } from 'react-native';
import { CustomButton } from '../../components';
import { router } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

const NumberVerification = () => {
  const [code, setCode] = useState('');
  const [isCodeValid, setIsCodeValid] = useState(false);

  const validateCode = (input) => {
    const codeRegex = /^\d{4}$/; // 4-digit numeric code
    setIsCodeValid(codeRegex.test(input));
    setCode(input);
  };

  const handleConfirm = () => {
    if (code === '1234') {
      Alert.alert('Success', 'Phone number verified!');
      router.push('../(tabs)/home'); // Redirect to the home page
    } else {
      Alert.alert('Error', 'Invalid verification code.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logoText}>
        DAUYS<Text style={{ color: '#0D9543' }}>YM</Text>
      </Text>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Verify your Number</Text>
        <Text style={styles.subtitle}>Please verify your phone number</Text>

        {/* Verification Code Input */}
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Enter verification code (4-digit)"
            value={code}
            onChangeText={(text) => validateCode(text)}
            keyboardType="number-pad"
            maxLength={4}
          />
          {isCodeValid && <FontAwesome name="check-circle" size={20} color="#0D9543" style={styles.inputIcon} />}
        </View>

        {/* Confirm Button */}
        <CustomButton
          title="Confirm"
          handlePress={handleConfirm}
          containerStyles={styles.confirmButton}
          textStyles={styles.confirmButtonText}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
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
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
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
  input: {
    flex: 1,
    height: 50,
  },
  inputIcon: {
    marginLeft: 10,
  },
  confirmButton: {
    width: '80%',
    backgroundColor: '#0D9543',
    borderRadius: 25,
    paddingVertical: 15,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  confirmButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default NumberVerification;
