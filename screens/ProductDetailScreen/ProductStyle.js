import { StyleSheet } from 'react-native'
import { Colors } from 'constants'

export default StyleSheet.create( {
  container: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    paddingTop: 20,
  },
  detailsView: {
    marginBottom: 22,
    marginTop: 35,
    paddingLeft: 20,
    paddingRight: 20,
  },
  faq: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
    backgroundColor: Colors.backgroundSection,
  },
  more: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 25,
    paddingLeft: 20,
    paddingRight: 20,
  },
  price: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 25,
    paddingBottom: 30,
    paddingTop: 30,
    backgroundColor: Colors.backgroundSection,
  },
  priceText: {
    marginTop: 5,
  },
  pros: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginTop: 25,
    paddingLeft: 20,
    paddingRight: 20,
  },
  questions: {
    flexDirection: 'row',
  },
  shippingText: {
    color: '#C0C0C0',
    fontSize: 13,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    paddingRight: 20,
  },
  thumbnailView: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
    marginTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
} )
