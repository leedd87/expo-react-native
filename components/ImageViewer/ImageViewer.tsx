import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export const ImageViewer = () => {
  const PlaceholderImage = require('../../assets/images/background-image.png');
  return <Image source={PlaceholderImage} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
