import { Platform, StyleSheet } from 'react-native'
import { Colors } from 'constants'

export default StyleSheet.create( {
  cardWrapper: {
    flex: 1,
  },
  cardContainer: {
    flex: 1,
    padding: 0,
    margin: 0,
    borderWidth: 0,
    backgroundColor: '#F8F8F8',
  },
  cardHeaderContainer: {
    backgroundColor: '#2d3e50',
    paddingTop: 35,
    paddingBottom: 20,
  },
  contactBodyColon: {
    flex: 1,
    textAlign: 'center',
  },
  contactBodyContainer: {
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 10,
  },
  contactBodyItem: {
    backgroundColor: '#fff',
    // borderColor: Colors.tintColor,
    // borderLeftWidth: 2,
    flexDirection: 'row',
    marginBottom: 10,
  },
  contactBodyTitleContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
  },
  contactBodyTitle: {
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.tintColor,
  },
  contactBodyTextContainer: {
    backgroundColor: '#F5F5F5',
    flex: 2,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
  },
  contactBodyText: {
    color: '#2d3e50',
    fontSize: 14,
    fontWeight: 'bold',
  },
  contactHeaderName: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 8,
    textAlign: 'center',
    color: '#fff',
  },
  contactHeaderIconContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 5,
  },
  contactHeaderIcon: {
    color: '#fff',
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 30,
  },
  contactHeaderdDepartment: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff',
  },
  image: {
    borderColor: Colors.tintColor,
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170,
  },
  imageContainer: {
    ...Platform.select( {
      ios: {
        alignItems: 'center',
        elevation: 1,
        marginTop: -1,
      },
      android: {
        alignItems: 'center',
      },
    } ),
  },
} )
