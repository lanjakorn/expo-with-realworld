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
import { Button, Icon, SearchBar } from 'react-native-elements'
import { actions as settingsActions } from 'modules/Settings'
import { actions as searchScreenActions } from 'modules/Search'

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
    console.log( 'onSearchActive' )
    console.log( this.props.navigation )
    this.props.searching( true )
    this.props.navigation.navigate( 'search' )
    this.setState( { isTouchableDisabled: true } )
  }

  // componentDidMount() {
  //   console.log( 'onSearchActive' )
  //   this.props.searching( true )
  //   this.setState( { isTouchableDisabled: true } )
  //   this.refs.search_textinput_component.focus()
  // }

  componentDidUpdate() {
    if ( this.props.is_searching ) {
      console.log( this.props.is_searching )
      // this.refs.search_textinput_component.focus()
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
          buttonStyle={styles.buttonCancel}
          containerViewStyle={{
            marginLeft: 12,
            marginRight: 12,
          }}
          title="Cancel"
          fontSize={14}
          backgroundColor={Colors.tintColor}
          onPress={() => this.pressCancelButton()}
        />
      )
    }
  }

  onPriorityIconPress = () => {
    this.props.changeSearchText( this.props.search_text + '!' )
  }

  renderSearchIcon = () => {
    return (
      <View style={{ backgroundColor: Colors.darkTintColor }}>
        <Icon name={'search'} size={16} color={Colors.placeHolderText} />
      </View>
    )
  }

  onSubmitEditingSearch = () => {
    this.props.searched( ( searchQuery = this.props.search_text ) )
    this.props.changeSearchText( '' )
    this.props.navigation.navigate( 'products' )
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
          onPress={this.onSearchActive}
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
                placeholderTextColor={Colors.placeHolderText}
                value={this.props.search_text}
                onChangeText={text => this.onSearchTextChange( text )}
                onSubmitEditing={this.onSubmitEditingSearch}
                keyboardType={'web-search'}
                onFocus={this.onSearchActive}
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
    alignItems: 'center',
    backgroundColor: Colors.tintColor,
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 5,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 5,
  },
  touchableSearch: {
    backgroundColor: Colors.darkTintColor,
    borderRadius: 4,
    padding: 7,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  insideTouchableView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: Dimensions.get( 'window' ).width - 40,
  },
  altTouchableView: {
    width: Dimensions.get( 'window' ).width * 0.8 - 20,
    justifyContent: 'flex-start',
  },
  customSearchTextInputStyle: {
    height: 24,
    alignSelf: 'center',
    width: 50,
    fontSize: 14,
    marginLeft: 7,
    color: Colors.searchText,
  },
  buttonCancel: {
    padding: 0,
  },
} )

const combineAction = () => ( {
  ...settingsActions,
  ...searchScreenActions,
} )

const mapStateToProps = state => {
  return {
    is_searching: state.search.is_searching,
    search_text: state.search.search_text,
  }
}

export default connect( mapStateToProps, combineAction() )( SearchContainer )
