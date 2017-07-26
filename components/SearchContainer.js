import React, { Component } from 'react'
import { connect } from 'react-redux'
import Colors from 'constants/Colors'

import {
  Text,
  TextInput,
  TouchableOpacity,
  LayoutAnimation,
  View,
  Dimensions,
  StyleSheet,
  Keyboard,
  Platform,
} from 'react-native'
import { Button, Icon } from 'react-native-elements'
import * as settingsactions from '@screens/SettingsScreen/actions'
import * as searchScreenActions from '@screens/SearchScreen/actions'

class SearchContainer extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      isTouchableDisabled: false,
    }
  }

  componentWillUpdate() {
    LayoutAnimation.linear()
  }

  onSearchActive = () => {
    this.props.searching( true )
    this.props.navigation.navigate( 'search' )
    this.setState( { isTouchableDisabled: true } )
  }

  componentDidUpdate() {
    if ( this.props.is_searching ) {
      this.refs.search_textinput_component.focus()
    }
  }

  pressCancelButton = () => {
    this.props.searching( false )
    Keyboard.dismiss()
    this.props.navigation.goBack( null )
    this.props.changeSearchText( '' )
    this.setState( { isTouchableDisabled: false } )
  }

  showCancelButton = () => {
    if ( this.props.is_searching ) {
      return (
        <Button
          title="Cancel"
          fontSize={14}
          backgroundColor={Colors.tintColor}
          onPress={this.pressCancelButton.bind( this )}
        />
      )
    }
  }

  onPriorityIconPress = () => {
    this.props.changeSearchText( this.props.search_text + '!' )
  }

  renderSearchIcon = () => {
    if ( this.props.is_searching ) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Icon
            name={'priority-high'}
            size={16}
            color={Colors.darkTintColor}
            onPress={this.onPriorityIconPress}
          />
        </View>
      )
    }
    return (
      <View style={{ backgroundColor: Colors.darkTintColor }}>
        <Icon name={'search'} size={16} color="white" />
      </View>
    )
  }

  onSubmitEditingSearch = () => {
    this.props.searched( ( searchQuery = this.props.search_text ) )
    this.props.changeSearchText( '' )
    this.props.navigation.navigate( 'stories' )
    this.pressCancelButton()
  }

  onSearchTextChange = text => {
    this.props.changeSearchText( text )
  }

  render() {
    return (
      <View style={styles.SearchContainer}>
        <TouchableOpacity
          style={{ elevation: 4 }}
          disabled={this.state.isTouchableDisabled}
          onPress={this.onSearchActive.bind( this )}
        >
          <View ref="touchable_search" style={styles.touchableSearch}>
            <View
              style={[
                styles.insideTouchableView,
                this.props.is_searching && styles.altTouchableView,
              ]}
            >
              {this.renderSearchIcon()}
              <TextInput
                ref="search_textinput_component"
                autoCorrect={false}
                placeholderTextColor="white"
                value={this.props.search_text}
                onChangeText={text => this.onSearchTextChange( text )}
                onSubmitEditing={this.onSubmitEditingSearch}
                keyboardType={'web-search'}
                onFocus={this.onSearchActive.bind( this )}
                placeholder="Search"
                underlineColorAndroid={Colors.darkTintColor}
                style={[ styles.customSearchTextInputStyle ]}
              />
            </View>
          </View>
        </TouchableOpacity>
        {this.showCancelButton()}
      </View>
    )
  }
}

const styles = StyleSheet.create( {
  SearchContainer: {
    padding: 5,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.tintColor,
  },
  touchableSearch: {
    backgroundColor: Colors.darkTintColor,
    borderRadius: 4,
    padding: 7,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  insideTouchableView: {
    width: Dimensions.get( 'window' ).width - 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  altTouchableView: {
    width: Dimensions.get( 'window' ).width * 0.65 - 25,
  },
  customSearchTextInputStyle: {
    height: 24,
    alignSelf: 'stretch',
    width: 150,
    fontSize: 14,
    marginLeft: 7,
    color: 'white',
  },
} )

const combineAction = () => ( {
  ...settingsactions,
  ...searchScreenActions,
} )

const mapStateToProps = state => {
  return {
    is_searching: state.search.is_searching,
    search_text: state.search.search_text,
  }
}

export default connect( mapStateToProps, combineAction() )( SearchContainer )
