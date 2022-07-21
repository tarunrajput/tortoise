export const userData = {
  id: 6174517,
  firstName: 'Billy',
  lastName: 'Butcher'
}

export const offersList = [
  {
    id: 1,
    offerName: 'IPHONE SAVINGS PLAN',
    headline: 'Save up for the next iPhone and ',
    cashbackText: 'get 10% Cashback',
    videoURI: require('../../assets/videos/_iphone13.mp4'),
    showFeatures: true,
    features: [
      {
        id: 1,
        imgURI: require('../../assets/truck.png'),
        name: 'Priority Delivery'
      },
      {
        id: 2,
        imgURI: require('../../assets/charger.png'),
        name: 'Free Charger'
      },
      {
        id: 3,
        imgURI: require('../../assets/merch.png'),
        name: 'Tortoise Merch'
      }
    ]
  },
  {
    id: 2,
    brand: 'MakeMyTrip',
    brandLogo: require('../../assets/mmt.png'),
    offerName: 'MAKE MY TRIP SAVINGS PLAN',
    headline: 'Save up for the next Vacation and ',
    cashbackText: 'get 10% Cashback!',
    videoURI: require('../../assets/videos/shoreline.mp4'),
  },
]