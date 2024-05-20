import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from 'react-native';

interface ImageViewerProps {
  placeholderImageSource: string;
  selectedImage?:
    | string
    | {
        uri: ImageSourcePropType;
      }
    | null;
}

export const ImageViewer = ({
  placeholderImageSource,
  selectedImage,
}: ImageViewerProps) => {
  const imageSource = selectedImage
    ? { uri: selectedImage }
    : placeholderImageSource;

  return <Image source={imageSource} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
