import React, { Component } from 'react'
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { connect } from 'react-redux'
import {
  Button,
  FormInput,
  FormLabel,
  FormValidationMessage,
} from 'react-native-elements'
import { actions as authActions } from 'modules/Auth'

import { SpinnerButton } from '@components/common'

class EnterCode extends Component {
  state = {
    titleText: 'Sales Log In',
    code: '',
  }

  componentWillMount() {
    this.props.checkLogined()
  }

  componentWillReceiveProps( nextProps ) {
    if ( nextProps.error.code === 'auth/wrong-password' ) {
      this.setState( { password: '' } )
    }
  }

  onButtonPress = () => {
    const { code } = this.state
    this.props.verifyOTP( { email: this.props.emailForCode, code } )
  }

  renderButton = () => {
    const { loading } = this.props
    return (
      <View>
        <Button
          buttonStyle={{
            backgroundColor: '#FFF',
            borderColor: '#eee',
            borderRadius: 5,
            borderWidth: 1,
          }}
          textStyle={{
            color: '#CE1D45',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
          title={'LOGIN'}
          onPress={this.onButtonPress}
          disabled={loading}
        />
        {loading &&
          <SpinnerButton size="large" containerStyle={{ marginTop: -38 }} />}
      </View>
    )
  }

  render() {
    const { error } = this.props
    const { code, password, titleText } = this.state
    const {
      forgotPassContainer,
      forgotPassText,
      formInputContainer,
      formMessage,
      image,
      imageContainer,
      textTitle,
    } = styles
    return (
      <View style={styles.screenContainer}>
        {
          // <ImageBackground
          //   imageStyle={{flex: 1, width: null, height: null, resizeMode: 'stretch'}}
          //   source={require('./login-background.jpg')}
          // >
        }
        <View style={imageContainer}>
          <Image style={image} source={require( './ricoh-logo.jpg' )} />
        </View>
        <Text style={textTitle}>
          {titleText}
        </Text>
        <View style={formInputContainer}>
          <FormInput
            autoCapitalize="none"
            onChangeText={emailInput => this.setState( { code: emailInput } )}
            value={code}
            placeholder="Enter Code"
            placeholderTextColor="#bdc3c7"
          />
        </View>
        <FormValidationMessage labelStyle={formMessage}>
          {error.message}
        </FormValidationMessage>
        {this.renderButton()}
        {
          // </ImageBackground>
        }
      </View>
    )
  }
}
const styles = StyleSheet.create( {
  screenContainer: {
    backgroundColor: '#CE1D45',
    flex: 1,
    paddingTop: 15,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    height: 140,
    width: 207,
  },
  textTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 20,
    paddingTop: 30,
    textAlign: 'center',
  },
  formInputContainer: {
    marginTop: 70,
    marginBottom: 25,
  },
  formMessage: {
    color: '#ccc',
  },
  forgotPassContainer: {
    alignItems: 'flex-end',
    marginBottom: 5,
    marginLeft: 15,
    marginRight: 20,
    marginTop: 5,
  },
  forgotPassText: {
    color: '#FFF',
    textAlign: 'right',
  },
  buttonStyle: {
    backgroundColor: '#FFF',
    borderColor: '#eee',
    borderRadius: 5,
    borderWidth: 1,
  },
  buttonTextStyle: {
    color: '#CE1D45',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonTextDisabledStyle: {
    color: '#CCC',
    fontWeight: 'bold',
    textAlign: 'center',
  },
} )

const { otpRequest } = authActions

const mapDispatchToProps = dispatch => ( {
  actions: bindActionCreators(
    {
      otpRequest,
    },
    dispatch
  ),
} )

const mapStateToProps = ( { auth } ) => {
  const { email, errorMessage, isFetching } = auth

  return {
    email,
    errorMessage,
    isFetching,
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( EnterCode )
