import { Dimensions, StyleSheet } from 'react-native'
import { Colors } from 'constants'

const { width } = Dimensions.get( 'window' )

export default StyleSheet.create( {
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
  },
  sectionTitle: {
    flex: 1,
    flexDirection: 'row',
  },
  rowSymbol: {
    flexDirection: 'row',
    marginRight: 12,
  },
  rowTitle: {
    flexDirection: 'row',
    width: width * 0.8 + 20,
  },
  textTitle: {
    fontSize: 15,
    lineHeight: 24,
  },
  symbol: {
    fontSize: 16,
  },
  rowPrefix: {
    flexDirection: 'row',
    marginRight: 20,
  },
  rowDescription: {
    flex: 5,
    justifyContent: 'flex-start',
  },
  sectionDescription: {
    flex: 1,
    flexDirection: 'row',
  },
  textDescription: {
    fontSize: 15,
    lineHeight: 24,
    color: Colors.textDescription,
  },
  rowMores: {
    flex: 1,
    justifyContent: 'flex-end',
    marginRight: 10,
  },
  textMores: {
    color: '#0066c0',
    fontSize: 15,
    lineHeight: 24,
  },
} )
