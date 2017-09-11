import { Dimensions, StyleSheet } from 'react-native'
import { Colors } from 'constants'

const { width } = Dimensions.get( 'window' )
export default StyleSheet.create( {
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
  },
  rowDescription: {
    flex: 5,
    justifyContent: 'flex-start',
  },
  rowMores: {
    flex: 1,
    justifyContent: 'flex-end',
    marginRight: 10,
  },
  rowPrefix: {
    flexDirection: 'row',
    marginRight: 20,
  },
  rowSymbol: {
    flexDirection: 'row',
    marginRight: 12,
  },
  rowTitle: {
    flexDirection: 'row',
    width: width * 0.8 + 20,
  },
  sectionDescription: {
    flex: 1,
    flexDirection: 'row',
  },
  sectionTitle: {
    flex: 1,
    flexDirection: 'row',
  },
  symbol: {
    fontSize: 16,
  },
  textDescription: {
    fontSize: 15,
    lineHeight: 24,
    color: Colors.textDescription,
  },
  textMores: {
    color: '#0066c0',
    fontSize: 15,
    lineHeight: 24,
  },
  textTitle: {
    fontSize: 15,
    lineHeight: 24,
  },
} )
