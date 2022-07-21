import { View, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Header, OfferList } from '../components/Home';

import { userData, offersList } from '../data/data';

export default function HomeScreen() {
  const { firstName, lastName } = userData;

  return (
    <SafeAreaView style={styles.container}>

      {/* Used ScrollView as list is small */}
      <ScrollView
        style={{ flex: 1 }}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <Header firstName={firstName} lastName={lastName} />
        <View style={styles.offersList}>
          <OfferList data={offersList} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f7',
    paddingTop: 24,
    paddingHorizontal: 22,
  },
  offersList: {
    paddingVertical: 16
  }
})