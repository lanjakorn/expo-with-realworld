import { StyleSheet } from 'react-native'

export default StyleSheet.create( {
  containerStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  sectionLeft: {
    flex: 5,
    flexDirection: 'column',
  },
  sectionCenter: {
    alignItems: 'center',
    flex: 3,
    justifyContent: 'center',
  },
  sectionRight: {
    flex: 5,
    flexDirection: 'column',
  },
  textMinPriceLable: {
    fontSize: 14,
    paddingBottom: 10,
    textAlign: 'right',
  },
  textMinPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  textSymbol: {
    alignContent: 'center',
    fontSize: 14,
  },
  textMaxPriceLable: {
    fontSize: 14,
    paddingBottom: 10,
    textAlign: 'left',
  },
  textMaxPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
  },
} )
