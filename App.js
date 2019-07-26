import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return <WebView source={{ uri: 'https://sips.surge.sh/' }} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0086b8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
