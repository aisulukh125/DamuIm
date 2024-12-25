import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { images } from '../../constants'; 

const Home = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.greeting}>
          Hello, <Text style={{ color: '#0D9543' }}>User!</Text>
        </Text>
        <TouchableOpacity>
          <FontAwesome name="cog" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Training Section */}
      <TouchableOpacity style={styles.card} onPress={() => router.push('../../(home)/training')}>
        <Image source={images.placeholder} style={styles.cardImage} />
        <View style={styles.cardTextContainer}>
          <Text style={styles.cardTitle}>Training</Text>
          <Text style={styles.cardSubtitle}>Learn how to use the app.</Text>
        </View>
      </TouchableOpacity>

      {/* Updates Section */}
      <TouchableOpacity style={styles.card} onPress={() => router.push('../../(home)/update')}>
        <View style={styles.cardPlaceholder} />
        <View style={styles.cardTextContainer}>
          <Text style={styles.cardTitle}>Updates</Text>
          <Text style={styles.cardSubtitle}>Find out what's new.</Text>
        </View>
      </TouchableOpacity>

      {/* Help Section */}
      <TouchableOpacity style={styles.helpSection} onPress={() => router.push('../../(home)/help')}>
        <FontAwesome name="question-circle" size={24} color="#0D9543" />
        <View style={styles.helpTextContainer}>
          <Text style={styles.helpTitle}>Help</Text>
          <Text style={styles.helpSubtitle}>Ask us questions.</Text>
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
  greeting: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  cardPlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: '#EAEAEA',
  },
  cardTextContainer: {
    flex: 1,
    padding: 10,
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
  helpSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  helpTextContainer: {
    marginLeft: 10,
  },
  helpTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0D9543',
  },
  helpSubtitle: {
    fontSize: 14,
    color: '#555',
  },
});

export default Home;
