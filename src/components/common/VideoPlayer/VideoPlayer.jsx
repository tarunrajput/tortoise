
import { useRef, useState } from 'react';
import { View, StyleSheet, Image, Pressable } from 'react-native';
import { Video } from 'expo-av';

import PlaybackIcon from './PlaybackIcon';

const VideoPlayer = ({ videoURI, brandLogo }) => {
  const playbackInstance = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [playbackState, setPlaybackState] = useState('Paused');
  
  const updatePlaybackCallback = (status) => {
    if (status.isLoaded) {
      setPlaybackState(status.didJustFinish ? 'Ended' : status.isBuffering ? 'Buffering' : status.shouldPlay ? 'Playing' : 'Paused');
    }
  }

  const togglePlayback = async () => {
    const shouldPlay = playbackState !== 'Playing';

    if (playbackInstance.current !== null) {
      await playbackInstance.current.setStatusAsync({
        shouldPlay,
        ...(playbackState === 'Ended' && { positionMillis: 0 }),
      })
      setPlaybackState(playbackState === 'Playing' ? 'Paused' : 'Playing')
    }
  }

  const toggleMute = () => {
    setIsMuted(isMuted => !isMuted);
  }
  const muteBtn = isMuted ? require('../../../../assets/muted.png') : require('../../../../assets/unmuted.png');

  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <Video
        ref={playbackInstance}
        source={videoURI}
        resizeMode="cover"
        style={{ flex: 1, borderTopLeftRadius: 18, borderTopRightRadius: 18 }}
        isMuted={isMuted}
        onPlaybackStatusUpdate={updatePlaybackCallback}
      />
      <Pressable style={styles.playBtn} onPress={playbackState === 'Buffering' ? null : togglePlayback}>
        <PlaybackIcon playbackState={playbackState} />
      </Pressable>
      {
        brandLogo &&
        <View style={styles.brandLogo}>
          <Image
            source={brandLogo}
            style={{ width: 56, height: 56 }}
            resizeMode='contain'
          />
        </View>
      }
      <Pressable style={styles.muteBtn} onPress={(playbackState === 'Buffering' || playbackState === 'Paused') ? null : toggleMute}>
        <Image
          source={muteBtn}
          style={{ width: 20, height: 20 }}
          resizeMode="contain"
        />
      </Pressable>
    </View>

  )

}

export default VideoPlayer;

const styles = StyleSheet.create({
  playBtn: {
    alignSelf: 'center',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  brandLogo: {
    position: 'absolute',
    bottom: 12,
    left: 20,
    width: 56, 
    height: 56
  },
  muteBtn: {
    position: 'absolute',
    bottom: 12,
    right: 20,
    width: 64,
    height: 42,
    backgroundColor: 'rgba(255, 255, 255, 0.63)',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
})