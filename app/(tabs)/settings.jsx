import React from 'react';
import { View, Text, StyleSheet, Switch, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { images } from '../../constants';

const Settings = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
        <TouchableOpacity>
          <FontAwesome name="cog" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Profile Section */}
      <TouchableOpacity style={styles.card}>
        <Image source={images.placeholder} style={styles.profileImage} />
        <Text style={styles.cardText}>Profile Settings</Text>
        <FontAwesome name="angle-right" size={24} color="#333" />
      </TouchableOpacity>

      {/* Options Section */}
      <TouchableOpacity style={styles.card}>
        <View style={styles.iconContainer}>
          <FontAwesome5 name="crown" size={24} color="#FFD700" />
        </View>
        <Text style={styles.cardText}>Get PRO</Text>
        <FontAwesome name="angle-right" size={24} color="#333" />
      </TouchableOpacity>

      {/* Toggle Switches */}
      <View style={styles.toggleContainer}>
        <View style={styles.toggleRow}>
          <Text style={styles.toggleText}>Push - Notifications</Text>
          <Switch />
        </View>
        <View style={styles.toggleRow}>
          <Text style={styles.toggleText}>Dark Mode</Text>
          <Switch />
        </View>
        <View style={styles.toggleRow}>
          <Text style={styles.toggleText}>Translation History</Text>
          <Switch />
        </View>
      </View>

      {/* Additional Options */}
      <TouchableOpacity style={styles.card}>
        <View style={styles.iconContainer}>
          <FontAwesome5 name="palette" size={24} color="#333" />
        </View>
        <Text style={styles.cardText}>Appearance</Text>
        <FontAwesome name="angle-right" size={24} color="#333" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <View style={styles.iconContainer}>
          <FontAwesome5 name="comment" size={24} color="#333" />
        </View>
        <Text style={styles.cardText}>Feedback</Text>
        <FontAwesome name="angle-right" size={24} color="#333" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <View style={styles.iconContainer}>
          <FontAwesome name="question-circle" size={24} color="#333" />
        </View>
        <Text style={styles.cardText}>Help</Text>
        <FontAwesome name="angle-right" size={24} color="#333" />
      </TouchableOpacity>
    </ScrollView>
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
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    padding: 10,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    backgroundColor: '#FFF',
    borderRadius: 30,
    padding: 10,
    marginRight: 16,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  cardText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  toggleContainer: {
    marginTop: 20,
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    marginBottom: 16,
    elevation: 3,
  },
  toggleText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Settings;
