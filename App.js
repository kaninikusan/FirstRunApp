import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>カウンター</Text>
      
      <Text style={styles.counter}>{count}</Text>

      <TouchableOpacity
        style={[styles.button, styles.buttonGreen]}
        onPress={() => setCount(count + 1)}
      >
        <Text style={styles.buttonText}>+ 増やす</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.buttonRed]}
        onPress={() => setCount(0)}
      >
        <Text style={styles.buttonText}>リセット</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.buttonBlue]}
        onPress={() => setCount(count - 1)}
      >
        <Text style={styles.buttonText}>- 減らす</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  counter: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 30,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginVertical: 8,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  buttonGreen: {
    backgroundColor: '#34C759',
  },
  buttonRed: {
    backgroundColor: '#FF3B30',
  },
  buttonBlue: {
    backgroundColor: '#007AFF',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});