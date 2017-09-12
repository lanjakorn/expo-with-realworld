import { Dimensions, StyleSheet } from 'react-native'

const { height } = Dimensions.get( 'window' )

export default StyleSheet.create( {
  iconContainer: {
    borderColor: '#888',
    borderRadius: 50,
    borderWidth: 2,
    marginLeft: 5,
    marginRight: 15,
    padding: 8,
  },
  infoContainer: {
    backgroundColor: 'white',
    flex: 1.5,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 20,
    paddingTop: 30,
  },
  infoContentBox: {
    flex: 1,
  },
  infoContentTitle: {
    fontWeight: 'bold',
  },
  infoItemBox: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingBottom: 25,
  },
  infoItemsBox: {
    flex: 1,
  },
  mapContaininer: {
    flex: 1,
  },
  mapView: {
    alignSelf: 'stretch',
    height: height * 0.4 - 50,
  },
  screenContainer: {
    flex: 1,
  },
} )
