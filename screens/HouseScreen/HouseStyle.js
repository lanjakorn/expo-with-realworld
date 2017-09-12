import { Dimensions, StyleSheet } from 'react-native'

const { height, width } = Dimensions.get( 'window' )

export default StyleSheet.create( {
  backgroundImage: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    resizeMode: 'cover',
    height: height * 0.2 - 20,
    width: width * 1,
  },
  searchListItemStyle: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
  },
  text: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textSection: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  textDescription: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'black',
    fontSize: 14,
    marginBottom: 5,
    marginLeft: 12,
    marginRight: 12,
    marginTop: 5,
    textAlign: 'center',
  },
  textDescriptionSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
  },
} )
