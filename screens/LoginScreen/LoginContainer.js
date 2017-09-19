import React, { Component } from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native'
import { connect } from 'react-redux'
import { Button, FormInput, FormValidationMessage } from 'react-native-elements'
// import { Actions } from 'react-native-router-flux'
// import {
//   checkLogined,
//   emailChanged,
//   loginUser,
//   passwordChanged,
// } from '@actions/AuthActions'
import { ButtonSpinner } from '@components'
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
    // const { email, password } = this.state
    // this.props.loginUser( { email, password } )
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
          <ButtonSpinner size="large" containerStyle={{ marginTop: -38 }} />}
      </View>
    )
  }

  render() {
    const { email, password, titleText, error } = this.state
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
          <Image
            style={image}
            source={require( '../../assets/images/ricoh-logo-welcome.png' )}
          />
        </View>
        <Text style={textTitle}>
          {titleText}
        </Text>
        <View style={{ marginBottom: 15 }}>
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
        </View>
        <View style={formInputContainer}>
          <FormInput
            //color="white"
            inputStyle={{
              width: width * 1 - 45,
              color: 'white',
            }}
            autoCapitalize="none"
            onChangeText={passwordInput =>
              this.setState( { password: passwordInput } )}
            value={password}
            placeholder="Password"
            placeholderTextColor="white"
            secureTextEntry={true}
            underlineColorAndroid={'white'}
          />
        </View>
        <View style={forgotPassContainer}>
          <TouchableOpacity>
            <Text style={forgotPassText}>Forgot Password ?</Text>
          </TouchableOpacity>
        </View>
        <FormValidationMessage labelStyle={formMessage}>
          {error}
        </FormValidationMessage>
        {this.renderButton()}
        {
          // </ImageBackground>
        }
      </View>
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default connect( mapStateToProps )( LoginForm )
