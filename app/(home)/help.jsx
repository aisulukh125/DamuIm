import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Help = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Help</Text>
        <TouchableOpacity>
          <FontAwesome name="cog" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* FAQ Section */}
      <Text style={styles.subtitle}>FAQ</Text>
      <Text style={styles.faq}>
        - How do I create an account in the app?{'\n'}
        - How do I change my profile settings?{'\n'}
        - How to set up notifications?{'\n'}
        - How is my data protected?{'\n'}
      </Text>

      {/* Write Us Section */}
      <Text style={styles.writeUsTitle}>Write Us</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Write here..."
        multiline={true}
        maxLength={5000}
      />
      <TouchableOpacity style={styles.sendButton}>
        <Text style={styles.sendButtonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#0D9543',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0D9543',
    marginBottom: 10,
  },
  faq: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
  },
  writeUsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0D9543',
    marginBottom: 10,
  },
  textInput: {
    height: 150,
    borderColor: '#DADADA',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  sendButton: {
    backgroundColor: '#0D9543',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Help;
