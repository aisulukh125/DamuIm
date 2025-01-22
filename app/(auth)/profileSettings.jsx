import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Alert, Image, StyleSheet, Dimensions } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import * as ImagePicker from "expo-image-picker";
import { FontAwesome } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const ProfileSettings = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
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
    if (field === "phoneNumber") {
      const phoneRegex = /^\+?\d{0,15}$/; // Validates phone numbers
      setValidation({ ...validation, [field]: phoneRegex.test(value) });
    } else {
      setValidation({ ...validation, [field]: value.trim().length > 0 });
    }
  };

  const handleSetPhoto = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert("Permission Required", "Please allow access to your media library.");
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
      Alert.alert("Error", "Please fill out all fields correctly.");
      return;
    }

    Alert.alert("Success", "Profile updated successfully!");
    router.push("../(tabs)/home");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo */}
      <Text style={styles.logo}>
        DAUY<Text style={styles.logoGreen}>SYM</Text>
      </Text>

      {/* Form Section */}
      <View style={styles.formContainer}>
        <Text style={styles.title}>Profile Settings</Text>

        {/* Profile Photo */}
        <TouchableOpacity style={styles.photoContainer} onPress={handleSetPhoto}>
          {photo ? (
            <Image source={{ uri: photo }} style={styles.photo} />
          ) : (
            <>
              <FontAwesome name="plus" size={32} color="#CCC" />
            </>
          )}
        </TouchableOpacity>
        <Text style={styles.photoLabel}>Please set your photo</Text>

        {/* First Name */}
        <Text style={styles.label}>First Name</Text>
        <View
          style={[
            styles.inputContainer,
            validation.firstName && styles.inputValid,
            !validation.firstName && form.firstName.length > 0 && styles.inputError,
          ]}
        >
          <TextInput
            style={styles.input}
            placeholder="Enter your first name"
            value={form.firstName}
            onChangeText={(text) => handleInputChange("firstName", text)}
          />
          {validation.firstName && <FontAwesome name="check-circle" size={20} color="#27AE60" />}
        </View>

        {/* Last Name */}
        <Text style={styles.label}>Last Name</Text>
        <View
          style={[
            styles.inputContainer,
            validation.lastName && styles.inputValid,
            !validation.lastName && form.lastName.length > 0 && styles.inputError,
          ]}
        >
          <TextInput
            style={styles.input}
            placeholder="Enter your last name"
            value={form.lastName}
            onChangeText={(text) => handleInputChange("lastName", text)}
          />
          {validation.lastName && <FontAwesome name="check-circle" size={20} color="#27AE60" />}
        </View>

        {/* Phone Number */}
        <Text style={styles.label}>Phone Number</Text>
        <View
          style={[
            styles.inputContainer,
            validation.phoneNumber && styles.inputValid,
            !validation.phoneNumber && form.phoneNumber.length > 0 && styles.inputError,
          ]}
        >
          <TextInput
            style={styles.input}
            placeholder="Enter your phone number"
            value={form.phoneNumber}
            onChangeText={(text) => handleInputChange("phoneNumber", text)}
            keyboardType="phone-pad"
          />
          {validation.phoneNumber && <FontAwesome name="check-circle" size={20} color="#27AE60" />}
        </View>

        {/* Submit Button */}
        <TouchableOpacity onPress={handleSubmit} style={styles.buttonContainer}>
          <LinearGradient
                      colors={["#27AE60", "#6FCF97"]}
                      start={{ x: 0.0, y: 0.0 }}
                      end={{ x: 1.0, y: 1.0 }}
                      style={styles.gradientButton}
          >
            <Text style={styles.buttonText}>Set</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: "10%",
    paddingVertical: 0,
  },
  logo: {
    fontSize: height * 0.03,
    fontWeight: "regular",
    color: "#333",
    position: "absolute",
    top: height * 0.01,
    left: width * 0.07,
  },
  logoGreen: {
    color: "#27AE60",
  },
  formContainer: {
    flex: 1,
    height: "70%",
    marginTop: height * 0.12,
    paddingBottom: height * 0.01,
    alignItems: "center",
  },
  title: {
    fontSize: height * 0.035,
    fontWeight: "600",
    color: "#27AE60",
    marginBottom: height * 0.03,
  },
  photoContainer: {
    width: height * 0.15,
    height: height * 0.15,
    borderRadius: height * 0.075,
    backgroundColor: "#F9F9F9",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: height * 0.01,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
  },
  photo: {
    width: "100%",
    height: "100%",
    borderRadius: height * 0.075,
  },
  photoLabel: {
    fontSize: height * 0.02,
    color: "#AAA",
    marginBottom: height * 0.03,
  },
  label: {
    fontSize: height * 0.02,
    color: "#666",
    marginBottom: height * 0.01,
    alignSelf: "flex-start",
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: height * 0.02,
    backgroundColor: "#F9F9F9",
    borderRadius: 20,
    paddingHorizontal: "4%",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  input: {
    flex: 1,
    height: height * 0.06,
    fontSize: height * 0.02,
  },
  inputValid: {
    borderWidth: 1,
    borderColor: "#27AE60",
  },
  inputError: {
    borderWidth: 1,
    borderColor: "red",
  },
  buttonContainer: {
    alignSelf: "center",
    width: "50%",
    marginVertical: height * 0.03,
  },
  gradientButton: {
    borderRadius: 20,
    height: height * 0.07,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
  },
  buttonText: {
    color: "#fff",
    fontSize: height * 0.022,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default ProfileSettings;
