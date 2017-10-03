import React, { Component } from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  LayoutAnimation,
  Dimensions,
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Button, FormInput, FormValidationMessage } from 'react-native-elements'
// import { Actions } from 'react-native-router-flux'
// import {
//   checkLogined,
//   emailChanged,
//   loginUser,
//   passwordChanged,
// } from '@actions/AuthActions'
import { ButtonSpinner } from '@components'
import { actions as authActions } from 'modules/Auth'

const { width } = Dimensions.get( 'window' )

const styles = StyleSheet.create( {
  screenContainer: {
    backgroundColor: '#CE1D45',
    flex: 1,
    paddingTop: 15,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  image: {
    height: 89,
    width: 254,
    resizeMode: 'contain',
  },
  textTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 30,
    paddingTop: 20,
    textAlign: 'center',
  },
  formInputContainer: {
    marginBottom: 20,
    width: width * 1,
  },
  formMessage: {
    color: 'white',
  },
  forgotPassContainer: {
    alignItems: 'flex-end',
    marginBottom: 5,
    marginLeft: 15,
    marginRight: 20,
    marginTop: 5,
  },
  forgotPassText: {
    color: 'white',
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
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
} )

class LoginForm extends Component {
  state = {
    titleText: 'Sales Log In',
    email: '',
    password: '',
    passCode: '',
    error: '',
  }

  componentWillMount() {
    //this.props.checkLogined()
  }

  // componentWillReceiveProps( nextProps ) {
  //   if ( nextProps.error.code === 'auth/wrong-password' ) {
  //     this.setState( { password: '' } )
  //   }
  // }

  onButtonPress = () => {
    const { email } = this.state
    this.props.actions.otpRequest( email )
  }

  onButtonPassCodePress = () => {
    console.log( this.props.actions )
    console.log( this.props.profile )
    const { passCode } = this.state
    console.log( 'passCode: ', passCode )

    this.props.actions.otpVerify(
      this.props.profile.email,
      passCode,
      this.props.navigation
    )
  }

  // shouldComponentUpdate( nextProps, nextState ) {
  //   console.log( nextProps, nextState )
  //   return true
  // }

  renderButton = word => {
    console.log( 'click' )

    const { isFetching, profile: { isValidEmail } } = this.props
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
          title={isFetching ? ' ' : word}
          onPress={this.onButtonPress}
          disabled={isFetching}
        />
        {isFetching && (
          <ButtonSpinner size="large" containerStyle={{ marginTop: -38 }} />
        )}
      </View>
    )
  }

  renderPassCodeButton = word => {
    console.log( 'click' )

    const { isFetching, profile: { isValidEmail } } = this.props
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
          title={isFetching ? ' ' : word}
          onPress={this.onButtonPassCodePress}
          disabled={isFetching}
        />
        {isFetching && (
          <ButtonSpinner size="large" containerStyle={{ marginTop: -38 }} />
        )}
      </View>
    )
  }

  render() {
    const { email, password, titleText, error, passCode } = this.state
    const {
      forgotPassContainer,
      forgotPassText,
      formInputContainer,
      formMessage,
      image,
      imageContainer,
      textTitle,
    } = styles
    const { isValidEmail, uid, email: emailProfile } = this.props.profile
    console.log( 'isValidEmail', isValidEmail )
    return uid !== '' ? (
      <View style={imageContainer}>
        <Text>Welcome back {emailProfile}</Text>
      </View>
    ) : (
      <View style={styles.screenContainer}>
        <View style={imageContainer}>
          <Image
            style={image}
            source={require( '../../assets/images/ricoh-logo-welcome.png' )}
          />
        </View>
        <Text style={textTitle}>{titleText}</Text>
        <View style={{ marginBottom: 15 }}>
          {isValidEmail ? (
            <FormInput
              autoCapitalize="none"
              onChangeText={value => this.setState( { passCode: value } )}
              value={passCode}
              placeholder="Enter Code"
              placeholderTextColor="white"
              underlineColorAndroid={'white'}
            />
          ) : (
            <FormInput
              inputStyle={{
                width: width * 1 - 45,
                color: 'white',
              }}
              autoCapitalize="none"
              // color="white"
              onChangeText={emailInput => this.setState( { email: emailInput } )}
              value={email}
              placeholder="Email Address"
              placeholderTextColor="white"
              underlineColorAndroid={'white'}
            />
          )}
        </View>
        {this.props.errorMessage !== '' && (
          <FormValidationMessage
            labelStyle={formMessage}
            containerStyle={{ marginBottom: 15 }}
          >
            {this.props.errorMessage}
          </FormValidationMessage>
        )}
        {isValidEmail
          ? this.renderPassCodeButton( 'LOGIN' )
          : this.renderButton( 'GET CODE' )}
      </View>
    )
  }
}
const { otpRequest, otpVerify } = authActions

const mapDispatchToProps = dispatch => ( {
  actions: bindActionCreators(
    {
      otpRequest,
      otpVerify,
    },
    dispatch
  ),
} )

const mapStateToProps = ( { auth } ) => {
  const { profile, errorMessage, isFetching } = auth

  return {
    profile,
    errorMessage,
    isFetching,
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( LoginForm )
