import { StyleSheet } from 'react-native'

export default StyleSheet.create( {
  containerStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  sectionCenter: {
    alignItems: 'center',
    flex: 3,
    justifyContent: 'center',
  },
  sectionLeft: {
    flex: 5,
    flexDirection: 'column',
  },
  sectionRight: {
    flex: 5,
    flexDirection: 'column',
  },
  textMaxPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  textMaxPriceLable: {
    fontSize: 14,
    paddingBottom: 10,
    textAlign: 'left',
  },
  textMinPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  textMinPriceLable: {
    fontSize: 14,
    paddingBottom: 10,
    textAlign: 'right',
  },
  textSymbol: {
    alignContent: 'center',
    fontSize: 14,
  },
} )
