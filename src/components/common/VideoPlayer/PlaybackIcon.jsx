import { ActivityIndicator } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function iPlaybackIcon({ playbackState }) {
  if (playbackState === 'Buffering') {
    return <ActivityIndicator size={40} color='rgba(255, 255, 255, 0.75)' />;
  } else if (playbackState === 'Paused') {
    return <MaterialCommunityIcons name='motion-play-outline' size={40} color='rgba(255, 255, 255, 0.75)' />;
  } else if (playbackState === 'Ended') {
    return <MaterialCommunityIcons name='motion-play-outline' size={40} color='rgba(255, 255, 255, 0.75)' />;
  } else {
    return null;
  }
}