import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { images } from '../../constants'; // Adjust path for placeholder images

const Training = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Training</Text>
        <TouchableOpacity>
          <FontAwesome name="cog" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <Text style={styles.subtitle}>
        Watch this video to understand how to use the app properly!
      </Text>

      {/* Sections */}
      <TouchableOpacity style={styles.card}>
        <Image source={images.placeholder} style={styles.cardImage} />
        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>Meet Us!</Text>
          <Text style={styles.cardSubtitle}>
            Who are we and what is our purpose?
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Image source={images.placeholder} style={styles.cardImage} />
        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>How to use?</Text>
          <Text style={styles.cardSubtitle}>Quick reference guide.</Text>
        </View>
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
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 3,
  },
  cardImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  cardText: {
    padding: 10,
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0D9543',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#555',
  },
});

export default Training;
