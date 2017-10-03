import { StyleSheet, Platform, Dimensions } from 'react-native'
import { Colors } from 'constants'

const { height } = Dimensions.get( 'window' )

export default StyleSheet.create( {
  // maincontainer: {
  //   flex: 1,
  // },
  items: {
    // ...Platform.select( {
    //   ios: {
    //     height: height - 170,
    //   },
    //   android: { height: height - 165 },
    // } ),
    height: Dimensions.get( 'window' ).height * 0.8,
  },
  item: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  options: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 20,
    // padding: 5,
  },
  sortBy: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 8,
  },
  itemContent: {
    padding: 15,
    flex: 5,
  },
  itemName: {
    fontSize: 14,
    fontWeight: '400',
    paddingBottom: 5,
  },
  itemType: {
    fontSize: 13,
    fontWeight: '200',
    paddingBottom: 5,
    width: Dimensions.get( 'window' ).width * 0.9,
  },
  itemPrice: {
    fontSize: 15,
    fontWeight: '400',
    paddingBottom: 5,
  },
  starRating: { alignSelf: 'flex-start' },
  filters: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchBar: {
    width: Dimensions.get( 'window' ).width * 0.9,
    backgroundColor: Colors.tintColor,
    borderColor: Colors.tintColor,
    alignItems: 'center',
    borderBottomWidth: 0,
    borderTopWidth: 0,
    marginLeft: 12,
    marginBottom: 0,
    marginTop: 0,
    padding: 0,
  },
  searchBox: {
    borderColor: Colors.tintColor,
    width: Dimensions.get( 'window' ).width * 0.9,
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
    fontSize: 15,
    height: 28,
    marginBottom: 6,
    marginLeft: 12,
    marginRight: 12,
    marginTop: 28,
    paddingLeft: 35,
    paddingRight: 12,
  },
  insideSearchBar: {
    backgroundColor: Colors.darkTintColor,
    borderColor: Colors.darkTintColor,
    alignItems: 'center',
    borderBottomWidth: 0,
    borderTopWidth: 0,
    fontSize: 15,
    height: 24,
    justifyContent: 'center',
    margin: 0,
    padding: 0,
    textAlign: 'center',
  },
  buttonCancel: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 0,
  },
  altTouchableView: {
    width: Dimensions.get( 'window' ).width * 0.8 - 5,
  },
} )
