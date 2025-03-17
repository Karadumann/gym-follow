import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calisthenics Tracker</Text>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Workout')}
        style={styles.button}
      >
        Yeni Antrenman Başlat
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('Progress')}
        style={styles.button}
      >
        İlerleme Takibi
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    marginVertical: 10,
  },
});

export default HomeScreen; 