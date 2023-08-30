import { StyleSheet, Text, View } from 'react-native';

import * as ExpoRecordScreenConfigPlugin from 'expo-record-screen-config-plugin';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoRecordScreenConfigPlugin.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
