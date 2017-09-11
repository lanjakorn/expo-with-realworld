import { StyleSheet } from 'react-native'
import { Colors } from 'constants'

export default StyleSheet.create( {
  caseStudy: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
    backgroundColor: Colors.backgroundSection,
  },
  container: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    paddingBottom: 20,
    paddingTop: 20,
  },
  detailsView: {
    marginTop: 35,
    paddingLeft: 20,
    paddingRight: 20,
  },
  solution: {
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
