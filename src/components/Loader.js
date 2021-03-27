import React from 'react';
import { ActivityIndicator, Modal, StyleSheet, Text, View } from 'react-native';

const Loader = ({ isLoading }) => {
  return (
    <Modal
      visible={isLoading}
      transparent
      animationType="fade"
      onRequestClose={() => console.log('Close not allowed')}
    >
      <View style={styles.container}>
        <ActivityIndicator animating color="green" size="large" />
        <Text>Please wait...</Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(225, 225, 225, 0.5)'
  }
});

export default Loader;
