import { StyleSheet } from 'react-native'
import Colors from 'constants/Colors'

const styles = StyleSheet.create( {
  boxContainer: {
    marginBottom: 20,
  },
  boxTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  buttonStyle: {
    alignSelf: 'flex-end',
    borderColor: '#eee',
    borderRadius: 5,
    borderWidth: 1,
    height: 40,
    marginRight: -15,
    marginTop: 10,
    paddingRight: 0,
    width: 170,
    backgroundColor: Colors.tintColor,
  },
  buttonTextStyle: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  screenContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 25,
  },
  screenTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  textAreaStyleAndriod: {
    backgroundColor: '#FFF',
    borderColor: '#FFF',
    borderRadius: 5,
    borderWidth: 1,
    fontSize: 16,
    height: 200,
    padding: 5,
    textAlignVertical: 'top',
  },
  textAreaStyleIos: {
    backgroundColor: '#FFF',
    borderColor: '#FFF',
    borderRadius: 5,
    borderWidth: 1,
    fontSize: 16,
    height: 200,
    padding: 5,
  },
  textInputStyle: {
    backgroundColor: '#FFF',
    borderColor: '#FFF',
    borderRadius: 5,
    borderWidth: 1,
    height: 30,
    padding: 5,
  },
} )

export default styles
