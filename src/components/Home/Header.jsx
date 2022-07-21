import { View, Text, StyleSheet, Image } from 'react-native';

export default function Header({ firstName, lastName }) {
  return (
    <View style={styles.row}>
      <View style={styles.headerLeft}>
        <Text style={styles.greeting}>Welcome back,</Text>
        <Text style={styles.name}>{firstName} {lastName}</Text>
      </View>
      <View style={styles.headerRight}>
        <View style={styles.headerRightBtn}>
          <Image source={require('../../../assets/logo.png')} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLeft: {
    justifyContent: 'space-between',
  },
  greeting: {
    fontSize: 16,
    color: 'rgba(17, 20, 45, 0.65)',
    fontFamily: 'Montserrat-SemiBold',
  },
  name: {
    color: '#11142D',
    fontSize: 24,
    fontFamily: 'Montserrat-Bold',
  },
  headerRight: {
    justifyContent: 'center',
  },
  headerRightBtn: {
    width: 48,
    height: 48,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(206, 239, 150, 0.51)',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
})