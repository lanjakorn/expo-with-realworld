import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View, Platform } from 'react-native'
import { Button } from 'react-native-elements'
import Colors from 'constants/Colors'

const styles = StyleSheet.create( {
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
  boxContainer: {
    marginBottom: 20,
  },
  boxTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  textInputStyle: {
    padding: 5,
    backgroundColor: '#FFF',
    borderColor: '#FFF',
    borderRadius: 5,
    borderWidth: 1,
    height: 30,
  },
  textAreaStyleIos: {
    padding: 5,
    fontSize: 16,
    backgroundColor: '#FFF',
    borderColor: '#FFF',
    borderRadius: 5,
    borderWidth: 1,
    height: 200,
  },
  textAreaStyleAndriod: {
    padding: 5,
    fontSize: 16,
    backgroundColor: '#FFF',
    borderColor: '#FFF',
    borderRadius: 5,
    borderWidth: 1,
    height: 200,
    textAlignVertical: 'top',
  },
  buttonStyle: {
    alignSelf: 'flex-end',
    backgroundColor: '#FFF',
    backgroundColor: Colors.tintColor,
    borderColor: '#eee',
    borderRadius: 5,
    borderWidth: 1,
    marginRight: -15,
    marginTop: 10,
    paddingRight: 0,
    width: 170,
    height: 40,
  },
  buttonTextStyle: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
} )

class Faq extends Component {
  state = {
    textInput: '',
    textArea: '',
  }
  render() {
    const { textInput, textArea } = this.state
    const {
      boxContainer,
      boxTitle,
      buttonStyle,
      buttonTextStyle,
      screenContainer,
      screenTitle,
      textAreaStyleIos,
      textAreaStyleAndriod,
      textInputStyle,
    } = styles
    return (
      <View style={screenContainer}>
        <Text style={screenTitle}>ตั้งคำถาม</Text>
        <View style={boxContainer}>
          <Text style={boxTitle}>หัวข้อ</Text>
          <TextInput
            style={textInputStyle}
            onChangeText={text => this.setState( { textInput: text } )}
            value={textInput}
            underlineColorAndroid={Colors.darkTintColor}
          />
        </View>
        <View style={boxContainer}>
          <Text style={boxTitle}>ข้อความ</Text>
          <TextInput
            style={
              Platform.OS === 'ios' ? textAreaStyleIos : textAreaStyleAndriod
            }
            multiline={true}
            numberOfLines={6}
            onChangeText={text => this.setState( { textArea: text } )}
            underlineColorAndroid={Colors.darkTintColor}
            value={textArea}
          />
        </View>
        <Button
          buttonStyle={buttonStyle}
          textStyle={buttonTextStyle}
          title={'ส่ง'}
          onPress={() => {}}
        />
      </View>
    )
  }
}

export default Faq
