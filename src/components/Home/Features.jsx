import { View, Text, Image, StyleSheet } from 'react-native';

export default function Features({ data = [] }) {
  return (
    data.map(feature => {
      return (
        <View key={feature.id} style={styles.features}>
          <View style={styles.featureImgContainer}>
            <Image
              source={feature.imgURI}
              style={styles.featureImg}
            />
          </View>
          <Text style={styles.featureName}>{feature.name}</Text>
        </View>
      )
    })
  )
}

const styles = StyleSheet.create({
  features: {
    height: '100%',
    justifyContent: 'space-between',
  },
  featureImgContainer: {
    width: 100,
    height: 75,
    backgroundColor: '#EFEFEF',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  featureImg: {
    width: 68,
    height: 48
  },
  featureName: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.5)',
    fontWeight: '900',
    alignSelf: 'center',
    paddingVertical: 10,
    fontFamily: 'Montserrat-Bold'
  }
})