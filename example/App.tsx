import * as ExpoRecordScreenConfigPlugin from 'expo-record-screen-config-plugin';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>API key: {ExpoRecordScreenConfigPlugin.getApiKey()}</Text>
    </View>
  );
}