import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, StyleSheet, Alert, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';
import { CustomButton } from '../../components';
import * as ImagePicker from 'expo-image-picker';

const profileSettings = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
  });
  const [photo, setPhoto] = useState(null);
  const [validation, setValidation] = useState({
    firstName: false,
    lastName: false,
    phoneNumber: false,
  });

  const handleInputChange = (field, value) => {
    setForm({ ...form, [field]: value });

    // Validate inputs
    if (field === 'phoneNumber') {
      const phoneRegex = /^\+?\d{0,15}$/; // Validates phone numbers (basic)
      setValidation({ ...validation, [field]: phoneRegex.test(value) });
    } else {
      setValidation({ ...validation, [field]: value.trim().length > 0 });
    }
  };

  const handleSetPhoto = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert('Permission Required', 'Please allow access to your media library.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    if (!validation.firstName || !validation.lastName || !validation.phoneNumber) {
      Alert.alert('Error', 'Please fill out all fields correctly.');
      return;
    }

    Alert.alert('Success', 'Profile updated successfully!');
    router.push('./numberVerification');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logoText}>
        DAUYS<Text style={{ color: '#0D9543' }}>YM</Text>
      </Text>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Profile Setting</Text>

        {/* Profile Photo Section */}
        <TouchableOpacity style={styles.photoContainer} onPress={handleSetPhoto}>
          {photo ? (
            <View>
              <Image
                source={{ uri: photo }}
                style={styles.photo}
              />
            </View>
          ) : (
            <>
              <FontAwesome name="camera" size={32} color="#CCC" />
              <Text style={styles.photoText}>Please set your photo</Text>
            </>
          )}
        </TouchableOpacity>

        {/* Input Fields */}
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={form.firstName}
            onChangeText={(text) => handleInputChange('firstName', text)}
          />
          {validation.firstName && <FontAwesome name="check-circle" size={20} color="#0D9543" style={styles.inputIcon} />}
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={form.lastName}
            onChangeText={(text) => handleInputChange('lastName', text)}
          />
          {validation.lastName && <FontAwesome name="check-circle" size={20} color="#0D9543" style={styles.inputIcon} />}
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Phone number"
            value={form.phoneNumber}
            onChangeText={(text) => handleInputChange('phoneNumber', text)}
            keyboardType="phone-pad"
          />
          {validation.phoneNumber && <FontAwesome name="check-circle" size={20} color="#0D9543" style={styles.inputIcon} />}
        </View>

        {/* Submit Button */}
        <CustomButton
          title="Set"
          handlePress={handleSubmit}
          containerStyles={styles.submitButton}
          textStyles={styles.submitButtonText}
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
    marginBottom: 20,
  },
  photoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: 100,
    height: 100,
    backgroundColor: '#F9F9F9',
    marginBottom: 20,
    borderColor: '#CCC',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  photoText: {
    fontSize: 14,
    color: '#888',
    marginTop: 10,
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
  submitButton: {
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
  submitButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default profileSettings;
