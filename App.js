import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import Navigation from './src/navigation';

import useCachedResources from './src/hooks/useCachedResources';

export default function App() {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  }
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Navigation />
    </View>
  );
}