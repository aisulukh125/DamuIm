import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { images } from '../../constants';

const Update = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Updates</Text>
        <TouchableOpacity>
          <FontAwesome name="cog" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <Text style={styles.subtitle}>New from the last update.</Text>

      <Image source={images.placeholder} style={styles.mainImage} />

      <Text style={styles.sectionTitle}>What's new in version 2.0?</Text>
      <Text style={styles.content}>
        We are pleased to present you the latest updates that will make your
        interaction with our app even more convenient and productive!
      </Text>
      <Text style={styles.content}>
        1. Improved performance and stability.
      </Text>
      <Text style={styles.content}>
        2. Updated interface design.
      </Text>
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
  mainImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0D9543',
    marginBottom: 10,
  },
  content: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
});

export default Update;
