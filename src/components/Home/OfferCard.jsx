import { Text, View, StyleSheet, Image } from 'react-native';

import { VideoPlayer } from '../common';
import Features from './Features';

export default function OfferCard({ offerName, headline, cashbackText, videoURI, showFeatures, features, brandLogo }) {
  return (
    <View style={styles.container}>
      <VideoPlayer
        videoURI={videoURI}
        brandLogo={brandLogo}
      />
      <View style={styles.content}>
        <Text style={styles.offerPlan}>{offerName}</Text>
        <Text style={styles.headline}>
          <Text>{headline}</Text>
          <Text style={styles.cashback}>{cashbackText}</Text>
        </Text>
        {showFeatures && features.length &&
          <View style={styles.featuresContainer}>
            <Features data={features} />
          </View>
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    minHeight: 480,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderColor: 'rgba(0, 0, 0, 0.08)',
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 12,
    marginVertical: 14,
    elevation: 10
  },
  offerPlan: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 28,
    color: '#6F767E',
    fontFamily: 'Montserrat-Bold'
  },
  content: {
    padding: 20,
  },
  headline: {
    fontSize: 22,
    color: '#001b19',
    fontFamily: 'Montserrat-Bold'
  },
  cashback: {
    color: "#058e33"
  },
  featuresContainer: {
    marginTop: 20,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
})