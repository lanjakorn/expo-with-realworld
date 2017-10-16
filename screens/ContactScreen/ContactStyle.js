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
    backgroundColor: '#fff',
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
    paddingTop: 10,
  },
  contactBodyItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  contactBodyText: {
    flex: 4,
    textAlign: 'left',
    width: 110,
  },
  contactBodyTitle: {
    flex: 4,
    fontWeight: 'bold',
    textAlign: 'right',
    color: Colors.tintColor,
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
  contactBodyContainer: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 30,
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
