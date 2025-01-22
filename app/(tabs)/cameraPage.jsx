import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
// import { Camera } from 'expo-camera';

const CameraPage = () => {
  // return (
  //   <View style={styles.container}>
  //     <Camera style={styles.camera} type={Camera.Constants.Type.back}>
  //       <View style={styles.overlay}>
  //         <TouchableOpacity style={styles.captureButton}>
  //           <Text style={styles.captureText}>Capture</Text>
  //         </TouchableOpacity>
  //       </View>
  //     </Camera>
  //   </View>
  // );
  return (
    <View style={styles.container}>
      <Text>Camera Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  camera: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  captureButton: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  captureText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CameraPage;
