import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Alert } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [securePassword, setSecurePassword] = useState(true);
  const [emailValid, setEmailValid] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (inputEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailRegex.test(inputEmail));
  };

  const handleSocialLogin = () => {
    Alert.alert("Login Successful!");
    router.push("../home");
  };

  const handleLogin = () => {
    if (!emailValid) {
      setError("Invalid email format");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }
    setError("");

    Alert.alert("Login Successful!");
    router.push("../home");
  };

  return (
    <View style={styles.mainContainer}>
      {/* Main Container with Logo */}
      <Text style={styles.logo}>
        DAUY
        <Text style={styles.logoGreen}>SYM</Text>
      </Text>

      {/* Form Container */}
      <View style={styles.formContainer}>
        <Text style={styles.title}>Log In</Text>

        {/* Email Label */}
        <Text style={styles.label}>E-Mail</Text>
        <View
          style={[
            styles.inputContainer,
            error.includes("email")
              ? styles.inputError
              : emailValid && email.length > 0
              ? styles.inputValid
              : null,
          ]}
        >
          <TextInput
            style={styles.input}
            placeholder="example@mail.ru"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              validateEmail(text);
            }}
          />
          {emailValid ? (
            <Ionicons name="checkmark-circle" size={20} color="#27AE60" />
          ) : email.length > 0 && !emailValid ? (
            <Ionicons name="close-circle" size={20} color="red" />
          ) : null}
        </View>
        {error.includes("email") && (
          <Text style={styles.errorText}>{error}</Text>
        )}

        {/* Password Label */}
        <Text style={styles.label}>Password</Text>
        <View
          style={[
            styles.inputContainer,
            error.includes("Password") ? styles.inputError : null,
          ]}
        >
          <TextInput
            style={styles.input}
            placeholder=""
            secureTextEntry={securePassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={styles.icon}
            onPress={() => setSecurePassword(!securePassword)}
          >
            <Ionicons
              name={securePassword ? "eye-off-outline" : "eye-outline"}
              size={20}
              color="#888"
            />
          </TouchableOpacity>
        </View>
        {error.includes("Password") && (
          <Text style={styles.errorText}>{error}</Text>
        )}

        {/* Forgot Password */}
        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Log In Button */}
        <TouchableOpacity onPress={handleLogin} style={styles.buttonContainer}>
          <LinearGradient
            colors={["#27AE60", "#6FCF97"]}
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 1.0, y: 1.0 }}
            style={styles.gradientButton}
          >
            <Text style={styles.buttonText}>Log In</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Horizontal Line with OR */}
        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line} />
        </View>

        {/* Social Login */}
        <View style={styles.socialContainer}>
          <TouchableOpacity onPress={handleSocialLogin}>
            <Ionicons name="logo-google" size={32} color="#DB4437" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSocialLogin}>
            <Ionicons name="logo-apple" size={32} color="black" />
          </TouchableOpacity>
        </View>

        {/* Sign Up */}
        <TouchableOpacity
          style={styles.signUpContainer}
          onPress={() => router.push("./registration")}
        >
          <Text style={styles.signUpText}>Don't have an account yet? </Text>
          <Text style={styles.signUpLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: "10%",
    paddingVertical: 0,
  },
  formContainer: {
    flex: 1,
    marginTop: height * 0.17,
    paddingBottom: height * 0.1,
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
  title: {
    fontSize: height * 0.035,
    fontWeight: "600",
    color: "#27AE60",
    textAlign: "center",
    marginBottom: height * 0.03,
  },
  label: {
    fontSize: height * 0.02,
    color: "#666",
    marginBottom: height * 0.01,
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
  inputValid: {
    borderColor: "#27AE60",
    borderWidth: 1,
  },
  inputError: {
    borderColor: "red",
    borderWidth: 1,
  },
  input: {
    flex: 1,
    height: height * 0.06,
    fontSize: height * 0.02,
  },
  icon: {
    marginLeft: "4%",
  },
  errorText: {
    color: "red",
    alignSelf: "flex-start",
    marginBottom: height * 0.01,
    marginLeft: "4%",
    fontSize: height * 0.018,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: height * 0.03,
  },
  forgotText: {
    fontSize: height * 0.018,
    color: "#27AE60",
    fontWeight: "bold",
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
    fontSize: height * 0.03,
    fontWeight: "600",
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: height * 0.02,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  orText: {
    marginHorizontal: "4%",
    fontSize: height * 0.02,
    color: "#888",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: height * 0.04,
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  signUpText: {
    fontSize: height * 0.02,
    color: "#888",
  },
  signUpLink: {
    fontSize: height * 0.02,
    color: "#27AE60",
    fontWeight: "bold",
  },
});

export default Login;
