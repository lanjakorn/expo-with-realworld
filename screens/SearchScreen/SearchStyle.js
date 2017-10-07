import { StyleSheet, Platform, Dimensions } from 'react-native'
import { Colors } from 'constants'
import { resolution } from 'utilities'

export default StyleSheet.create( {
  container: {
    flexDirection: 'row',
    // backgroundColor: Colors.tintColor,
    // marginTop: 20,

    // height: resolution.isIphoneX ? 76 : 0,
  },
  items: {
    height: Dimensions.get( 'window' ).height * 0.8 - 20,
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
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        minHeight: 28,
      },
      android: {
        backgroundColor: 'white',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        flex: 1,
        justifyContent: 'flex-start',
        marginTop: 8,
        minHeight: 28,
      },
    } ),
  },
  icon: {
    ...Platform.select( {
      ios: {
        marginTop: resolution.isIphoneX ? 34 : 20,
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
    backgroundColor: 'transparent',
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
    height: 28,
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
    fontSize: 15,
    marginLeft: 12,
    marginRight: 12,
    marginTop: resolution.isIphoneX ? 42 : 28,
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
        marginTop: resolution.isIphoneX ? 36 : 22,
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
