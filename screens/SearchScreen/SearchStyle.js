import { StyleSheet, Platform, Dimensions } from 'react-native'
import { Colors } from 'constants'

export default StyleSheet.create( {
  items: {
    height: Dimensions.get( 'window' ).height * 0.8,
    backgroundColor: 'white',
  },
  item: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  options: {
    ...Platform.select( {
      ios: {
        backgroundColor: 'white',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        minHeight: 20,
      },
      android: {
        backgroundColor: 'white',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        flex: 1,
        justifyContent: 'space-between',
        minHeight: 20,
      },
    } ),
  },
  icon: {
    ...Platform.select( {
      ios: {
        marginTop: 20,
      },
      android: {
        marginTop: 15,
      },
    } ),
  },
  sortBy: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 8,
  },
  itemContent: {
    padding: 10,
    flex: 5,
  },
  itemName: {
    fontSize: 14,
    fontWeight: '400',
    paddingBottom: 5,
  },
  itemType: {
    width: Dimensions.get( 'window' ).width * 0.9,
    fontSize: 13,
    fontWeight: '200',
    paddingBottom: 5,
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
    ...Platform.select( {
      ios: {
        marginBottom: 6,
      },
      android: {
        marginBottom: 2,
      },
    } ),
    borderColor: Colors.tintColor,
    width: Dimensions.get( 'window' ).width * 0.9,
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
    fontSize: 15,
    height: 28,
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
  buttonContainerCancel: {
    ...Platform.select( {
      ios: {
        marginTop: 22,
      },
      android: {
        marginTop: 20,
      },
    } ),
    marginRight: 0,
    marginLeft: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
